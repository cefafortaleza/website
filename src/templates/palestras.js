import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

export const PalestrasPageTemplate = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

PalestrasPageTemplate.propTypes = {
  title: PropTypes.string,
};

const PalestrasPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PalestrasPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

PalestrasPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PalestrasPage;

export const pageQuery = graphql`
  query PalestrasPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "palestras" } }) {
      frontmatter {
        title
      }
    }
  }
`;
