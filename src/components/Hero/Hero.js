import React from 'react';
import styles from './Hero.styles';

const Hero = () => (
  <section css={styles}>
    <div className='hero'>
      <div className='hero hero-image' style={{ backgroundImage: 'url(https://picsum.photos/200/300/?blur)' }}>
        <h1>Colorado Cherry Company</h1>
      </div>
    </div>
  </section>
);

export default Hero;