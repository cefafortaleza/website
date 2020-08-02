import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import PostList from '../components/PostList';

export const HorariosPageTemplate = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

HorariosPageTemplate.propTypes = {
  title: PropTypes.string,
};

const HorariosPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HorariosPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

HorariosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HorariosPage;

export const pageQuery = graphql`
  query HorariosPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "horarios" } }) {
      frontmatter {
        title
      }
    }
  }
`;
