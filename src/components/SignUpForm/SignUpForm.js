import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import styles from './SignUpForm.styles';

const SignUpForm = () => {
  const [signupObject, setSignupObject] = useState({ EMAIL: '', FNAME: '', LNAME: '' });

  const handleChange = (e) => {
    const value = e.target.value;
    setSignupObject({ 
      ...signupObject,
      [e.target.name]: value
    })
  }

  return (
    <div css={styles}>
      <Container maxWidth='md'>
        <div className='form-wrapper' id="mc_embed_signup">
          <div className='title'>
            <h1>Sign up for our e-mail list</h1>
            <h3>& get a free slice of pie!</h3>
          </div>
          <form action="https://coloradocherrycodenver.us6.list-manage.com/subscribe/post?u=5a6882396bcabcd1667a6d9b3&amp;id=d47d40abc7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address
                  <span className="asterisk">*</span>
                </label>
                <input type="email" value={signupObject.EMAIL} name="EMAIL" className="required email" required id="mce-EMAIL" onChange={handleChange}/>
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">
                  First Name 
                  <span className="asterisk">*</span>
                </label>
                <input type="text" value={signupObject.FNAME} name="FNAME" className="required" required id="mce-FNAME" onChange={handleChange}/>
              </div>
              <div className="mc-field-group">
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
                <input type="text" name="b_5a6882396bcabcd1667a6d9b3_d47d40abc7" tabIndex="-1" value="" readOnly />
              </div>
              <div className="clear">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-cta" />
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignUpForm;
