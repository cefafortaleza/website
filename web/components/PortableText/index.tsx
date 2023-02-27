import {PortableText} from '@portabletext/react';
import urlBuilder from '@sanity/image-url';

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
};

export const CustomPortableText = (props) => {
  return <PortableText value={props.value} components={components} />;
};
