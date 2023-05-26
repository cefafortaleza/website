import {NextApiResponse} from 'next';
import {createClient} from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL ?? '',
  process.env.SUPABASE_API_KEY ?? ''
);

export default async function handler(req: any, res: NextApiResponse) {
  try {
    // Fetch the access token from Supabase
    const {data: tokenData, error: tokenError} = await supabase
      .from('tokens')
      .select('instagramAccessToken')
      .eq('id', 1);
    if (tokenError || !tokenData || tokenData.length === 0) {
      throw new Error('Failed to fetch access token from Supabase');
    }

    const url =
      req.query.next ??
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=200&access_token=${tokenData[0].instagramAccessToken}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Instagram API error');
    }

    const data = await response.json();
    const images = data.data.filter(
      (item: {media_type: string}) => item.media_type !== 'VIDEO'
    );

    res.status(200).json({
      images,
      next: data.paging && data.paging.next ? data.paging.next : null,
    });
  } catch (error: any) {
    res.status(500).json({error: error.message});
  }
}
