import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

const PostTemplate = ({ data, pageContext }) => {
  console.log(data)
  const { next, prev } = pageContext;
  const { mdx } = data;
  const title = mdx.frontmatter.title;
  const body = mdx.body;

  return (
    <Layout>
      <h1>{title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      ></p>
      <MDXRenderer>{body}</MDXRenderer>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-top: 5rem;
        `}
      >
        {next && (
          <ReadLink to={next.frontmatter.path} >
            <strong>&larr;</strong> {`${next.frontmatter.title}`}
          </ReadLink>
        )}
        {prev && (
          <ReadLink to={prev.frontmatter.path}>
            {`${prev.frontmatter.title}`} <strong>&rarr;</strong>
          </ReadLink>
        )}
      </div>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
