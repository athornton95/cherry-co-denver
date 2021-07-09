import React from 'react';
import styles from './Hero.styles';
import heroImage from '../../../public/brick-wall.jpeg'

const Hero = () => (
  <div css={styles}>
    <div 
      className='hero hero-image'
      style={{ backgroundImage: 
              `linear-gradient(
              rgba(20,20,20, .4), 
              rgba(20,20,20, .4)),
              url(${heroImage})`
            }}>
      <div className='hero-title'>
        <h3 className='line-one'>Share Joy</h3>
        <h3 className='line-two'>Eat Pie</h3>
      </div>
      <div className='hero-scroll bounce'> 
        <div className='down-caret' />
      </div>
    </div>
  </div>
);

export default Hero;