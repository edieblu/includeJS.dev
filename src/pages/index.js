import React from 'react';
import Layout from '../components/layout';
import logo2 from '../../static/logo2.png';
import { css } from '@emotion/core';

export default () => (
  <Layout>
    <img
      src={logo2}
      alt="Logo"
      css={css`
        margin: 10px 0 -10px 0;
        height: 60px;
      `}
    />
    <h3
      css={css`
        text-transform: uppercase;
        font-weight: 100;
        letter-spacing: 1.4px;
        margin-top: -1px;
      `}
    >
      A beginner-friendly JavaScript community ❤️
    </h3>
    <br />
    <p>
      <strong>includeJS aims to bridge the diversity gap in tech.</strong> We're
      starting by concentrating on women in tech. As we get more established,
      we'll expand our focus to include other groups.
    </p>
    <p>
      Our main focus is understanding JavaScript and front-end development, as
      well as HTML, CSS, static site generators, accessibility, web performance,
      user experience, web design and more! Our events are hands-on: make sure
      your always bring your laptop with you! 👩‍💻
    </p>

    <p>
      Our <a href="https://www.meetup.com/includeJS-bridge-the-diversity-gap/">
        meetups </a> are held once a month at <strong> <a href="https://www.anais.digital/index">Anais Digital</a>
 </strong>. If you would like to joins us as a coach or sponsor, get in touch with us
      on <a href="https://twitter.com/GirlsCodeMK">Twitter</a>.
    </p>

    <p>

    </p>

    <p>
      includeJS is also a co-organizer of{' '}
      <strong>
        {' '}
        <a href="https://www.meetup.com/Brussels-CryptoParty/">
          CryptoParty Brussels
        </a>{' '}
      </strong>
      - an event that focuses on cybersecurity and staying safe online.
    </p>
  </Layout>
);
