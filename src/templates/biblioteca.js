import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import PostList from '../components/PostList';

export const BibliotecaPageTemplate = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

BibliotecaPageTemplate.propTypes = {
  title: PropTypes.string,
};

const BibliotecaPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <BibliotecaPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

BibliotecaPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BibliotecaPage;

export const pageQuery = graphql`
  query BibliotecaPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "biblioteca" } }) {
      frontmatter {
        title
      }
    }
  }
`;
