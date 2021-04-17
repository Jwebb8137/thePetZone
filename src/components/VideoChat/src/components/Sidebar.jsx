import React, { useState, useContext, useEffect } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Logo from '../../../../assets/animals-peeking.png';
import { SocketContext } from '../Context';  

const Sidebar = ({ children }) => {
  const [displayNone, setDisplayNone] = useState("d-none")
  const [showCallBtn, setShowCallBtn] = useState("")
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const handleCall = (l) => {
    displayNone === "d-none" ? setDisplayNone("") : setDisplayNone("d-none");
    showCallBtn === "" ? setShowCallBtn("d-none") : setShowCallBtn("")
  }
  const callHandler = (idToCall) => {
    callUser(idToCall);
  }

  useEffect(() => {
    if (callAccepted) {
      successHandler()
    }
  })

  const successHandler = () => {
    callAccepted ? setDisplayNone("d-none") : setDisplayNone("d-none")
  }

  return (
    <div className='container p-0 mt-0 bg-dark'>
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
        <Button id='phone-send' onClick={() => handleCall(idToCall)} className={`btn btn-profile bg-back-grn ${showCallBtn}`}>
          <i class="fas fa-phone"></i>
        </Button>
      )}
        <form id="phone-input-form" className={`w-100 p-0 m-0 px-2 ${displayNone}`} noValidate autoComplete="off">
          <div class="col-12 mt-0">
            <div class="input-group">
              <input
                label="ID to call"
                type="input"
                class="form-control shadow-input chat-phone-input"
                id="floatingInput"
                placeholder="Enter number"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              <div class="input-group-append">
                <button id='call-send' onClick={() => callHandler(idToCall)} class="btn btn-success px-4 bg-back-grn h-100" type="button">          
                  <i class="fas fa-phone"></i>
                </button>
              </div>
            </div>
          </div>
          <div>
            {children}
          </div>
        </form>
      {/* <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} /> */}
    </div>
  );
};

export default Sidebar;
