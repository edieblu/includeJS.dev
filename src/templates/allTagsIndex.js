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
            `}
          >
            {tags.map((tagName, index) => {
              return (
                <li
                  css={css`
                    list-style: none;
                    width: 100%;
                  `}
                  key={index}
                >
                  <ReadLink          css={css`
                  `} to={`/tags/${tagName}`}>{tagName}</ReadLink>
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
