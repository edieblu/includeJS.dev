import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';



const PostTemplate = ({ data, pageContext }) => {
  const {next, prev} = pageContext
  const {markdownRemark} = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html

  return (
  <Layout>
    <h1>{title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
    </p>
    <div className='blogpost'
        dangerouslySetInnerHTML={{__html: html}}
        style={{
          fontFamily: 'avenir'
        }}
      />
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
  )
};

export default PostTemplate;

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`
