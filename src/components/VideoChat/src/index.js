import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './Context';

import './styles.css';

const VideoChat = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  )
}

export default VideoChat
