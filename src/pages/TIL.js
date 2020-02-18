import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import ReadLink from '../components/read-link';


export default () => {
  const posts = usePosts()
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
    {posts.map(post =>(
      <PostPreview key={post.slug} post={post} />
    ))}


  </Layout>
  )
};
