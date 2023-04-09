import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import https from 'https';
import { URLSearchParams } from 'url';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;
  const { instagramClientId, instagramClientSecret, instagramRedirectUri } = process.env;

  const params = new URLSearchParams({
    client_id: instagramClientId,
    client_secret: instagramClientSecret,
    grant_type: 'authorization_code',
    redirect_uri: instagramRedirectUri,
    code: code as string,
  });

  const options = {
    hostname: 'api.instagram.com',
    path: '/oauth/access_token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const postData = params.toString();
  
  const reqPost = https.request(options, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', async () => {
      const { access_token, user_id } = JSON.parse(data);

      // Set the Access Token and user ID in the session
      const expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 7; // One week
      await fetch('/api/instagram/storeSession', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken: access_token, userId: user_id, expiresAt }),
      });

      res.redirect('/');
    });
  });

  reqPost.write(postData);
  reqPost.end();

  reqPost.on('error', (error) => {
    console.error(error);
    res.redirect('/instagram-login?error=true');
  });
};

export default handler;
