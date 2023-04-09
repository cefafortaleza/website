import { useEffect, useState } from 'react';

type Media = {
  id: string;
  caption: string;
  media_url: string;
};

type InstagramFeedProps = {
  accessToken: string;
};

const InstagramFeed = ({ accessToken }: InstagramFeedProps) => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the user's personal feed
        const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${accessToken}`);
        const data = await response.json();
        setMedia(data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [accessToken]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {media.map((m) => (
        <div key={m.id}>
          <img src={m.media_url} alt={m.caption} />
          <p>{m.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;
