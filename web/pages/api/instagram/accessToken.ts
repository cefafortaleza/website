import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import fetch from 'node-fetch';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {code} = req.query;

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
          client_id: process.env.INSTAGRAM_CLIENT_ID,
          client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
          grant_type: 'authorization_code',
          redirect_uri: process.env.INSTAGRAM_REDIRECT_URI,
          code,
        }),
      }
    );

    const data = await response.json();

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
