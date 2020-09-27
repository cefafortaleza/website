import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import PostList from '../components/PostList';

export const GrupoMusicalPageTemplate = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

GrupoMusicalPageTemplate.propTypes = {
  title: PropTypes.string,
};

const GrupoMusicalPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GrupoMusicalPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

GrupoMusicalPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default GrupoMusicalPage;

export const pageQuery = graphql`
  query GrupoMusicalPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "grupo-musical" } }) {
      frontmatter {
        title
      }
    }
  }
`;
