import Button from '../components/Button';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import HomeCarousel from '../components/Carousel';
import InstagramFeed from '../components/InstagramFeed';
import {CustomPortableText} from '../components/PortableText';

export default function Home({
  homepageData,
  instagramHashtag,
}: any) {
  const {bannerOne, bannerTwo, livraria, maisDoCefa, slides} = homepageData;

  return (
    <Layout>
      {/* 1 - slider */}
      <HomeCarousel slides={slides} />

      {/* 2 - instagram */}
      <div className="container mx-auto flex flex-col gap-4 mb-8 px-8 lg:px-0">
        {/* Section Title */}
        <SectionTitle as="h2">Fique Ligado</SectionTitle>
        <InstagramFeed instagramHashtag={instagramHashtag} />
      </div>
      {/* 3 - banner - musical group */}
      <div className="w-full min-h-32 bg-bannerGrupoMusical bg-cover mb-4">
        <div className="container justify-center flex items-center mx-auto flex-col gap-6 py-28 px-8 lg:px-0">
          <h2 className="text-[24px] md:text-[32px] leading-[32px] font-[900] text-black text-center">
            {bannerOne?.title}
          </h2>
          <Button asLink href={bannerOne?.link}>
            {bannerOne?.buttonTitle}
          </Button>
        </div>
      </div>
      {/* 4 - more from cefa */}
      <div className="container mx-auto flex flex-col gap-4 mb-4 px-8 lg:px-0">
        {/* Section Title */}
        <SectionTitle size="large">Mais do Cefa</SectionTitle>
        <SectionTitle size="small">Doações Voluntárias</SectionTitle>
        <div className="flex flex-col gap-2 w-full">
          <CustomPortableText value={maisDoCefa} />
        </div>
      </div>
      {/* 5 - banner - would you like to rent a book */}
      <div className="w-full min-h-32 bg-bannerBiblioteca bg-cover mb-4">
        <div className="container justify-center flex items-center mx-auto flex-col gap-6 py-28 px-4 md:px-0">
          <h2 className="text-[24px] md:text-[32px] font-[900] text-white">
            {bannerTwo?.title}
          </h2>
          <Button asLink href={bannerTwo?.link}>
            {bannerTwo?.buttonTitle}
          </Button>
        </div>
      </div>
      {/* 6 - bookstore */}
      <div className="container mx-auto flex flex-col gap-4 mb-4 px-8 lg:px-0">
        {/* Section Title */}

        <SectionTitle size="small">Livraria</SectionTitle>
        <div className="flex flex-col gap-2 w-full">
          <CustomPortableText value={livraria} />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent(`*[_type == "homepage"]`);
  const url = `${process.env.SANITY_URL}query=${query}`;
  const homeData = await fetch(url).then((res) => res.json());

  const informationQuery = encodeURIComponent(`*[_type == "information"]{
    instagramHashtag
  }`);
  const informationUrl = `${process.env.SANITY_URL}query=${informationQuery}`;
  const informationData = await fetch(informationUrl).then((res) => res.json());

  return {
    props: {
      homepageData: homeData.result[0] || {},
      instagramHashtag: informationData.result[0].instagramHashtag || {},
    },
  };
};
