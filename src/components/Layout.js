import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${withPrefix('/')}img/apple-icon-57x57.png`}
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${withPrefix('/')}img/apple-icon-60x60.png`}
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${withPrefix('/')}img/apple-icon-72x72.png`}
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${withPrefix('/')}img/apple-icon-76x76.png`}
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${withPrefix('/')}img/apple-icon-114x114.png`}
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${withPrefix('/')}img/apple-icon-120x120.png`}
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${withPrefix('/')}img/apple-icon-144x144.png`}
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${withPrefix('/')}img/apple-icon-152x152.png`}
        />
        <link
          type="image/png"
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-icon-180x180.png`}
        />
        <link
          type="image/png"
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${withPrefix('/')}img/android-icon-192x192.png`}
        />
        <link
          type="image/png"
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
        />
        <link
          type="image/png"
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${withPrefix('/')}img/favicon-96x96.png`}
        />
        <link
          type="image/png"
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default TemplateWrapper;
