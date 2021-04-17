import React, { useContext, useState } from 'react';
import './VideoPlayer.css'
import Spinner from '../../../Spinner/Spinner'
import { SocketContext } from '../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const [showVideo, setShowVideo] = useState("d-none")
  if (!stream) {
    return (
      <div className='cover'>
        <Spinner />
      </div>
    )
  }
  
  return (
    <div className='m-0 p-0 bg-dark'>
      <div className='row'>
        <div className='col-12'>
          {stream && (
            <div>
              <video id="cam-main" playsInline ref={myVideo} autoPlay className="" />
            </div>
          )}
        </div>
      </div>
      <div className='col-12'>
        {callAccepted && !callEnded && (
          <video id='secondary-caller' playsInline ref={userVideo} autoPlay className="" />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
