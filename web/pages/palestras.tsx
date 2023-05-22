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
  instagramEventsHashtag: string;
};

export default function Palestras({instagramEventsHashtag}: PalestrasProps) {
  const [photos, setPhotos] = useState<Media[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await fetch('/api/instagram').then((res) => res.json());
      setPhotos(data.images);
    };

    fetchPhotos();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-8 px-8 lg:px-0">
        <SectionTitle size="large">Palestras</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-fit">
          {Array.isArray(photos) &&
            photos
              .filter((images) =>
                images.caption.includes(instagramEventsHashtag)
              )
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
                    className="w-[300px] h-[300px]"
                  />
                </a>
              ))}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const informationQuery = encodeURIComponent(`*[_type === "information"]{
    instagramEventsHashtag
  }`);

  const informationUrl = `${process.env.SANITY_URL}query=${informationQuery}`;

  const informationData = await fetch(informationUrl).then((res) => res.json());

  return {
    props: {
      instagramHashtag: informationData.result[0].instagramHashtag ?? {},
    },
  };
};
