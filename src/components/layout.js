import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          color: #243B53;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 18px;
          line-height: 1.5;

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
          color: #102A43;
          line-height: 1.1;
          font-family: 'Open Sans' sans-serif;

          + * {
            margin-top: 0.5rem;
          }
        }

        strong {
          color: #102A43;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
    />
    <Helmet>
        <html lang='en'></html>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
    </Helmet>
    <Header />
    <main
      css={css`
        margin: 2rem auto;
        max-width: 90vw;
        width: 600px;
      `}
    >
      {children}
    </main>
  </>
);}

export default Layout;
