import React from 'react';
import Layout from '../components/layout';
import logo from '../../static/logo.svg'
import { css } from '@emotion/core';

export default () => (
  <Layout>
    <img src={logo} alt='Logo' css={css`
    margin-left: -53px;
    margin-bottom: -30px;
    `}/>
    <h3>A beginner-friendly JavaScript community, for minorities in tech.</h3>

    <p>Our first event will be hosted on January 16th at <strong><a href='https://www.anais.digital/index'>Anais Digital</a></strong>, Boulevard Brand Whitlock 87</p>

    <p>For more details and RSVP, head over <a href="https://www.meetup.com/includeJS-bridge-the-diversity-gap/">our meetup page.</a></p>

    <p>If you would like to joins us as a coach or sponsor, get in touch with us on <a href='https://twitter.com/GirlsCodeMK'>Twitter</a>.</p>

  </Layout>
);
