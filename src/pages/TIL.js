import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import PostPreview from '../components/post-preview';
import ReadLink from '../components/read-link';
import { graphql, Link } from 'gatsby'



export default ({data}) => {
 const { edges } = data.allMarkdownRemark

  return (
  <Layout>
      <h3
      css={css`
        text-transform: uppercase;
        font-weight: 100;
        letter-spacing: 1.4px;
        margin-top: 3rem;
      `}
    >
      Today I Learned: Tips and Tricks
    </h3>
    {edges.map(edge => {
          const {frontmatter} = edge.node
          return (
            <div
              key={frontmatter.path}
              style={{marginBottom: '1rem'}}
            >
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </div>
          )
        })}


  </Layout>
  )
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`
