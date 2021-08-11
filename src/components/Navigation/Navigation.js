import React from 'react';
import styles from './Navigation.styles';

const Navigation = () => {

  return (
    <div css={styles} id="nav">
      <div className='nav-container'>
        <div className='nav'>
          <div className='logo'>
            <img src='/cherry-co-logo-badge.png' alt='' />
          </div>
          <div className='nav-links'>
            <a className='nav-link' href="#menu">
              Menu
            </a>
            <a className='nav-link' href="#about">
              About Us
            </a>
            <a className='nav-link' href="#">
              Events
            </a>
            <a className='nav-link' href="#">
              Contact Us
            </a>
            <a color="inherit" className='btn btn-white'>Order Locally</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
