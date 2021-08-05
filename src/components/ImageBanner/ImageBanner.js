import React from 'react';
import bannerImage from '../../../public/cherry-co-family.jpeg'
import styles from './ImageBanner.styles';

const ImageBanner = () => {
  return (
    <div css={styles}>
      <div className='image' style={{ backgroundImage: `url(${bannerImage})`}} />
    </div>
  );
};

export default ImageBanner;