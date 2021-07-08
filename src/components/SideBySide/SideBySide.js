import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './SideBySide.styles';

const SideBySide = (props) => {
  const { text, image, position, title } = props;
  return (
    <div css={styles}>
      <Grid container spacing={10}>
        {position === 'image-left' ? (
          <>
            <Grid item xs={12} md={5}>
              {image.src && (
                <div className='image'>
                  <img src={image.src} alt={image.alt} />
                </div>
              )}
            </Grid>
            <Grid item xs={12} md={7}>
              <div className='content text-right'>
                {text && <p><span class='title'>{title}</span>{text}</p>}
              </div>
            </Grid>
          </>
        ) : (
          <>
          <Grid item xs={12} md={7}>
            <div className='content text-left'>
              {text && <p><span class='title'>{title}</span>{text}</p>}
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
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
