import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export const ContatoPageTemplate = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

ContatoPageTemplate.propTypes = {
  title: PropTypes.string,
};

const ContatoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContatoPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

ContatoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ContatoPage;

export const pageQuery = graphql`
  query ContatoPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contato" } }) {
      frontmatter {
        title
      }
    }
  }
`;
