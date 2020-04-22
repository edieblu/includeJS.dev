import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description, keywords } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1.25rem;
          }

          html,
          body {
            margin: 0;
            color: #243b53;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 20px;
            font-weight: 100;
            line-height: 1.6;
            overscroll-behavior-y: none;

            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #102a43;
            line-height: 1.1;
            font-family: 'Open Sans' sans-serif;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #243b53;
          }

          li {
            margin-top: 0.25rem;
          }
          h2 {
            margin-top: 3rem;
            margin-bottom: 1.5rem;
          }

          h5 {
            font-weight: 400;
          }

          a {
            text-underline-position: under;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta charSet="utf-8" />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto;
          max-width: 90vw;
          width: 650px;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
