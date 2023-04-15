import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import SectionTitle from '../SectionTitle';
import { ReactNode } from 'react';

type ImageComponentProps = {
  node: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  isInline: boolean;
};

const ImageComponent = ({ node, isInline }: ImageComponentProps) => {
  const { alt = '' } = node;
  const url = urlBuilder({ projectId: 'your-project-id', dataset: 'your-dataset-name' }).image(node).url() || '';

  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      style={{
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
    h1: (props: JSX.IntrinsicAttributes & { size?: 'small' | 'medium' | 'large'; as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'; children?: ReactNode }) => (
      <SectionTitle as="h3" size="large" {...props} />
    ),
    h2: (props: JSX.IntrinsicAttributes & { size?: 'small' | 'medium' | 'large'; as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'; children?: ReactNode }) => (
      <SectionTitle as="h3" size="medium" {...props} />
    ),
    h3: (props: JSX.IntrinsicAttributes & { size?: 'small' | 'medium' | 'large'; as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'; children?: ReactNode }) => (
      <SectionTitle as="h3" size="medium" {...props} />
    ),
    h4: (props: JSX.IntrinsicAttributes & { size?: 'small' | 'medium' | 'large'; as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'; children?: ReactNode }) => (
      <SectionTitle as="h3" size="small" {...props} />
    ),
  },
};

type CustomPortableTextProps = {
  value: any;
};

type PortableTextTypeComponent<P = any> = React.FunctionComponent<P & { key?: string }> | React.ComponentClass<P & { key?: string }>;

export const CustomPortableText = ({ value }: CustomPortableTextProps) => {
  return <PortableText value={value} components={components as unknown as Record<string, PortableTextTypeComponent<ImageComponentProps> | undefined>} />;
};
