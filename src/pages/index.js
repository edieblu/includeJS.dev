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
    <p>A beginner-friendly JavaScript community, for everyone.</p>
    <p>Coming to Brussels in January 2020.</p>
  </Layout>
);
