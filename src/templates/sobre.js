import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import PostList from '../components/PostList';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

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
  <section>
    <Container>
      <SectionTitle big>{pageTitle}</SectionTitle>
      <div>
        <p>ÍNDICE</p>
      </div>
      <section>
        <SectionTitle>{sectionOneTitle}</SectionTitle>
        <p>{sectionOneContent}</p>
      </section>
      <section>
        <SectionTitle>{sectionTwoTitle}</SectionTitle>
        <div>
          <p>TABS!!!</p>
        </div>
      </section>
      <section>
        <SectionTitle>{sectionThreeTitle}</SectionTitle>
        <p>{bylaws}</p>
      </section>
      <section>
        <SectionTitle>{sectionFourTitle}</SectionTitle>
        <p>{internalPolicyLink}</p>
      </section>
      <section>
        <SectionTitle>{sectionFiveTitle}</SectionTitle>
        <p>Telefone: {phoneNumber}</p>
        <p>Email: {email}</p>
        <p>SOCIA MEDIA BLACK</p>
      </section>
      <section>
        <div>
          <p>MAP</p>
        </div>
        <div>
          <p>CEFA</p>
          <p>Endereço</p>
        </div>
      </section>
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
