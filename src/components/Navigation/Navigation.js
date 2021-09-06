import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SimpleModal = (props) => {
  console.log(props, 'props in simple modal');
  const { setOpen, open } = props;

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
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
              <a className='nav-link' href="#">
                Events
              </a>
              <a className='nav-link' onClick={() => console.log('this is hitting')}>
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
