import React from 'react';
import styles from './Footer.styles';

const Footer = () => {
  return (
    <div css={styles}>
      <div className='footer'>
        <div className='logo'>
          <img src="./cherry-co-logo-white.png" alt="Colorado Cherry Co. Logo"/>
        </div>
        <div className='details'>
          <p>4000 Tennyson St Suite 100, Denver, CO 80212</p>
          <p>(303) 635-6748</p>
          <p>Open Sunday - Thursday from 8am-9pm, Friday - Saturday from 8am-9pm</p>
        </div>
        <p>Copyright © 2021 • Colorado Cherry Co. Pie + Provisions</p>
        <p>Web Design & Development by Alex Hopkins.</p>
      </div>
    </div>
  );
};

export default Footer;
