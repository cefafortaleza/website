import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import PalestraWrapper from '../components/PalestraWrapper';
import Palestra from '../components/Palestra';

import Layout from '../components/Layout';

export const PalestrasPageTemplate = ({ pageTitle, current, past }) => (
  <>
    <Container>
      <SectionTitle big>{pageTitle}</SectionTitle>
      <section>
        <SectionTitle>Palestras do mês</SectionTitle>
        <PalestraWrapper>
          {current.map((palestra, index) => {
            return (
              <Palestra
                title={palestra.palestra}
                speaker={palestra.palestrante}
                date={palestra.data}
                time={palestra.horario}
                id={`${index}-${palestra.palestra}`}
                key={`${index}-${palestra.palestra}`}
              />
            );
          })}
        </PalestraWrapper>
      </section>
      <section>
        <SectionTitle>Palestras Passadas</SectionTitle>
        <PalestraWrapper>
          {past.map((palestra, index) => {
            return (
              <Palestra
                title={palestra.palestra}
                speaker={palestra.palestrante}
                date={palestra.data}
                time={palestra.horario}
                key={index}
              />
            );
          })}
        </PalestraWrapper>
      </section>
    </Container>
  </>
);

PalestrasPageTemplate.propTypes = {
  pageTitle: PropTypes.string,
  current: PropTypes.shape([
    {
      palestra: PropTypes.string,
      palestrante: PropTypes.string,
      data: PropTypes.string,
      horario: PropTypes.string,
    },
  ]),
  past: PropTypes.shape([
    {
      palestra: PropTypes.string,
      palestrante: PropTypes.string,
      data: PropTypes.string,
      horario: PropTypes.string,
    },
  ]),
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
