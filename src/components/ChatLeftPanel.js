// ChatLeftPanel.js
import React from "react";
import "../css/ChatLeftPanel.css";

const ChatLeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="chat-title">Chat</div>
      <input type="text" placeholder="Search" className="search-input" />
      <div className="chat-list"> {/* 채팅 리스트 */}</div>
    </div>
  );
};

export default ChatLeftPanel;
