import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

export const EspiritismoPageTemplate = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

EspiritismoPageTemplate.propTypes = {
  title: PropTypes.string,
};

const EspiritismoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <EspiritismoPageTemplate title={frontmatter.title} />
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
      }
    }
  }
`;
