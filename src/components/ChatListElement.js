import React, { useState } from "react";
import "../css/ChatListElement.css";

const ChatListElement = ({ isactive, username, time, message, onClick }) => {
  return (
    <button
      className={`ChatListElement ${isactive ? "active" : ""}`}
      type="button"
      onClick={onClick}
    >
      <div className="ChatListElement-image">
        <img
          src={process.env.PUBLIC_URL + `assets/mypage.svg`}
          alt="chatuserimage"
        />
      </div>
      <div className="ChatListElement-info">
        <div className="ChatListElement-top">
          {username}&nbsp;&nbsp;
          <div className="ChatListElement-time">•&nbsp;&nbsp;{time}</div>
        </div>
        <div className="ChatListElement-message">{message}</div>
      </div>
    </button>
  );
};

export default ChatListElement;
