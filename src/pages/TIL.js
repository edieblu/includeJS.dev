import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import ReadLink from '../components/read-link';

export default ({ data }) => {
  const { edges } = data.allMdx;
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
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
        <ReadLink      css={css`
          max-width: 100px;
          margin-bottom: 1rem;
        `} to="/tags">ALL TAGS</ReadLink>
      </div>
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
              Last edited: {frontmatter.date}
            </span>
            <ReadLink
              to={frontmatter.path}
              css={css`
                margin: 0 0 2rem 0;
                display: table;
                font-size: 1.2rem;
                font-weight: 100;
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
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            tags
          }
        }
      }
    }
  }
`;
