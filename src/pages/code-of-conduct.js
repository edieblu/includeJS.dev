import React from 'react';
import Layout from '../components/layout';
import { css } from '@emotion/core';

export default () => {
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
        includeJS Code of Conduct
      </h3>

      <p>
        Our code of conduct applies to all meetups organised and delivered by
        includeJS. Please make sure you familiarise yourself with it and let us
        know if you have any questions or concerns. We’re here to ensure we all
        have a good time and learn together!
      </p>

      <h4>In short</h4>
      <p>
        includeJS is dedicated to providing a harassment-free meetup and
        workshop experience for everyone, regardless of gender, sexual
        orientation, disability, physical appearance, body size, race, or
        religion. We are trans-friendly.
      </p>
      <p>
        We do not tolerate harassment of workshop participants in any form.
        Sexual language and imagery are not appropriate.
      </p>
      <p>
        Be kind to others. Do not insult or put down other attendees. Behave
        professionally. Remember that harassment and sexist, racist, or
        exclusionary jokes are not appropriate for includeJS.
      </p>

      <p>
        Special request: keep your hands on your computer. We understand that
        sometimes we’re tempted to help someone by taking over their keyboard,
        but it’s better if attendees can learn by doing, rather than by watching.
      </p>
      <h4>Longer version</h4>
      <p>
        Harassment includes offensive verbal comments related to gender, sexual
        orientation, disability, physical appearance, body size, race, religion,
        sexual images in public spaces, deliberate intimidation, stalking,
        following, harassing photography or recording, sustained disruption of
        talks or other events, inappropriate physical contact, and unwelcome
        sexual attention.
      </p>
      <p>
        Participants asked to stop any harassing behavior are expected to comply
        immediately.
      </p>
      <p>
        Remember that sexist, racist, and other exclusionary jokes can be
        offensive to those around you. Excessive swearing and offensive jokes
        are not appropriate for our meetup.
      </p>
      <h4>Reporting harassment</h4>
      <p>
        If you are being harassed, notice that someone else is being harassed,
        or have any other concerns, please contact the organisers immediately.
      </p>
    </Layout>
  );
};
