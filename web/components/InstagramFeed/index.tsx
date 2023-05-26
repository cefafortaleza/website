import {useEffect, useState} from 'react';
import Button from '../Button';

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
  const [expandedCaptions, setExpandedCaptions] = useState<string[]>([]);

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
      <div className="flex flex-col gap-8 max-w-4xl w-full">
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
                  className="flex flex-col md:flex-row gap-4 md:gap-8 justify-start"
                  key={id}
                >
                  {/* Image */}
                  <a
                    href={permalink}
                    target="_top"
                    rel="noopener"
                    className="block cursor:pointer w-full min-w-[300px] max-w-[300px]"
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
                  <div className="flex flex-col gap-4 justify-start items-start">
                    <div className="flex flex-col gap-2">
                      <p>
                        {caption.length > 250 && !expandedCaptions.includes(id)
                          ? `${caption.slice(0, 250)}...`
                          : caption}
                        {caption.length > 250 && (
                          <span
                            onClick={() =>
                              setExpandedCaptions((prev) =>
                                prev.includes(id)
                                  ? prev.filter((item) => item !== id)
                                  : [...prev, id]
                              )
                            }
                            className="font-bold cursor-pointer transition hover:opacity-50 h-[24px] w-[24px] inline-block mb-[-6px]"
                          >
                            {expandedCaptions.includes(id) ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 15l-6-6-6 6" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                            )}
                          </span>
                        )}
                      </p>
                    </div>

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
