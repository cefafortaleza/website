import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import PostList from '../components/PostList';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import breaks from 'remark-breaks';

import Instagram from '../assets/img/icon-instagram-black.svg';
import Facebook from '../assets/img/icon-facebook-black.svg';
import Youtube from '../assets/img/icon-youtube-black.svg';

function getCEFAMap() {
  if (typeof window === 'undefined') return;
  return window.innerWidth > 768
    ? {
        __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.321599622649!2d-38.5386949846855!3d-3.7399331972790297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749059fc1cb73%3A0x62b532cbda7ba6b5!2sCEFA%20-%20Centro%20Esp%C3%ADrita%20Francisco%20de%20Assis!5e0!3m2!1spt-BR!2sbr!4v1599908404077!5m2!1spt-BR!2sbr" width="1200" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
      }
    : {
        __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.321599622649!2d-38.5386949846855!3d-3.7399331972790297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749059fc1cb73%3A0x62b532cbda7ba6b5!2sCEFA%20-%20Centro%20Esp%C3%ADrita%20Francisco%20de%20Assis!5e0!3m2!1spt-BR!2sbr!4v1599908404077!5m2!1spt-BR!2sbr" width="300" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`,
      };
}

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
    <Container className="container">
      <SectionTitle big>{pageTitle}</SectionTitle>
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
      <div id="apresentacao">
        <SectionTitle>{sectionOneTitle}</SectionTitle>
        <div className="richText">
          {
            unified()
              .use(parse)
              .use(breaks)
              .use(remark2react)
              .processSync(sectionOneContent).result
          }
        </div>
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
          <a
            href="https://www.instagram.com/cefafortaleza/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>

          <a
            href="https://www.facebook.com/CefaFortaleza"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>

          <a
            href="https://www.youtube.com/user/CEFA1941"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube />
          </a>
        </div>
      </div>
      <div>
        <div dangerouslySetInnerHTML={getCEFAMap()} />
        <div>
          <p>Rua Senador Catunda, 117 - Benfica, Fortaleza - CE, 60015-320</p>
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
