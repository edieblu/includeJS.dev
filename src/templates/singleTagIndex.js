import React from "react"
import { css } from '@emotion/core';
import ReadLink from '../components/read-link';
import Layout from '../components/layout';

const SingleTagTemplate = ({data, pageContext}) => {
  const { posts, tagName } = pageContext
  return (
    <Layout>
    <div>
      <h3         css={css`
          text-transform: uppercase;
          font-weight: 100;
          letter-spacing: 1.4px;
          margin-top: 3rem;
          margin-bottom: 2rem;
        `}>
        Posts about {`${tagName}`}
      </h3>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li         css={css`
                    list-style: none;
                  `} key={index}>
                <ReadLink to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </ReadLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    </Layout>
  )
}

export default SingleTagTemplate