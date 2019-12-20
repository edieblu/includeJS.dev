import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #EFFCF6;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #EFFCF6;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #486581;
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
      <NavLink to="/contact" activeClassName="current-page">
        Contact us
      </NavLink>
    </nav>
  </header>
);

export default Header;