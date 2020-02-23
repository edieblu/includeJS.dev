import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import ReadLink from '../components/read-link';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <h3
        css={css`
          text-transform: uppercase;
          font-weight: 100;
          letter-spacing: 1.4px;
          margin-top: 3rem;
          margin-bottom: 2rem;
        `}
      >
        Today I Learned: Tips and Tricks
      </h3>
      {edges.map(edge => {
        const { frontmatter } = edge.node;
        return (
          <div key={frontmatter.path}>
            <span
              css={css`
                font-weight: 700;
                font-size: 0.7rem;
              `}
            >
              {frontmatter.date}
            </span>
            <ReadLink
              to={frontmatter.path}
              css={css`
                margin: 0 0 2rem 0;
                display: table;
                font-size: 1.2rem;
              `}
            >
              {frontmatter.title}
            </ReadLink>
          </div>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
`;
