import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

export const PalestrasPageTemplate = ({ pageTitle, current, past }) => (
  <>
    <Container>
      <SectionTitle>{pageTitle}</SectionTitle>
    </Container>
    <p>{current.palestra}</p>
    <p>{current.palestrante}</p>
    <p>{current.data}</p>
    <p>{current.horario}</p>
    <p>{past.palestra}</p>
    <p>{past.palestrante}</p>
    <p>{past.data}</p>
    <p>{past.horario}</p>
  </>
);

PalestrasPageTemplate.propTypes = {
  pageTitle: PropTypes.string,
  current: PropTypes.shape({
    palestra: PropTypes.string,
    palestrante: PropTypes.string,
    data: PropTypes.string,
    horario: PropTypes.string,
  }),
  past: PropTypes.shape({
    palestra: PropTypes.string,
    palestrante: PropTypes.string,
    data: PropTypes.string,
    horario: PropTypes.string,
  }),
};

const PalestrasPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);

  return (
    <Layout>
      <PalestrasPageTemplate
        pageTitle={frontmatter.pageTitle}
        current={frontmatter.current}
        past={frontmatter.past}
      />
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
        pageTitle
        current {
          palestra
          palestrante
          data
          horario
        }
        past {
          palestra
          palestrante
          data
          horario
        }
      }
    }
  }
`;
