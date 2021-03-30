import React from "react";
import VideoImg from "../../assets/video-chat.jpg";

const VideoChat = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 p-0">
          <img src={VideoImg} className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default VideoChat;
