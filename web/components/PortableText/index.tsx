import {PortableText} from '@portabletext/react';
import urlBuilder from '@sanity/image-url';

import SectionTitle from '../SectionTitle';

const ImageComponent = ({image, isInline}) => {
  return (
    <img
      src={urlBuilder()
        .image(image)

        .url()}
      alt={image.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',
      }}
    />
  );
};

const components = {
  types: {
    image: ImageComponent,
  },
  block: {
    h1: (props) => <SectionTitle as="h3" size="large" {...props} />,
    h2: (props) => <SectionTitle as="h3" size="medium" {...props} />,
    h3: (props) => <SectionTitle as="h3" size="medium" {...props} />,
    h4: (props) => <SectionTitle as="h3" size="small" {...props} />,
  },
};

export const CustomPortableText = ({value}) => {
  return <PortableText value={value} components={components} />;
};
