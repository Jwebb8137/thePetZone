import React, { useContext, useState } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import './VideoPlayer.css'
import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '100%',
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <div className='m-0 p-0 bg-dark'>
      <div className='row'>
        <div className='col-12'>
          {stream && (
            <div>
              <video playsInline ref={myVideo} autoPlay className={classes.video} />
            </div>
          )}
        </div>
      </div>
      <div className='col-12'>
        {callAccepted && !callEnded && (
          <video playsInline ref={userVideo} autoPlay className={classes.video} />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
