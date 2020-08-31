import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import PostList from '../components/PostList';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';


import Instagram from '../assets/img/icon-instagram.svg';
import Facebook from '../assets/img/icon-facebook.svg';
import Youtube from '../assets/img/icon-youtube.svg';

export const SobrePageTemplate = ({
  pageTitle,
  sectionOneTitle,
  sectionOneContent,
  sectionTwoTitle,
  sectionThreeTitle,
  bylaws,
  sectionFourTitle,
  internalPolicyLink,
  sectionFiveTitle,
  phoneNumber,
  email,
}) => (
  <section id="cefa-about">
    <Container>
      <SectionTitle big>{pageTitle}</SectionTitle>
      <div>
        <div className="index">
          <h3>Índice</h3>
          <Link to="#apresentacao">Apresentação</Link>
          <Link to="#board">
            Diretoria, conselho consultivo e coordenadorias
          </Link>
          <Link to="#estatuto">Estatuto</Link>
          <Link to="#regime-interno">Regimento Interno</Link>
          <Link to="#localizacao">Localização</Link>
        </div>
        <p>ÍNDICE</p>
      </div>
      <div id="apresentacao">
        <SectionTitle>{sectionOneTitle}</SectionTitle>
        <p>{sectionOneContent}</p>
      </div>
      <div id="board">
        <SectionTitle>{sectionTwoTitle}</SectionTitle>
        <div>
          <p>TABS!!!</p>
        </div>
      </div>
      <div id="estatuto">
        <SectionTitle>{sectionThreeTitle}</SectionTitle>
        <a href={`${bylaws}`} download>
          Download!
        </a>
      </div>
      <div id="regime-interno">
        <SectionTitle>{sectionFourTitle}</SectionTitle>
        <a href={`${internalPolicyLink}`} download>
          Download!
        </a>
      </div>
      <div id="localizacao">
        <SectionTitle>{sectionFiveTitle}</SectionTitle>
        <p>
          Telefone: <Link to={`tel:+${phoneNumber}`}>{phoneNumber}</Link>
        </p>
        <p>
          Email: <Link to={`mailto:${email}`}>{email}</Link>
        </p>
        <div className="social-media-wrapper">
          <Link to='/'></Link>
        </div>
        <p>SOCIA MEDIA BLACK</p>
      </div>
      <div>
        <div>
          <p>MAP</p>
        </div>
        <div>
          <p>CEFA</p>
          <p>Endereço</p>
        </div>
      </div>
    </Container>
  </section>
);

SobrePageTemplate.propTypes = {
  pageTitle: PropTypes.string,
  sectionOneTitle: PropTypes.string,
  sectionOneContent: PropTypes.string,
  sectionTwoTitle: PropTypes.string,
  sectionThreeTitle: PropTypes.string,
  bylaws: PropTypes.string,
  sectionFourTitle: PropTypes.string,
  internalPolicyLink: PropTypes.string,
  sectionFiveTitle: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
};

const SobrePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <SobrePageTemplate
        pageTitle={frontmatter.pageTitle}
        sectionOneTitle={frontmatter.sectionOneTitle}
        sectionOneContent={frontmatter.sectionOneContent}
        sectionTwoTitle={frontmatter.sectionTwoTitle}
        sectionThreeTitle={frontmatter.sectionThreeTitle}
        bylaws={frontmatter.bylaws}
        sectionFourTitle={frontmatter.sectionFourTitle}
        internalPolicyLink={frontmatter.internalPolicyLink}
        sectionFiveTitle={frontmatter.sectionFiveTitle}
        phoneNumber={frontmatter.phoneNumber}
        email={frontmatter.email}
      />
    </Layout>
  );
};

SobrePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default SobrePage;

export const pageQuery = graphql`
  query SobrePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "sobre" } }) {
      frontmatter {
        pageTitle
        sectionOneTitle
        sectionOneContent
        sectionTwoTitle
        sectionThreeTitle
        bylaws
        sectionFourTitle
        internalPolicyLink
        sectionFiveTitle
        phoneNumber
        email
      }
    }
  }
`;
