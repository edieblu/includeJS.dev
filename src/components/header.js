import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #FFF;
  font-size: 0.9rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #FFF;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: rgb(93,85,250);
      background: linear-gradient(90deg, rgba(93,85,250,1) 0%, rgba(142,237,199,1) 100%);
      border-bottom: 1px solid #C4C6FF;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 600px - 0.5rem) / 2);
    `}
  >
    <NavLink to="/" fontWeight="bold">
      includeJS
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/TIL" activeClassName="current-page">
        Notes
      </NavLink>
      <NavLink to="/video" activeClassName="current-page">
        Video
      </NavLink>
      <NavLink to="/contact" activeClassName="current-page">
        Contact
      </NavLink>
      <NavLink to="/code-of-conduct" activeClassName="current-page">
        Code of conduct
      </NavLink>
    </nav>
  </header>
);

export default Header;
