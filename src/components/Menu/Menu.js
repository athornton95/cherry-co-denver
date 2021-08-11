import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Menu.styles';
import { data } from '../../data/menu';

const Menu = () => {
  const { main } = data;
  return (
    <div css={styles} id='menu'>
      <div className='container'>
        <div className='section-header'>
          <img src='./cherry-co-logo-wordmark.svg' alt='Colorado Cherry Company Logo' />
        </div>
        <div className='menu-title-container'>
          <h3 className='menu-title'>Daily Menu</h3>
          <p className='menu-subtitle'>Pies + Goods Baked Daily</p>
        </div>
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
        <div>
          <p className='text'>For the most up to date info on daily specials, give our bakery a call!</p>
          <a href='#' className='btn btn-cta'>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;