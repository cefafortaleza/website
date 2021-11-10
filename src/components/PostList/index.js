import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import SectionTitle from '../SectionTitle';
import Button from '../Button';

class PostList extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    
    return (
      <div className="blog-posts">
        <SectionTitle>Fique ligado</SectionTitle>
        {posts &&
          posts.map(({ node: post }, index) => (
            <>
            <div className="post-wrapper" key={post.frontmatter.title} key={index}>
              <div className="post-image-wrapper">
                <img
                  alt="Imagem do Blog CEFA"
                  src={post.frontmatter.featuredImage}
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
                featuredImage 
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PostList data={data} count={count} />}
  />
);
