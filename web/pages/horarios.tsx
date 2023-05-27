import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';


import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';

import {ActivitiesList} from '../types';
import {client} from '../sanityClient';


interface BuilderType {
  image: (source: {asset: {_ref: string}}) => {
    url: () => string;
  };
}

const builder: BuilderType = imageUrlBuilder(client);


type HorariosProps = {
  atividadesData: ActivitiesList;
};




export default function Horarios({atividadesData}: HorariosProps) {
  const {activitiesMobileImage, activitiesDesktopImage} = atividadesData;

  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-8 px-8 lg:px-0">
        <SectionTitle as="h2" size='large'>Horários</SectionTitle>
        {/* Horários */}
        {/* There should be an image here: */}
        <div>
          <img src={builder.image(activitiesDesktopImage).url()} alt="" className='w-full h-full object-cover  max-w-[768px] hidden md:block' />
          <img src={builder.image(activitiesMobileImage).url()} alt="" className='w-full h-full object-cover max-w-[300px] block md:hidden' />
          </div>

        {/* Livraria */}
        <SectionTitle size="large">Livraria</SectionTitle>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <p className="font-[900]">Sábados e Domingos</p>
            <p>15:00 às 19:30</p>
          </div>
          <div className="flex gap-4">
            <p className="font-[900]">2as, 4as, 5as, 6as</p>
            <p>18:00 às 20:30</p>
          </div>
          <div className="flex gap-4">
            <p className="font-[900]">Terças</p>
            <p>15:00 às 20:30</p>
          </div>
        </div>
        {/* Biblioteca */}
        <SectionTitle size="large">Biblioteca</SectionTitle>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <p className="font-[900]">Sábados e Domingos</p>
            <p>15:00 às 19:30</p>
          </div>
          <div className="flex gap-4">
            <p className="font-[900]">2as, 4as, 5as, 6as</p>
            <p>15:00 às 19:30</p>
          </div>
          <div className="flex gap-4">
            <p className="font-[900]">Terças</p>
            <p>15:00 às 20:30</p>
          </div>
        </div>
        {/* Palestras */}
        <div className="flex flex-col gap-4">
          <SectionTitle size="large">Palestras</SectionTitle>
          <Link href="/palestras">
            <span className="text-primary hover:text-[#333]">
              Clique aqui para ver os horários das próximas palestras!
            </span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent(`*[_type == "activitiesDoc"]`);

  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then((res) => res.json());

  const atividadesData = data.result[0];

  if (!atividadesData || atividadesData.length === 0) {
    return {
      props: {
        atividadesData: {},
      },
    };
  }

  return {
    props: {
      atividadesData,
    },
  };
};
