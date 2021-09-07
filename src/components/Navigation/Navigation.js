import React, { useState } from 'react';
import { Modal } from '@material-ui/core';
import { css } from '@emotion/react';
import styles from './Navigation.styles';

const modalStyles = () => css`
  .modal {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 400;
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
  const { setOpen, open } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div css={modalStyles}>
      <div className='modal'>
        <div className='exit-modal'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" onClick={handleClose}>
            <path d="M68.039 36.205l-4.242-4.243L50 45.757 36.203 31.961l-4.242 4.244L45.757 50 31.961 63.795l4.242 4.243L50 54.243l13.797 13.796 4.242-4.244L54.243 50z"/>
          </svg>
        </div>
        <p className='modal-title' id="simple-modal-title">We're stoked you want to order!</p>
        <p >
          And online ordering will be made available to everyone soon.
        </p>
        <p>
        As of now though, online ordering is available for <span className='emphasis'>local pick up only</span>. 
        </p>
        <div className='button-grid'>
          <a href="#" className='btn btn-cta'>
            Continue to pie
          </a>
        </div>
      </div>
    </div>
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

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div css={styles} id="nav">
        <div className='nav-container'>
          <div className='nav'>
            <div className='logo'>
              <img src='/cherry-co-logo-badge.png' alt='' />
            </div>
            <div className='nav-links'>
              <a className='nav-link' href="#menu">
                Menu
              </a>
              <a className='nav-link' href="#about">
                About Us
              </a>
              <a className='nav-link' href="#events">
                Events
              </a>
              <a className='nav-link' href="#contact">
                Contact Us
              </a>
              <button className='btn btn-white' type="button" onClick={handleOpen}>
                Order Locally
              </button>
            </div>
          </div>
        </div>
      </div>
      <SimpleModal
        open={open}
        setOpen={setOpen}
        text="Hello this is a prop"
      />
    </>
  );
};

export default Navigation;
