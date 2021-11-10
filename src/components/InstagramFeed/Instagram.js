import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstagramContent(limit: 24) {
          edges {
            node {
              caption
              link
              localImage {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              images {
                standard_resolution {
                  width
                  height
                  url
                }
                low_resolution {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        {
          data.allInstagramContent.edges.map((item, i) => (
            item.node.localImage ? (
              <div key={i}>
                <Image
                  fluid={item.node.localImage.childImageSharp.fluid}
                />
              </div>
            ) : (<div></div>)
          ))
        }
      </div>
    )}
  />
);

export default Instagram;