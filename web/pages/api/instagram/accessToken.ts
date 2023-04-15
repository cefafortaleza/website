import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import fetch from 'node-fetch';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {code} = req.query as {code?: string};

  try {
    // Exchange the code for an Access Token
    const response = await fetch(
      'https://api.instagram.com/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: process.env.INSTAGRAM_CLIENT_ID ?? '',
          client_secret: process.env.INSTAGRAM_CLIENT_SECRET ?? '',
          grant_type: 'authorization_code',
          redirect_uri: process.env.INSTAGRAM_REDIRECT_URI ?? '',
          code: code ?? '',
        }),
      }
    );

    const data: {
      access_token: string;
      user_id: string;
      expires_in: string;
      error_message?: string;
    } = await response.json() as any;

    if (!response.ok) {
      throw new Error(data.error_message || 'Internal Server Error');
    }

    const {access_token: accessToken, user_id: userId} = data;
    const expiresIn = data.expires_in;

    // Send the Access Token back to the client
    res.status(200).json({accessToken, userId, expiresIn});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

export default handler;
