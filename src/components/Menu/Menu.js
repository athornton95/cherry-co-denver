import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Menu.styles';
import { data } from '../../data/menu';

const Menu = () => {
  const { main } = data;
  return (
    <div css={styles}>
      <div className='container'>
        <h3 className='menu-title'>look at this menu!</h3>
        <Grid container alignContent='center' alignItems='center' spacing={4}>
          {main.map(pie => {
            return (
              <Grid key={pie.id} item xs={12} md={4}>
                <img src={pie.image.src} alt={pie.image.alt} className='pie-image'/>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Menu;