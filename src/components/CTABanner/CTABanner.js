import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Modal } from '@material-ui/core';
import { css } from '@emotion/react';
import styles from './CTABanner.styles';

const modalStyles = () => css`
  .modal {
    position: absolute;
    width: 280px !important;
    @media (min-width: 1024px) {
      width: 600px !important;
    }
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    border: 2px solid #000;
    border-radius: .5rem;
    padding: 3rem 2rem 2rem 2rem;
  }

  .modal-title {
    color: #CF2634;
    font-size: 2rem;
    font-weight: bold;
  }

  .button-grid {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1.5rem;
  };

  .btn-text {
    color: #CF2634;
    text-decoration: underline;
    font-size: .75rem;
    margin-right: 1rem;
  }

  .btn-cta {
    margin-bottom: 1rem;
    width: calc(100% - 2rem);
    text-align: center;
  }

  .emphasis {
    border-bottom: 1px solid black;
    font-weight: bold;
  }

  .exit-modal {
    position: absolute;
    right: .75rem;
    top: .75rem;

    svg {
      height: 3rem;
      width: 3rem;
      fill: black;
    }

    svg:hover {
      height: 3rem;
      width: 3rem;
      fill: #CF2634;
      cursor: pointer;
    }
  }
`;

const SimpleModal = (props) => {
  const [signupObject, setSignupObject] = useState({ email: '', firstName: '', lastName: '', submissionDate: '' });
  const [submissionStatus, setSubmissionStatus] = useState({ message: '', severity: '' });
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [successSubmitted, setSuccessSubmitted] = useState(false);
  const [headerMessage, setHeaderMessage] = useState('Join our email list!');

  useEffect(() => {
    setSignupObject({
      ...signupObject,
      submissionDate
    })
  }, []);
  
  const { setOpen, open } = props;
  
  const handleChange = (e) => {
    const value = e.target.value;
    setSignupObject({ 
      ...signupObject,
      [e.target.name]: value
    })
  }

  let submissionDate = moment();
  submissionDate = submissionDate.format('YYYY-MM-DD');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitDisabled(true);
    axios.post('https://sheet.best/api/sheets/3933090e-f4a3-4301-85b5-81753abcb5f6', signupObject)
    .then(() => {
      setSubmissionStatus({ 
        message: 'Thanks for signing up! Our super fun and cool newsletter will be coming to your inbox soon!',
        severity: 'success'
      })
      setSuccessSubmitted(true);
      setHeaderMessage('Success!');
    })
    .catch(function(error) {
      setSubmissionStatus({ 
        message: 'Uh oh, something went wrong and we were unable to submit your information. Please try again later!',
        severity: 'error'
      })
      setHeaderMessage('Something went wrong.' );
      console.log(error);
    });
  };

  const handleClose = () => {
    setOpen(false);
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setSignupObject({ email: '', firstName: '', lastName: '', submissionDate: '' });
    setSubmissionStatus({ message: '', severity: '' });
    setSubmitDisabled(false);
    setSuccessSubmitted(false);
    setHeaderMessage('Join our email list!');
  };

  const body = (
    <>
      <div css={modalStyles}>
        <div className='modal'>
          <div className='exit-modal'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" onClick={handleClose}>
              <path d="M68.039 36.205l-4.242-4.243L50 45.757 36.203 31.961l-4.242 4.244L45.757 50 31.961 63.795l4.242 4.243L50 54.243l13.797 13.796 4.242-4.244L54.243 50z"/>
            </svg>
          </div>
          <p className='form-header'>{headerMessage}</p>
          <form id='signup-form' className={successSubmitted ? 'hide' : 'show'} onSubmit={handleSubmit}>
            <div className='form-group-names'>
              <input type='text' id='firstName' name='firstName' placeholder='Olive' value={signupObject.firstName} onChange={handleChange} />
              <input type='text' id='lastName' name='lastName' placeholder='Cherri-Pye' value={signupObject.lastName} onChange={handleChange} />
            </div>
            <input type='text' id='email' name='email' placeholder='you@lovepie.com' value={signupObject.email} onChange={handleChange} />
            <input type='hidden' id='date' name='submissionDate' value={submissionDate}/>
            <input type='submit' className='btn btn-cta form-submit' disabled={signupObject.email === '' || submitDisabled}/>
          </form>
          {submissionStatus.message !=='' && <p className={`status status-${submissionStatus.severity}`}>{submissionStatus.message}</p>}
        </div>
      </div>
    </>
  );

  return (
    <div styles={{ position: 'absolute' }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

const CTABanner = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div css={styles}>
        <div className='container'>
          <div className='stage'>
            <button onClick={handleOpen} className='btn btn-white'>Join Our Email List</button>
            <div className="social">
              <a href="https://www.instagram.com/coloradocherrycompany/"><img className='social-icon' src="./icons/instagram-icon.svg" alt="Instagram Icon"/></a>
              <a href="https://www.facebook.com/CoCherryCO"><img className='social-icon' src="./icons/facebook-icon.svg" alt="Facebook Icon" /></a>
            </div>
          </div>
        </div>
      </div>
      <SimpleModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default CTABanner;
