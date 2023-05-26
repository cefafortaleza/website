import Layout from '../components/Layout';

import SectionTitle from '../components/SectionTitle';
import Link from 'next/link';

import {ActivitiesList} from '../types';

type DayOfWeek =
  | 'Domingo'
  | 'Segunda'
  | 'Terça'
  | 'Quarta'
  | 'Quinta'
  | 'Sexta'
  | 'Sábado';

type HorariosProps = {
  atividadesData: ActivitiesList;
};

type TimeOfDay = 'man' | 'tar' | 'noi';

type TransformedActivities = {
  [key in DayOfWeek]: {
    [key in TimeOfDay]?: {
      title: string;
      time: string;
    }[];
  };
};



export default function Horarios({atividadesData}: HorariosProps) {
  const {activitiesList} = atividadesData;

  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-8 px-8 lg:px-0">
        <SectionTitle as="h2">Horários</SectionTitle>
        {/* Horários */}
        {/* There should be an image here: */}

        {/* Atividades */}
        <SectionTitle as="h2" size="large">
          Atividades
        </SectionTitle>

        {Array.isArray(activitiesList) &&
          activitiesList.map(({title, subActivities}, activityIndex) => (
            <>
              <SectionTitle as="h3">
                {activityIndex + 1} - {title}
              </SectionTitle>
              <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-fit gap-4">
                {Array.isArray(subActivities) &&
                  subActivities.map((subActivity, subActivityIndex) => (
                    <div className="p-4 flex flex-col gap-4 border border-black md:max-w-[350px]">
                      <SectionTitle as="h4" size="small">
                        {activityIndex + 1}.{subActivityIndex + 1} -{' '}
                        {subActivity.title}
                      </SectionTitle>
                    </div>
                  ))}
              </div>
            </>
          ))}

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
