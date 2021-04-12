import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div>
          <button id='incoming-call' onClick={answerCall} className='btn grow btn-success text-dark bg-back-grn'>
            Incoming Call
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
