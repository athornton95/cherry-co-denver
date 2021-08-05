import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Menu.styles';
import { data } from '../../data/menu';

const Menu = () => {
  const { main } = data;
  return (
    <div css={styles}>
      <div className='container'>
        <h3 className='menu-title'>Daily Menu</h3>
        <Grid container alignContent='center' alignItems='center' spacing={4}>
          {main.map(pie => {
            return (
              <Grid key={pie.id} item xs={12} sm={6} md={4} className='grid-item-wrapper'>
                <img src={pie.image.src} alt={pie.image.alt} className='pie-image'/>
                {pie.title && <p className='title'>{pie.title}</p>}
                {pie.description && <p className='description'>{pie.description}</p>}
                {pie.price && <p className='price'>{pie.price}</p>}
                {pie.additional && <p className='additional'>{pie.additional}</p>}
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Menu;