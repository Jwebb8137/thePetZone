import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../../../assets/logo.png';
import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
}));

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
    <div className='container pb-10 bg-dark'>
      <CopyToClipboard text={me}>
        <Button id='copy-clipboard' className='btn bg-dark-grad btn-profile'>
          <i class="far fa-clipboard m-0"></i>
        </Button>
      </CopyToClipboard>
      {callAccepted && !callEnded ? (
        <Button id='phone-disable' onClick={leaveCall} className='btn btn-profile bg-danger'>
          <i class="fas fa-phone-slash m-0"></i>
        </Button>
      ) : (
        <Button id='phone-send' onClick={() => callUser(idToCall)} className='btn btn-profile bg-back-grn'>
          <i class="fas fa-phone"></i>
        </Button>
      )}
        <form className={classes.root} noValidate autoComplete="off">
          <div class="col-12 mt-3">
            <div class="form-floating mb-3">
              <input
                label="ID to call"
                type="input"
                class="form-control shadow-input chat-phone-input"
                id="floatingInput"
                placeholder="user123"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              <label for="floatingInput">Enter UserId</label>
              <small
                  id="passwordHelpBlock"
                  class="form-text text-white d-block mb-3"
                >
                 Enter the User Id for who you wish to make a call to!
                </small>
              <img id='chat-logo' src={Logo} className='w-50' />
            </div>
          </div>
              {/* <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} /> */}
        </form>
        {children}
    </div>
  );
};

export default Sidebar;
