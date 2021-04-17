import React, { useContext } from 'react';
import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="fade-in">
          <button id='incoming-call' onClick={answerCall} className='btn shake btn-success text-dark bg-back-grn'>
            Incoming Call
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
