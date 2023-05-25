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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await fetch('/api/instagram').then((res) => res.json());
      setPhotos(data.images);
      setIsLoading(false);
    };

    fetchPhotos();
  }, []);

  return (
    <>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-xl ">
        {isLoading ? ( // Render loading state
          <p>Carregando...</p>
        ) : (
          Array.isArray(photos) &&
          photos
            .filter((image) =>
              image?.caption?.includes(`#${instagramHashtag ?? 'sitecefa'}`)
            )
            .slice(0, 4)
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
            ))
        )}
      </div>
      <div className="max-w-xl ">
        {!isLoading &&
          Array.isArray(photos) &&
          photos
            .filter((image) =>
              image?.caption?.includes(`#${instagramHashtag ?? 'sitecefa'}`)
            )
            .slice(0, 4).length === 0 && (
            <p>
              Não conseguimos encontrar nenhuma postagem. Por favor, volte mais
              tarde
            </p>
          )}
      </div>
    </>
  );
};

export default InstagramFeed;
