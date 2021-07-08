import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './SideBySide.styles';

const SideBySide = (props) => {
  const { text, image, position } = props;
  return (
    <div css={styles}>
      <Grid container spacing={10}>
        <Grid item xs={12} md={4}>
          {image.src && (
            <div className='image'>
              <img src={image.src} alt={image.alt} />
            </div>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          {text && <p>{text}</p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default SideBySide;
