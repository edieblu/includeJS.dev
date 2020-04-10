import React from 'react';
import Layout from '../components/layout';
import StyledA from '../components/styled-a';

export default () => (
  <Layout>
    <div>
      <h2>Twitch streaming is a thing: 📺</h2>
    </div>
    <p>
      Due to COVID-19, lockdown and all the meetups and other events being
      cancelled, I moved online and started streaming on{' '}
      <StyledA href="https://www.twitch.tv/edieblu/">Twitch.</StyledA>
    </p>
    <p>
      My streams revolve around starting your journey in tech, getting your
      first job as a developer, effective learning, teaching, women in tech,
      ReactJS and more.
    </p>

    <h4>Watch recordings:</h4>
    <ul>
      <li>
        <h5>
          Title: Eva and Anjana talk Career change, web development and karaoke. 🎤
          <br></br>
          April 7, 2020 (
          <StyledA href="https://www.youtube.com/watch?v=sAxV1CV1Idc">
            YouTube Link
          </StyledA>
          )
        </h5>
      </li>

      <li>
        <h5>
          Eva and Cassidy talk ReactJS, Teaching . Life. Universe. Everything. ⌨️
          <br></br>
          March 27, 2020 (
          <StyledA href="https://www.youtube.com/watch?v=Rw5DtXGTeuc">
            YouTube Link
          </StyledA>
          )
        </h5>
      </li>

      <li>
        <h5>
        Eva and Jessica talk how to get from self-taught to junior developer 👩‍💻
          <br></br>
          March 23, 2020 (
          <StyledA href="https://www.youtube.com/watch?v=WqWNhpzxFf8">
            YouTube Link
          </StyledA>
          )
        </h5>
      </li>

      <li>
        <h5>
        Eva and Alexandra talk Things to know when applying for a Rails Girls Summer of Code Scholarship 💬
          <br></br>
          March 16, 2020 (
          <StyledA href="https://www.youtube.com/watch?v=AOc2PUFWYio">
            YouTube Link
          </StyledA>
          )
        </h5>
      </li>
    </ul>
  </Layout>
);
