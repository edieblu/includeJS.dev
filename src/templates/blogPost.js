import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

const PostTemplate = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { markdownRemark } = data;
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;

  return (
    <Layout>
      <h1>{title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      ></p>
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      <div>
        {next && (
          <Link to={next.frontmatter.path}>
            Next: {`${next.frontmatter.title}`}
          </Link>
        )}
      </div>
      <div>
        {prev && (
          <Link to={prev.frontmatter.path}>
            Prev: {`${prev.frontmatter.title}`}
          </Link>
        )}
      </div>

      <ReadLink to="/TIL">&larr; back to all posts</ReadLink>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
