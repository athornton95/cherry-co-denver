import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import styles from './Navigation.styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

const Navigation = () => {
  // const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    console.log('this is clcking')
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const test = () => {
    console.log('testing clicks')
  }

  const body = (
    <div>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

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
              <a className='nav-link' href="#">
                Events
              </a>
              <button className='nav-link' onClick={test}>
                Contact Us
              </button>
              <a color="inherit" className='btn btn-white'>Order Locally</a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

export default Navigation;
