import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import Features from '../components/Features';
import PostList from '../components/PostList';


import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import breaks from 'remark-breaks'


export const AtividadesPageTemplate = ({ title }) => (
  <section id="cefa-activities">
    <Container>
      <div className="index">
        <h3>Índice</h3>
        <Link to="#apresentacao">1. Apresentação</Link>
        <Link to="#board">
          2. Diretoria, conselho consultivo e coordenadorias
        </Link>
        <Link to="#estatuto">3. Estatuto</Link>
        <Link to="#regime-interno">4. Regimento Interno</Link>
        <Link to="#localizacao">5. Localização</Link>
      </div>
    </Container>
  </section >
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
