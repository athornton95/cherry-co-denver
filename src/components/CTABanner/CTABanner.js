import React from 'react';
import styles from './CTABanner.styles';

const CTABanner = () => {
  return (
    <div css={styles}>
      <div className='container'>
        <div className='stage'>
          <form className='email-form'>
            <p>Join our email list! </p>
            <input type='text' placeholder='you@lovepie.com' />
          </form>
          <div className="social">
            <a href="#"><img className='social-icon' src="./icons/instagram-icon.svg" alt="Instagram Icon"/></a>
            <a href="#"><img className='social-icon' src="./icons/facebook-icon.svg" alt="Facebook Icon" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
