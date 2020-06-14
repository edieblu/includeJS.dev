import React from 'react';
import Layout from '../components/layout';
import StyledA from '../components/styled-a';
import logo2 from '../../static/logo2.png';
import banner from '../../static/banner.png';
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
      A beginner-friendly JavaScript ommunity ❤️
    </h3>
    <br />
    <h4>
      We are on <StyledA href="https://www.twitch.tv/edieblu">Twitch!</StyledA> 👩‍💻
    </h4>
    <p>
      Because all of our events have been cancelled (due to COVID-19), we've decided to move
      online! I'll be having online conversations on Twitch with developers, designers, organisers, conference speakers and more.
    </p>
    <StyledA href="https://www.twitch.tv/edieblu">
      <img
        src={banner}
        alt="Twitch banner"
        css={css`
          margin: 10px 0 -10px 0;
          width: 100%;
        `}
      />
    </StyledA>
    <p>
      Topics covered will be: web development (JavaScript and ReactJS in
      particular), CSS, HTML, web design, accessibility, performance and more. If you watch the talks live you'll have the chance to ask questions as well! 💪{' '}
    </p>
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
      The{' '}
      <StyledA href="https://www.meetup.com/includeJS-bridge-the-diversity-gap/">
        {' '}
        meetups{' '}
      </StyledA>
      meetups are held once a month at{' '}
      <StyledA href="https://www.anais.digital/index">Anais Digital</StyledA>.
      If you would like to joins us as a coach or sponsor, get in touch with us
      on <StyledA href="https://twitter.com/GirlsCodeMK">Twitter</StyledA>.
    </p>
    <p>
      includeJS is also a co-organizer of{' '}
      <StyledA href="https://www.meetup.com/Brussels-CryptoParty/">
        CryptoParty Brussels
      </StyledA>{' '}
      - an event that focuses on cybersecurity and staying safe online.
    </p>
  </Layout>
);
