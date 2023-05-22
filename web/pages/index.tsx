import Button from '../components/Button';
import imageUrlBuilder from '@sanity/image-url';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import HomeCarousel from '../components/Carousel';
import InstagramFeed from '../components/InstagramFeed';
import {CustomPortableText} from '../components/PortableText';
import {client} from '../sanityClient';

interface BuilderType {
  image: (source: {asset: {_ref: string}}) => {
    url: () => string;
  };
}

const builder: BuilderType = imageUrlBuilder(client);

interface BlogPostProps {
  title: string;
  featuredImage: {asset: {_ref: string}};
  contentBlocks: any[];
  slug: string;
}

export default function Home({blogPostsData, homepageData}: any) {
  const {bannerOne, bannerTwo, livraria, maisDoCefa, slides} = homepageData;

  return (
    <Layout>
      {/* 1 - slider */}
      <HomeCarousel slides={slides} />

      {/* 2 - instagram */}
      <div className="container mx-auto flex flex-col gap-4 mb-8 px-8 lg:px-0">
        {/* Section Title */}
        <SectionTitle as="h2">Redes Sociais</SectionTitle>
        <InstagramFeed />
      </div>
      {/* 3 - latest posts */}
      <div className="container mx-auto flex flex-col gap-4 px-8 lg:px-0">
        {/* Section Title */}
        <SectionTitle as="h2">Fique Ligado</SectionTitle>

        {/* Posts Wrapper */}
        <div className="flex flex-col gap-8 md:gap-4 mb-8">
          {blogPostsData.map(
            ({title, featuredImage, contentBlocks, slug}: BlogPostProps) => (
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Image */}
                <img
                  src={builder.image(featuredImage).url()}
                  className="w-[300px] h-[300px]"
                />
                {/* Content */}
                <div className="md:max-w-xs flex flex-col gap-4  justify-center">
                  <div className="flex flex-col gap-2 max-w-fit">
                    <h2 className="font-bold text-md">{title}</h2>
                    <span className="w-4 h-1 block bg-black" />
                  </div>
                  <CustomPortableText value={contentBlocks.slice(1)} />
                  <Button asLink href={`/blog/${slug}`}>
                    Saiba mais!
                  </Button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/* 4 - banner - musical group */}
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
      {/* 5 - more from cefa */}
      <div className="container mx-auto flex flex-col gap-4 mb-4 px-8 lg:px-0">
        {/* Section Title */}
        <SectionTitle size="large">Mais do Cefa</SectionTitle>
        <SectionTitle size="small">Doações Voluntárias</SectionTitle>
        <div className="flex flex-col gap-2 w-full">
          <CustomPortableText value={maisDoCefa} />
        </div>
      </div>
      {/* 6 - banner - would you like to rent a book */}
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
      {/* 7 - bookstore */}
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

  const blogPostsQuery = encodeURIComponent(`*[_type == "blogPost"]{
    title,
    "slug": slug.current,
    featuredImage,
    contentBlocks,
    _createdAt,
  }`);

  const blogPostsUrl = `${process.env.SANITY_URL}query=${blogPostsQuery}`;

  const homeData = await fetch(url).then((res) => res.json());

  const blogPostsData = await fetch(blogPostsUrl).then((res) => res.json());

  const homepageData = homeData.result[0];

  return {
    props: {
      blogPostsData: blogPostsData?.result ?? [],
      homepageData: homepageData ?? {},
    },
  };
};
