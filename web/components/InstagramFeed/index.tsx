import builder from '@sanity/image-url/lib/types/builder';
import {useEffect, useState} from 'react';
import Button from '../Button';
import {CustomPortableText} from '../PortableText';
import SectionTitle from '../SectionTitle';

type Media = {
  id: string;
  caption: string;
  media_url: string;
  thumbnail_url: string;
  media_type: string;
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
      console.log({instagramData: data});
      setPhotos(data.images);
      setIsLoading(false);
    };

    fetchPhotos();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8 max-w-4xl ">
        {isLoading ? ( // Render loading state
          <p>Carregando...</p>
        ) : (
          Array.isArray(photos) &&
          photos
            .filter((image) =>
              image?.caption?.includes(`#${instagramHashtag ?? 'sitecefa'}`)
            )
            .slice(0, 4)
            .map(
              ({
                media_type: mediaType,
                media_url: mediaUrl,
                permalink,
                caption,
                id,
                thumbnail_url: thumbnail,
              }) => (
                <div
                  className="flex flex-col md:flex-row gap-4 md:gap-8"
                  key={id}
                >
                  {/* Image */}
                  <a
                    href={permalink}
                    target="_top"
                    rel="noopener"
                    className="block cursor:pointer w-full min-w-[300px]"
                  >
                    <img
                      src={
                        mediaType.toLowerCase() === 'video'
                          ? thumbnail
                          : mediaUrl
                      }
                      className="w-[300px] h-[300px]"
                    />
                  </a>
                  {/* Content */}
                  <div className="flex flex-col gap-4 justify-center">
                    <p>{caption}</p>
                    <Button asLink href={permalink}>
                      Saiba mais!
                    </Button>
                  </div>
                </div>
              )
            )
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
