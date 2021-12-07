import React from 'react';
import { Link } from "gatsby";
import styles from './SimpleNav.styles';

const SimpleNav = () => (
  <div css={styles} id="nav">
    <div className='nav-container'>
      <div className='nav'>
        <Link to="/" className='logo'>
          <img src='/cherry-co-logo-badge.webp' alt='Cherry Co badge' />
        </Link>
        <div className='nav-links'>
          <Link className='nav-link' to="/">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default SimpleNav;
