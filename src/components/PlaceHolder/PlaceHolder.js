import React from 'react';
import styles from '../Events/Events.styles';

const PlaceHolder = () => {
  return (
    <section css={styles}>
      <div className='section-header'>
        <h3 className='title remodel'>We're Remodeling!</h3>
        <p className='description'>We couldn’t be more excited for 2023! Our bakery is undergoing a remodel; we are expanding our kitchen production space so we can make more pies for you! <br /> We hope to be complete by early spring/late winter.</p>
      </div>
      <div className='section-body'>
        <p className='title'>Along with our remodel...</p>
        <p className='description'>we are introducing the next chapter of the Colorado Cherry Company; <strong>Legacy Pie Co.</strong> <br />Same family, same pies, our new name highlights what’s important about our business — our legacy and of course, pies! <br /> 
          <span><a style={{ textDecoration: 'none', color: '#CF2634', marginRight: '6px', borderBottom: '1px solid #CF2634', fontWeight: 'bold' }} rel='noreferrer' target='_blank' href='https://www.denverpost.com/2022/12/01/colorado-cherry-pie-company/'>Read more here</a></span>from the Denver Post.
        </p>
        <div className='important'>
          Follow us on Instagram for updated hours as our construction remodel work comes to a close. 
        </div>
        <div className='additional' style={{ color: 'black', fontSize: '1.1rem' }}>
          Feel free to call us at 3036356748 to learn more and see what we have left in stock. Stay tuned for our weekly online preorders coming soon! 
          <br />
          Thanks everyone, we appreciate all your support! 
        </div>
      </div>
    </section>
  );
};

export default PlaceHolder;