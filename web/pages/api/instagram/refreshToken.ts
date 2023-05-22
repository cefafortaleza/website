import {NextApiResponse} from 'next';
import {createClient} from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL ?? '',
  process.env.SUPABASE_API_KEY ?? ''
);

export default async function handler(_, res: NextApiResponse) {
  try {
    // Fetch the access token from Supabase
    const {data: tokenData, error: tokenError} = await supabase
      .from('tokens')
      .select('instagramAccessToken')
      .eq('id', 1);
    if (tokenError || !tokenData || tokenData.length === 0) {
      throw new Error('Failed to fetch access token from Supabase');
    }

    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${tokenData[0].instagramAccessToken}`
    );
    if (!response.ok) {
      throw new Error('Instagram API error');
    }
    const data = await response.json();

    // Update the access token in Supabase
    const {error: updateError} = await supabase
      .from('tokens')
      .update({instagramAccessToken: data.access_token})
      .eq('id', 1);
    if (updateError) {
      throw updateError;
    }

    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({error: error.message});
  }
}
