import React from 'react';
import { css } from '@emotion/core';
import ReadLink from '../components/read-link';
import Layout from '../components/layout';

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext;
  return (
    <Layout>
      <div>
        <div>
          <ul
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            {tags.map((tagName, index) => {
              return (
                <li
                  css={css`
                    list-style: none;
                    margin-right: 1rem;
                    padding: 0.25rem 0.5rem;
                    background-color: #fffbea;
                  `}
                  key={index}
                >
                  <ReadLink css={css``} to={`/tags/${tagName}`}>
                    {tagName}
                  </ReadLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AllTagsTemplate;
