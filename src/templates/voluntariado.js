import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

export const VoluntariadoPageTemplate = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

VoluntariadoPageTemplate.propTypes = {
  title: PropTypes.string,
};

const VoluntariadoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <VoluntariadoPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

VoluntariadoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default VoluntariadoPage;

export const pageQuery = graphql`
  query VoluntariadoPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "voluntariado" } }) {
      frontmatter {
        title
      }
    }
  }
`;
