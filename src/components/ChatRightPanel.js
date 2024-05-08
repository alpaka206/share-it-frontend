// ChatRightPanel.js
import React from "react";
import "../css/ChatRightPanel.css";
import ChatRoominfo from "./ChatRoominfo";
import ChatingRoom from "./ChatingRoom";

const ChatRightPanel = () => {
  return (
    <div className="right-panel">
      <ChatRoominfo />
      <ChatingRoom />
      <div className="input-box">
        <input
          type="text"
          placeholder="Type a message..."
          className="chat-input"
        />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default ChatRightPanel;
