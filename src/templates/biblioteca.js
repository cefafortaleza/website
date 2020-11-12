import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';

import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import breaks from 'remark-breaks';

export const BibliotecaPageTemplate = ({
  title,
  content,
  section_one_title,
  section_one_content,
  section_two_title,
  section_two_content,
  section_three_title,
  section_three_content,
}) => (
  <Container>
    <SectionTitle big>{title}</SectionTitle>
    <SectionTitle>{section_one_title}</SectionTitle>

    <SectionTitle>{section_two_title}</SectionTitle>
    <div className="contentWrapper">
      <div className="richText">
        {
          unified()
            .use(parse)
            .use(breaks)
            .use(remark2react)
            .processSync(section_two_content).result
        }
      </div>
    </div>
    <SectionTitle>{section_three_title}</SectionTitle>
    <div className="contentWrapper">
      <div className="richText">
        {
          unified()
            .use(parse)
            .use(breaks)
            .use(remark2react)
            .processSync(section_three_content).result
        }
      </div>
    </div>
  </Container>
);

BibliotecaPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  section_one_title: PropTypes.string,
  section_one_content: PropTypes.object,
  section_two_title: PropTypes.string,
  section_two_content: PropTypes.object,
  section_three_title: PropTypes.string,
  section_three_content: PropTypes.object,
};

const BibliotecaPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  const {
    title,
    content,
    section_one_title,
    section_one_content,
    section_two_title,
    section_two_content,
    section_three_title,
    section_three_content,
  } = frontmatter;

  return (
    <Layout>
      <BibliotecaPageTemplate
        title={title}
        content={content}
        section_one_title={section_one_title}
        section_one_content={section_one_content}
        section_two_title={section_two_title}
        section_two_content={section_two_content}
        section_three_title={section_three_title}
        section_three_content={section_three_content}
      />
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
        content
        section_one_title
        section_one_content {
          schedule {
            days
            hours
          }
        }
        section_two_title
        section_two_content
        section_three_title
        section_three_content
      }
    }
  }
`;
