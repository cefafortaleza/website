import Layout from '../../components/Layout';
import {CustomPortableText} from '../../components/PortableText';
import SectionTitle from '../../components/SectionTitle';
import {client} from '../../sanityClient';
import imageUrlBuilder from '@sanity/image-url';

interface BuilderType {
  image: (source: {asset: {_ref: string}}) => {
    url: () => string;
  };
}

const builder: BuilderType = imageUrlBuilder(client);

interface BlogPostProps {
  blogPostData: {
    title: string;
    featuredImage: {asset: {_ref: string}};
    contentBlocks: any[];
    slug: string;
  };
}

const BlogPost = ({blogPostData}: BlogPostProps): JSX.Element => {
  const {title, featuredImage, contentBlocks} = blogPostData;
  return (
    <Layout>
      <div className="container px-4 md:px-0 mx-auto flex flex-col gap-4">
        <SectionTitle size="large" as="h1">
          {title}
        </SectionTitle>
        <div className="relative h-[450px] w-[450px] mr-auto">
          <img
            src={builder.image(featuredImage).url()}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <CustomPortableText value={contentBlocks} />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({
  params,
}: {
  params: {slug: string};
}) => {
  const {slug} = params;
  const query =
    encodeURIComponent(`*[_type == "blogPost" && slug.current == "${slug}"][0]{
    title,
    "slug": slug.current,
    featuredImage,
    contentBlocks,
    _createdAt,
  }`);
  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then((res) => res.json());

  const blogPostData = data?.result;

  if (!blogPostData || blogPostData.length === 0) {
    return {
      props: {
        blogPostData: {},
      },
    };
  }

  return {
    props: {
      blogPostData,
    },
  };
};

export default BlogPost;
