import React from 'react';
import App from './App';
import { ContextProvider } from './Context';

const VideoChat = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  )
}

export default VideoChat
