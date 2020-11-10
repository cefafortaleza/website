import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import PalestraWrapper from '../components/PalestraWrapper';
import Palestra from '../components/Palestra';
import PalestraDetails from '../components/PalestraDetails';

import Layout from '../components/Layout';

export const PalestrasPageTemplate = ({ pageTitle, current, past }) => {
  
  const [palestraDetails, setPalestraDetails] = useState(null);

  const findPalestraByID = (palestraID) => [...current, ...past].filter(palestra => palestraID === `${palestra.palestra.replace(" ", "")}-${palestra.data}-${palestra.horario}`)[0]

  const handleDetail = (palestraID) => {
    console.log('id clicked: ', palestraID);
    if (palestraDetails && palestraID === `${palestraDetails.palestra.replace(" ", "")}-${palestraDetails.data}-${palestraDetails.horario}`) return setPalestraDetails(null);
    return setPalestraDetails(findPalestraByID(palestraID));
  };
  
  useEffect(() => {
    console.log('current state: ', palestraDetails);
  }, [palestraDetails]);
  
  return (
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
                  id={`${palestra.palestra.replace(" ", "")}-${palestra.data}-${palestra.horario}`}
                  key={`${palestra.palestra.replace(" ", "")}-${palestra.data}-${palestra.horario}`}
                  displayDetail={handleDetail}
                />
              );
            })}
          </PalestraWrapper>
          {palestraDetails  && current.filter(palestra => `${palestraDetails.palestra.replace(" ", "")}-${palestraDetails.data}-${palestraDetails.horario}` === `${palestra.palestra.replace(" ", "")}-${palestra.data}-${palestra.horario}`).length > 0 ? (
            <PalestraDetails palestra={palestraDetails.palestra} />
          ) : null}
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
                  id={`${palestra.palestra.replace(" ", "")}-${palestra.data}-${palestra.horario}`}
                  key={`${palestra.palestra.replace(" ", "")}-${palestra.data}-${palestra.horario}`}
                  displayDetail={handleDetail}
                />
              );
            })}
          </PalestraWrapper>
          {palestraDetails  && past.filter(palestra => `${palestraDetails.palestra.replace(" ", "")}-${palestraDetails.data}-${palestraDetails.horario}` === `${palestra.palestra.replace(" ", "")}-${palestra.data}-${palestra.horario}`).length > 0   ? (
            <PalestraDetails palestra={palestraDetails.palestra} />
          ) : null}
        </section>
      </Container>
    </>
  );
};

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
