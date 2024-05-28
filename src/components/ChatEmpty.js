// ChatRightPanel.js
import React from "react";
import "../css/ChatEmpty.css";

const ChatEmpty = () => {
  return (
    <div className="ChatEmpty">
      <img
        src={process.env.PUBLIC_URL + `assets/nochat.svg`}
        alt="no-chating"
      />
      <div className="ChatEmpty-text">채팅할 상대를 선택해 주세요.</div>
    </div>
  );
};

export default ChatEmpty;
