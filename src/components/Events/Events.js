import React from 'react';
import styles from './Events.styles'

const Events = () => {
  return (
    <section css={styles} id="events">
      <div className='section-header'>
        <h3 className='title'>Events</h3>
        <p className='description'>We'd love to partner with you for catering & special orders!</p>
      </div>
      <div className='section-body'>
        <p className='title'>Celebrate with pie</p>
        <p className='description'>From Weddings, birthdays, corporate gifts, or any celebration -- pie will bring smiles and is right for any occasion!</p>
        <em className='additional'>*Custom options available, delivery available*</em>
        <div className='contact-block'>
          <p>Interested in working together? Shoot us an email or give us a call at the bakery for a consulation!</p>
          <a className='btn btn-cta'>Let's Chat Pie</a>
          <a className='btn-text'>303-635-6748</a>
        </div>
      </div>
    </section>
  );
};

export default Events;