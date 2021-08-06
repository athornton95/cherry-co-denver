import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './SideBySide.styles';

const SideBySide = (props) => {
  const { text, image, position, title } = props;
  return (
    <div css={styles}>
      <Grid container spacing={6} justify="center" alignItems="center">
        {position === 'image-left' ? (
          <>
            <Grid item xs={12} sm={6} md={4}>
              {image.src && (
                <div className='image'>
                  <img src={image.src} alt={image.alt} />
                </div>
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <div className='content text-right'>
                {text && <p><span className='title'>{title}</span>{text}</p>}
              </div>
            </Grid>
          </>
        ) : (
          <>
          <Grid item xs={12} sm={6} md={8}>
            <div className='content text-left'>
              {text && <p><span className='title'>{title}</span>{text}</p>}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className='image-container'>
            {image.src && (
              <div className='image'>
                <img src={image.src} alt={image.alt} />
              </div>
              )}
          </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default SideBySide;
