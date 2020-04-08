import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import StyledA from '../components/styled-a';

const PostTemplate = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { mdx } = data;
  const { title, excerpt, link, tags } = mdx.frontmatter;

  const body = mdx.body;

  return (
    <Layout>
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          padding-inline-start: 0;
        `}
      >
        {tags.map(tag => {
          return (
            <li
              css={css`
                list-style: none;
                padding: 0.25rem 0.5rem;
                margin-right: 0.5rem;
                background-color: #fffbea;
              `}
              key={tag}
            >
              <ReadLink to={`/tags/${tag}`}>{tag}</ReadLink>
            </li>
          );
        })}
      </ul>
      <h1>{title}</h1>
      <p
        css={css`
          background-color: #fffbea;
          color: #102a43;
          padding: 1rem;
          border-radius: px;
          margin-top: 2rem;
        `}
      >
        <StyledA href={link}>{excerpt}</StyledA>
      </p>
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
          <ReadLink to={next.frontmatter.path}>
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
        excerpt
        link
        tags
      }
    }
  }
`;
