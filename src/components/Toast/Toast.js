import React, { useEffect, useState } from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // '& > * + *': {
    //   marginTop: theme.spacing(2),
    // },
    zIndex: '10000',
    position: 'relative',
    // margin: '0 auto',
    // display: 'inline',
    bottom: '-4.5rem',
    width: '400px',
    margin: '0 auto',
    opacity: '0'
    // transform: 'translate(-50%)'
  },
}));

const Toast = ({ severity, message, openToast, closeToast }) => {
  useEffect(() => {
    setOpen(openToast)
  }, [openToast]);

  const classes = useStyles();
  const [open, setOpen] = useState(openToast);
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        styles = {{ 
          position: 'relative',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '1000'

        }}
      >
      </Snackbar>
      <Alert onClose={handleClose} severity={severity}>{message}</Alert>
    </div>
  );
};

export default Toast;
