import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';

const InstagramCallback: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {code} = req.query;
  const {INSTAGRAM_CLIENT_ID, INSTAGRAM_CLIENT_SECRET, INSTAGRAM_REDIRECT_URI} =
    process.env;

  try {
    // Exchange the authorization code for an access token
    const response = await fetch(
      `https://api.instagram.com/oauth/access_token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: INSTAGRAM_CLIENT_ID!,
          client_secret: INSTAGRAM_CLIENT_SECRET!,
          redirect_uri: INSTAGRAM_REDIRECT_URI!,
          code: code as string,
          grant_type: 'authorization_code',
        }),
      }
    );

    const data = await response.json();

    // Display the access token on the page
    res.status(200).send(`Your access token is: ${data.access_token}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'});
  }
};

export default InstagramCallback;
