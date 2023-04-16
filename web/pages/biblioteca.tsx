import urlBuilder from '@sanity/image-url';

import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import {CustomPortableText} from '../components/PortableText';

import {client} from '../sanityClient';

interface LibraryPage {
  _type: 'document';
  _id: string;
  image: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
    };
  };
  title: string;
  content: {
    _type: 'block';
    children: {_type: 'span'; text: string}[];
    markDefs: any[];
    style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
  }[];
}

type BibliotecaPageProps = {
  libraryPageData: LibraryPage;
};

export default function Biblioteca({libraryPageData}: BibliotecaPageProps) {
  console.log(libraryPageData);

  return (
    <Layout>
      <div
        className="block h-[400px] bg-cover"
        style={{
          backgroundImage: `url(${urlBuilder(client)
            .image(libraryPageData?.image)
            .url()})`,
        }}
      />
      <div className="container px-4 md:px-0 flex flex-col gap-4 container mx-auto px-8 lg:px-0">
        {/* Page Title */}
        <SectionTitle size="large">{libraryPageData?.title}</SectionTitle>
        <CustomPortableText value={libraryPageData?.content} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent(`*[_type == "library"]`);
  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then((res) => res.json());

  const libraryPageData = data.result[0];

  if (!libraryPageData || libraryPageData.length === 0) {
    return {
      props: {
        libraryPageData: {},
      },
    };
  }

  return {
    props: {
      libraryPageData,
    },
  };
};
