import React from 'react';
import { Grid } from '@material-ui/core';
import styles from './Menu.styles';
import { data } from '../../data/menu';

const Menu = () => {
  const { sweetPies, savoryPies, beverages } = data;
  return (
    <div css={styles} id='menu'>
      <div className='container'>
        <div className='section-header'>
          <img src='./cherry-co-logo-wordmark.svg' alt='Colorado Cherry Company Logo' />
        </div>
        <h3 className='menu-title'>Daily Menu</h3>
        <div className='menu-section'>
          <div className='menu-title-container'>
            <p className='menu-subtitle'>Sweet Pies</p>
            <p className='menu-details'>Available Hot n' Ready, or for Take n' Bake</p>
          </div>
          <Grid container alignContent='center' alignItems='flex-start' spacing={4} className="grid-container">
            {sweetPies.map(pie => {
              return (
                <Grid key={pie.id} item xs={12} sm={6} md={4} className='grid-item-wrapper'>
                  {pie.image && pie.image.src && <img src={pie.image.src} alt={pie.image.alt} className='pie-image'/>}
                  {pie.title && <p className='title'>{pie.title}</p>}
                  {pie.description && <p className='description'>{pie.description}</p>}
                  {pie.price && <p className='price'>{pie.price}</p>}
                  {pie.additional && <p className='additional'>{pie.additional}</p>}
                </Grid>
              )
            })}
          </Grid>
        </div>
        <div className='menu-section'>
          <div className='menu-title-container'>
            <p className='menu-subtitle'>Savory Pies</p>
            <p className='menu-details'>Available Hot n' Ready, or for Take n' Bake</p>
          </div>
          <Grid container alignContent='center' alignItems='flex-start' spacing={4} className="grid-container">
            {savoryPies.map(pie => {
              return (
                <Grid key={pie.id} item xs={12} sm={6} md={4} className='grid-item-wrapper'>
                  {pie.image && pie.image.src && <img src={pie.image.src} alt={pie.image.alt} className='pie-image'/>}
                  {pie.title && <p className='title'>{pie.title}</p>}
                  {pie.description && <p className='description'>{pie.description}</p>}
                  {pie.price && <p className='price'>{pie.price}</p>}
                  {pie.additional && <p className='additional'>{pie.additional}</p>}
                </Grid>
              )
            })}
          </Grid>
        </div>
        <div className='menu-section'>
          <div className='menu-title-container'>
            <p className='menu-subtitle'>Not Pies</p>
          </div>
          <Grid container alignContent='center' alignItems='flex-start' spacing={4} className="grid-container">
            <Grid item xs={12} className='grid-item-wrapper'>
              <p className='title'>
                Cinnamon rolls, scones, coffee cakes, cookies and more! 
              </p>
              <p className='description'></p>
            </Grid>
          </Grid>
        </div>
        <div className='menu-section'>
          <div className='menu-title-container'>
            <p className='menu-subtitle'>Beverages</p>
          </div>
          <Grid container alignContent='center' alignItems='flex-start' spacing={4} className="grid-container">
            {beverages.map(bev => {
              return (
                <Grid key={bev.id} item xs={12} sm={6} md={4} className='grid-item-wrapper'>
                  {bev.title && <p className='title'>{bev.title}</p>}
                  {bev.description && <p className='description'>{bev.description}</p>}
                  {bev.price && <p className='price'>{bev.price}</p>}
                  {bev.additional && <p className='additional'>{bev.additional}</p>}
                </Grid>
              )
            })}
          </Grid>
        </div>
        <div className='contact-block' id='contact'>
          <p className='text'>For the most up to date info on daily specials, give our bakery a call!</p>
          {/* <a href='#' className='btn btn-cta'>Contact Us</a> */}
        </div>
      </div>
    </div>
  );
};

export default Menu;