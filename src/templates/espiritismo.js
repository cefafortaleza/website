import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import RichText from 'react-markdown';

export const EspiritismoPageTemplate = ({ title, content }) => (
  <section id="espiritismo">
    <Container className="teste classe">
      <SectionTitle>{title}</SectionTitle>
      <RichText>{content}</RichText>
    </Container>
  </section>
);

EspiritismoPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

const EspiritismoPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <EspiritismoPageTemplate
        title={frontmatter.title}
        content={frontmatter.content}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

EspiritismoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EspiritismoPage;

export const pageQuery = graphql`
  query EspiritismoPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "espiritismo" } }) {
      frontmatter {
        title
        content
      }
    }
  }
`;
