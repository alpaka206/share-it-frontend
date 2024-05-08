// ChatLeftPanel.js
import React, { useState } from "react";
import "../css/ChatingRoom.css";
import MyChat from "./MyChat";
import GuestChat from "./GuestChat";

const ChatingRoom = () => {
  return (
    <div className="ChatingRoom">
      <div className="ChatContainer">
        <MyChat
          myText={
            "Longer Text and it is really longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong"
          }
        />
        <GuestChat
          GuestText={
            "Longer Text and it is really longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong"
          }
        />
        <MyChat
          myText={
            "Longer Text and it is really longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong"
          }
        />
        <GuestChat
          GuestText={
            "Longer Text and it is really longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong"
          }
        />
      </div>
    </div>
  );
};

export default ChatingRoom;
