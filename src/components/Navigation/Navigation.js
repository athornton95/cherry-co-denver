import React, { useState } from 'react';
import { Link } from "gatsby"
import { Modal } from '@material-ui/core';
import { css } from '@emotion/react';
import styles from './Navigation.styles';

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
        <p className='modal-title' id="simple-modal-title">Thanksgiving is around the corner!</p>
        <p>
          To preorder pies, click the button below and you will be directed to our ordering platform for in store pick up. 
        </p>
        <p>
          Please note: Pick up dates are November 19-23 <span className='emphasis'>in store only</span>. 
        </p>
        <p>
          Questions or to order over the phone, call us at 303-635-6748. 
        </p>
        <div className='button-grid'>
          <a href="https://www.toasttab.com/colorado-cherry-co%20-pie-provisions/v3" target='_blank' rel="noopener noreferrer" className='btn btn-cta'>
            Preorder Now
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
        <div className='nav-secondary'>
          <p>Legacy Pie Co: the next generation of Colorado Cherry Company!
          <span className='span-link'>
            <Link
              target='blank'
              rel="noopener noreferrer"
              to="https://mainvest.com/in/legacy-pie-co"
            >
              Learn more.
            </Link>
          </span>
          </p>
        </div>
        <div className='nav-container'>
          <div className='nav'>
            <Link to="/" className='logo'>
              <img src='/cherry-co-logo-badge.webp' alt='Cherry Co badge' />
            </Link>
            <div className='nav-links'>
              <Link className='nav-link' to="/#menu">
                Menu
              </Link>
              <Link
                className='nav-link'
                target='blank'
                rel="noopener noreferrer"
                to="https://mainvest.com/in/legacy-pie-co">
                Big News!
              </Link>
              <Link className='nav-link' to="/#about">
                About Us
              </Link>
              <Link className='nav-link' to="/#events">
                Events
              </Link>
              <button className='btn btn-white order' type="button" onClick={handleOpen}>
                Thanksgiving Preorder
              </button>
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

export default Navigation;
