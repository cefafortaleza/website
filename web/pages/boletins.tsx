import Link from 'next/link';

import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';

type Boletim = {
  title: string;
  url: any;
};

type Boletins = {
  reports?: Boletim[];
};

type BoletinsPageProps = {
  boletinsPageData: Boletins;
};

const BoletinsPage = ({boletinsPageData}: BoletinsPageProps) => {
  const {reports} = boletinsPageData;
  return (
    <Layout>
      <div className="container mx-auto flex flex-col gap-4 mb-4 px-8 lg:px-0">
        <SectionTitle size="large" as="h1">
          Boletins CEFA
        </SectionTitle>
        <div className="flex flex-col gap-2 ">
          {Array.isArray(reports) &&
            reports.map(({title, url}) => (
              <a href={`${url}?dl=estatuto-cefa.pdf`} download>
                <span className="text-primary hover:text-[#333] hover:underline text-lg">
                  {title}
                </span>
              </a>
            ))}
          {Array.isArray(reports) && reports.length === 0 && (
            <p>Não encontramos nenhum boletim. Por favor volte mais tarde.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const query = encodeURIComponent(`*[_type == "reports"]{
    ...,
    reports[]{
      title,
      "url": file.asset->url
    }
  }`);

  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then((res) => res.json());

  const boletinsPageData = data.result[0];

  if (!boletinsPageData || boletinsPageData.length === 0) {
    return {
      props: {
        boletinsPageData: {},
      },
    };
  }

  return {
    props: {
      boletinsPageData,
    },
  };
};

export default BoletinsPage;
