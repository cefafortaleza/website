import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import SectionTitle from './SectionTitle';
import Button from './Button';
import Img from 'gatsby-image'; // to take image data and render it

class PostList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    
    return (
      <div className="blog-posts">
        <SectionTitle>Fique ligado</SectionTitle>
        {posts &&
          posts.map(({ node: post }) => (
            <>
            <div className="post-wrapper" key={post.frontmatter.title}>
              <div className="post-image-wrapper">
                <Img
                  alt="Imagem do Blog CEFA"
                  fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
                />
              </div>

              <div className="post-content-wrapper">
                <SectionTitle small>{post.frontmatter.title}</SectionTitle>
                <p>{post.excerpt}</p>
                <Button href={post.fields.slug}>Saiba mais</Button>
              </div>
            </div>
            </>
          ))}
      </div>
    );
  }
}

PostList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query PostListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                path
                title
                description
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PostList data={data} count={count} />}
  />
);
