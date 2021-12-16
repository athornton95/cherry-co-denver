import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import styles from './SignUpForm.styles';

const SignUpForm = () => {
  const [signupObject, setSignupObject] = useState({ EMAIL: '', FNAME: '', LNAME: '' });
  const [submitMessage, setSubmitMessage] = useState(null);
  const [buttonText, setButtonText] = useState('Subscribe')

  const handleChange = (e) => {
    const value = e.target.value;
    setSignupObject({ 
      ...signupObject,
      [e.target.name]: value
    })
  }

  const handleClick = () => {
    setSubmitMessage(
      signupObject.EMAIL && signupObject.FNAME && signupObject.LNAME ? 
      "Please give us a couple of minutes to send your email, we're cleaning the dough off of our hands! If you don't see the email in your inbox within 3-4 minutes, please check your SPAM or 'Promotions' folders for the email containing your coupon. If you still can't find it, please email us at hello@coloradocherrycodenver.com and we'll help you out!"
      :
      'Please fill out all fields'
    );
    setButtonText(
      signupObject.EMAIL && signupObject.FNAME && signupObject.LNAME ? 
      'Thank you!'
      : 'Subscribe'
    );
  };

  const disabledBool = (buttonText === 'Thank you!' || (!signupObject.EMAIL || !signupObject.FNAME || !signupObject.LNAME));

  return (
    <div css={styles}>
      <Container maxWidth='md'>
        <div className='form-wrapper' id="mc_embed_signup">
          <div className='title'>
            <h1>Sign up for our e-mail list</h1>
            <h3>& get a free slice of pie!</h3>
          </div>
          <form action="https://coloradocherrycodenver.us6.list-manage.com/subscribe/post?u=5a6882396bcabcd1667a6d9b3&amp;id=d47d40abc7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate onSubmit={handleClick}>
            <div id="mc_embed_signup_scroll">
              <div className="input-wrapper">
                <label htmlFor="mce-EMAIL">
                  Email Address
                  <span className="asterisk">*</span>
                </label>
                <input type="email" value={signupObject.EMAIL} name="EMAIL" className="required email" required id="mce-EMAIL" onChange={handleChange}/>
              </div>
              <div className="input-wrapper">
                <label htmlFor="mce-FNAME">
                  First Name 
                  <span className="asterisk">*</span>
                </label>
                <input type="text" value={signupObject.FNAME} name="FNAME" className="required" required id="mce-FNAME" onChange={handleChange}/>
              </div>
              <div className="input-wrapper">
                <label htmlFor="mce-LNAME">
                  Last Name  
                  <span className="asterisk">*</span>
                </label>
                <input type="text" value={signupObject.LNAME} name="LNAME" className="required" required id="mce-LNAME" onChange={handleChange}/>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_5a6882396bcabcd1667a6d9b3_d47d40abc7" tabIndex="-1" value="" />
              </div>
              <div className="clear submit-wrapper">
                <input 
                  value={buttonText}
                  type='submit'
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="btn btn-cta"
                  disabled={disabledBool}
                />
              </div>
            </div>
            <p className='note'><span className="asterisk">*</span>required</p>
            {submitMessage && <p>{submitMessage}</p>}
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignUpForm;
