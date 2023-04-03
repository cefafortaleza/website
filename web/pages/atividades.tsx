import Link from 'next/link';

import Layout from '../components/Layout';

import SectionTitle from '../components/SectionTitle';
import {CustomPortableText} from '../components/PortableText';

import type {ActivitiesList} from '../types';

type AtividadesProps = {
  atividadesData: ActivitiesList;
};

export default function Atividades({atividadesData}: AtividadesProps) {
  const {activitiesList} = atividadesData;

  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-8 px-8 lg:px-0">
        {/* ÍNDICE */}
        <div className="flex flex-col gap-4">
          <p className="font-[600] ">Índice</p>
          {Array.isArray(activitiesList) &&
            activitiesList.map(({title, subActivities}, activityIndex) => (
              <>
                <p className="font-[600] ">
                  {activityIndex + 1} - {title}
                </p>
                <div className="flex flex-col gap-2">
                  {Array.isArray(subActivities) &&
                    subActivities.map((subActivity, subActivityIndex) => (
                      <Link
                        href={`#${activityIndex + 1}.${subActivityIndex + 1}`}
                      >
                        <span className=" text-primary hover:text-[#333] text-sm">
                          {activityIndex + 1}.{subActivityIndex + 1} -{' '}
                          {subActivity.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </>
            ))}
        </div>

        {Array.isArray(activitiesList) &&
          activitiesList.map(
            ({description, title, subActivities}, activityIndex) => {
              return (
                <div className="flex flex-col gap-8">
                  <SectionTitle size="large" as="h2">
                    {activityIndex + 1} - {title}
                  </SectionTitle>
                  <CustomPortableText value={description} />
                  {subActivities.map((subActivity, subActivityIndex) => {
                    return (
                      <div
                        id={`${activityIndex + 1}.${subActivityIndex + 1}`}
                        className="flex flex-col gap-4"
                      >
                        <SectionTitle as="h3">
                          {`${activityIndex + 1}.${subActivityIndex + 1}`} -{' '}
                          {subActivity.title}
                        </SectionTitle>
                        <div className="flex flex-col gap-4">
                          <span className="font-[900] ">Horários</span>
                          <div className="flex flex-col gap-2">
                            {subActivity?.hours?.map(({dayOfWeek, time}) => (
                              <p>
                                {dayOfWeek} - {time}
                              </p>
                            ))}
                          </div>
                          <div className="flex flex-col gap-2">
                            <CustomPortableText
                              value={subActivity?.description}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            }
          )}
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
