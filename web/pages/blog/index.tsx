import Layout from '../../components/Layout';
import BlogPostCard from '../../components/BlogPostCard';
import {client} from '../../sanityClient';

const PAGE_SIZE = 10;

interface BlogPostData {
  title: string;
  featuredImage: {asset: {_ref: string}};
  contentBlocks: any[];
  slug: string;
}

interface BlogIndexProps {
  blogPostData: BlogPostData[];

  page: number;
  hasNextPage: boolean;
}

const BlogIndex = ({
  blogPostData,
  page,
  hasNextPage,
}: BlogIndexProps): JSX.Element => {
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const visiblePosts = blogPostData.slice(startIndex, endIndex);

  return (
    <Layout>
      <div className="container px-4 md:px-0 mx-auto flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visiblePosts.map((blogPostData) => (
            <BlogPostCard key={blogPostData.slug} post={blogPostData} />
          ))}
        </div>
        {hasNextPage && (
          <div className="flex justify-center my-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                const nextPage = page + 1;
                window.location.href = `/blog?page=${nextPage}`;
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async ({query}: any) => {
  const page = parseInt(query.page || '1', 10);

  const skip = (page - 1) * PAGE_SIZE;
  const limit = PAGE_SIZE + 1;

  const queryResult = await client.fetch(
    `*[_type == "blogPost"] | order(_createdAt desc) { title,
      "slug": slug.current,
      featuredImage,
      contentBlocks, } [${skip}...${skip + limit}]`
  );

  const blogPostData = queryResult.slice(0, PAGE_SIZE);
  const hasNextPage = queryResult.length > PAGE_SIZE;

  return {
    props: {
      blogPostData,
      page,
      hasNextPage,
    },
  };
};

export default BlogIndex;
