import {useEffect, useState} from 'react';

type Media = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
};

type InstagramFeedProps = {
  instagramHashtag: string;
};

const InstagramFeed = ({instagramHashtag}: InstagramFeedProps) => {
  const [photos, setPhotos] = useState<Media[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await fetch('/api/instagram').then((res) => res.json());
      setPhotos(data.images);
    };

    fetchPhotos();
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-xl ">
      {Array.isArray(photos) &&
        photos
          .filter((images) => images.caption.includes(`${instagramHashtag ?? '#sitecefa'}`))
          .map(({media_url: mediaUrl, permalink, caption, id}) => (
            <a
              href={permalink}
              target="_top"
              rel="noopener"
              key={id}
              className="block cursor:pointer"
            >
              <img
                src={mediaUrl}
                alt={caption}
                className="w-64 md:w-full h-64 object-cover"
              />
            </a>
          ))}
    </div>
  );
};

export default InstagramFeed;
