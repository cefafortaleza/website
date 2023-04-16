import Link from 'next/link';
import {CustomPortableText} from '../PortableText';
import imageUrlBuilder from '@sanity/image-url';
import {client} from '../../sanityClient';

interface BuilderType {
  image: (source: {asset: {_ref: string}}) => {
    url: () => string;
  };
}

const builder: BuilderType = imageUrlBuilder(client);

interface BlogPostCardProps {
  post: {
    title: string;
    featuredImage: {asset: {_ref: string}};
    contentBlocks: any[];
    slug: string;
  };
}

const BlogPostCard = ({post}: BlogPostCardProps) => {
  const {featuredImage, slug, title, contentBlocks} = post;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-56 md:h-64 lg:h-72">
        {featuredImage && (
          <Link href={`/blog/${slug}`} legacyBehavior>
            <a>
              <img
                src={builder.image(featuredImage).url()}
                alt=""
                className="w-full h-full object-cover cursor-pointer"
              />
            </a>
          </Link>
        )}
      </div>
      <div className="px-4 py-4 md:px-6 md:py-6">
        <Link href={`/blog/${slug}`} legacyBehavior>
          <a className="text-gray-900 font-medium text-xl md:text-2xl hover:text-gray-700">
            {title}
          </a>
        </Link>
        <CustomPortableText value={contentBlocks} />
      </div>
    </div>
  );
};

export default BlogPostCard;
