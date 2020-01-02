import React from 'react';
import Layout from '../components/layout';
import logo2 from '../../static/logo2.png'
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
    <h3>A beginner-friendly JavaScript community.</h3>
    <br/>
    <p>
      <strong>includeJS aims to bridge the diversity gap in tech.</strong> We're starting by
      concentrating on women in tech. As we get more established, we'll expand
      our focus to include other groups.
    </p>

    <p>
      Our first event will be hosted on January 16th at{' '}
      <strong>
        <a href="https://www.anais.digital/index">Anais Digital</a>
      </strong>
      , Boulevard Brand Whitlock 87
    </p>

    <p>
      For more details and RSVP, head over{' '}
      <a href="https://www.meetup.com/includeJS-bridge-the-diversity-gap/">
        our meetup page.
      </a>
    </p>

    <p>
      If you would like to joins us as a coach or sponsor, get in touch with us
      on <a href="https://twitter.com/GirlsCodeMK">Twitter</a>.
    </p>
  </Layout>
);
