import {useEffect, useState} from 'react';

import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';

type Media = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
};

type PalestrasProps = {
  instagramEventsHashtag: string;
};

export default function Palestras({instagramEventsHashtag}: PalestrasProps) {
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
    <Layout>
      <div className="container mx-auto flex flex-col gap-8 px-8 lg:px-0">
        <SectionTitle size="large">Palestras</SectionTitle>
        {isLoading ? ( // Render loading state
          <p>Carregando...</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-xl ">
            {Array.isArray(photos) &&
              photos
                .filter(({caption, timestamp}) => {
                  if (!caption || !timestamp) return false;

                  const currentMonth = new Date().getMonth() + 1;
                  const timestampMonth = new Date(timestamp).getMonth() + 1;

                  return (
                    caption.includes(instagramEventsHashtag) &&
                    currentMonth === timestampMonth
                  );
                })
                .slice(0, 5)
                .map(({media_url: mediaUrl, permalink, caption, id}) => (
                  <a
                    href={permalink}
                    target="_top"
                    rel="noopener"
                    key={id}
                    className="block cursor:pointer min-w-[300px]"
                  >
                    <img
                      src={mediaUrl}
                      alt={caption}
                      className="w-[300px] h-[300px]"
                    />
                  </a>
                ))}
            {!isLoading &&
              Array.isArray(photos) &&
              photos
                .filter(
                  (images) =>
                    images?.caption &&
                    images.caption.includes(instagramEventsHashtag)
                )
                .slice(0, 4).length === 0 && (
                <p>
                  Não conseguimos encontrar nenhuma postagem. Por favor, volte
                  mais tarde
                </p>
              )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const informationQuery = encodeURIComponent(`*[_type == "information"]{
    instagramEventsHashtag
  }`);
  const informationUrl = `${process.env.SANITY_URL}query=${informationQuery}`;
  const informationData = await fetch(informationUrl).then((res) => res.json());

  return {
    props: {
      instagramEventsHashtag:
        informationData.result[0].instagramEventsHashtag ?? {},
    },
  };
};
