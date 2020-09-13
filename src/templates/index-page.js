import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostList from '../components/PostList';
import SectionTitle from '../components/SectionTitle';
import SectionHeader from '../components/SectionHeader';
import MainSlides from '../components/MainSlides';
import Container from '../components/Container';

import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import breaks from 'remark-breaks';

export const IndexPageTemplate = ({
  sectionOneTitle,
  sectionOneSubtitle,
  sectionOneContent,
  sectionTwoTitle,
  sectionTwoSubtitle,
  sectionTwoContent,
}) => {
  return (
    <>
      <MainSlides />
      <section>
        <Container>
          <SectionTitle>Redes Sociais</SectionTitle>
          <p>Socia Media Posts</p>
        </Container>
      </section>
      <section>
        <Container>
          <PostList />
        </Container>
        <SectionHeader
          title="Conheça o grupo musical francisco de assis"
          buttonText="Clique Aqui"
          buttonLink="/"
          id="grupo-musical"
          black
        />
      </section>
      <section>
        <Container>
          <SectionTitle>{sectionOneTitle}</SectionTitle>
          <SectionTitle small>{sectionOneSubtitle}</SectionTitle>

          <div className="richText">
            {
              unified()
                .use(parse)
                .use(breaks)
                .use(remark2react)
                .processSync(sectionOneContent).result
            }
          </div>
        </Container>
      </section>
      <section>
        <SectionHeader
          title="Acesse nosso boletim"
          buttonText="Clique Aqui"
          buttonLink="/"
          id="boletim"
        />
      </section>
      <section>
        <Container>
          <SectionTitle small>{sectionTwoSubtitle}</SectionTitle>

          <div className="richText">
            {
              unified()
                .use(parse)
                .use(breaks)
                .use(remark2react)
                .processSync(sectionTwoContent).result
            }
          </div>
        </Container>
      </section>
      <section>
        <SectionHeader
          title="Gostaria de alugar um livro?"
          buttonText="Conheça nossa biblioteca"
          buttonLink="/"
          id="biblioteca"
        />
      </section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  sectionOneTitle: PropTypes.string,
  sectionOneSubtitle: PropTypes.string,
  sectionOneContent: PropTypes.string,
  sectionTwoTitle: PropTypes.string,
  sectionTwoSubtitle: PropTypes.string,
  sectionTwoContent: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        sectionOneTitle={frontmatter.sectionOneTitle}
        sectionOneSubtitle={frontmatter.sectionOneSubtitle}
        sectionOneContent={frontmatter.sectionOneContent}
        sectionTwoTitle={frontmatter.sectionTwoTitle}
        sectionTwoSubtitle={frontmatter.sectionTwoSubtitle}
        sectionTwoContent={frontmatter.sectionTwoContent}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        sectionOneTitle
        sectionOneSubtitle
        sectionOneContent
        sectionTwoTitle
        sectionTwoSubtitle
        sectionTwoContent
      }
    }
  }
`;
