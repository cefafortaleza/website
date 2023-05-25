import {useEffect, useState} from 'react';

import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';

type Media = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
};

type PalestrasProps = {
  instagramHashtag: string;
};

export default function Palestras({instagramHashtag}: PalestrasProps) {
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
          <div className="flex flex-col gap-4 max-w-fit">
            {Array.isArray(photos) &&
              photos
                .filter(
                  (images) =>
                    images?.caption && images.caption.includes(instagramHashtag)
                )
                .slice(0, 4)
                .map(({media_url: mediaUrl, permalink, caption, id}) => (
                  <a
                    href={permalink}
                    target="_top"
                    rel="noopener"
                    key={id}
                    className="block cursor:pointer min-w-[300px]"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <img
                        src={mediaUrl}
                        alt={caption}
                        className="w-[300px] h-[300px]"
                      />
                      <p>{caption}</p>
                    </div>
                  </a>
                ))}
            {!isLoading &&
              Array.isArray(photos) &&
              photos
                .filter(
                  (images) =>
                    images?.caption && images.caption.includes(instagramHashtag)
                )
                .slice(0, 4).length === 0 && (
                <p>
                  Não conseguimos buscar nenhuma imagem. Por favor volte mais
                  tarde.
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
    instagramHashtag
  }`);
  const informationUrl = `${process.env.SANITY_URL}query=${informationQuery}`;
  const informationData = await fetch(informationUrl).then((res) => res.json());

  return {
    props: {
      instagramHashtag: informationData.result[0].instagramHashtag ?? {},
    },
  };
};
