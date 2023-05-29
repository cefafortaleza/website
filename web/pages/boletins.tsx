import {useState} from 'react';

import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';

type Report = {
  title: string;
  url: any;
};

type YearlyReports = {
  year: number;
  reports: Report[];
};

type BoletinsPageProps = {
  boletinsPageData: YearlyReports[];
};

const BoletinsPage = ({boletinsPageData}: BoletinsPageProps) => {
  const [openYears, setOpenYears] = useState<number[]>([
    boletinsPageData[0].year,
  ]);

  const toggleYear = (year: number) => {
    if (openYears.includes(year)) {
      setOpenYears(openYears.filter((openYear) => openYear !== year));
    } else {
      setOpenYears([...openYears, year]);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-4 mb-4 px-8 lg:px-0">
        <SectionTitle size="large" as="h1">
          Boletins CEFA
        </SectionTitle>
        <div className="flex flex-col gap-12 mt-6">
          {Array.isArray(boletinsPageData) &&
            boletinsPageData.map(({year, reports}) => (
              <div key={year} className="flex flex-col gap-4">
                <div
                  className="flex flex-row gap-2 items-center justify-start cursor-pointer hover:underline"
                  onClick={() => toggleYear(year)}
                >
                  <h2 className="font-[900] text-[20px] line-height-[29px] cursor-pointer">
                    {year}
                  </h2>
                  <span className="h-[24px] w-[24px] cursor-pointer inline-block">
                    {openYears.includes(year) ? (
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
                </div>
                {openYears.includes(year) && (
                  <div className="flex flex-col gap-2">
                    {Array.isArray(reports) &&
                      reports.map(({url, title}) => (
                        <a
                          href={`${url}?dl=Boletim-Cefa-${title}-${year}.pdf`}
                          download
                          key={title}
                        >
                          <span className="text-primary hover:text-[#333] hover:underline text-lg cursor-pointer  ">
                            {title}
                          </span>
                        </a>
                      ))}
                  </div>
                )}
              </div>
            ))}
          {Array.isArray(boletinsPageData) && boletinsPageData.length === 0 && (
            <p>
              Não conseguimos encontrar nenhum boletim agora. Por favor, retorne
              mais tarde!
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = encodeURIComponent(`*[_type == "reports"]{
    year[]{
      year,
      reports[]{
        title,
        "url": file.asset->url
      }
    }
  }`);

  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then((res) => res.json());

  const boletinsPageData = data.result[0]?.year || [];

  return {
    props: {
      boletinsPageData,
    },
  };
};

export default BoletinsPage;
