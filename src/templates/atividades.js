import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

export const AtividadesPageTemplate = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

AtividadesPageTemplate.propTypes = {
  title: PropTypes.string,
};

const AtividadesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AtividadesPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

AtividadesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AtividadesPage;

export const pageQuery = graphql`
  query AtividadesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "atividades" } }) {
      frontmatter {
        title
      }
    }
  }
`;
