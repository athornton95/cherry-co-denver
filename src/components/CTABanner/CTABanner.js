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
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
