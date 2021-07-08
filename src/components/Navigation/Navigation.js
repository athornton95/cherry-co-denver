import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from './Navigation.styles';

const Navigation = () => {

  return (
    <div css={styles}>
      <AppBar color='transparent' className='nav-container'>
        <Toolbar className='nav'>
          <div className='logo'>
            <img src='/cherry-co-logo-badge.png' alt='' />
          </div>
          <div className='nav-links'>
            <p className='nav-link'>
              Our Story
            </p>
            <p className='nav-link'>
              Menu
            </p>
            <p className='nav-link'>
              Contact
            </p>
            <a color="inherit" className='btn btn-white'>Order Locally</a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
