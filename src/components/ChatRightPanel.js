// ChatRightPanel.js
import React from "react";
import "../css/ChatRightPanel.css";
import ChatRoominfo from "./ChatRoominfo";
import ChatingRoom from "./ChatingRoom";
import ChatInput from "./ChatInput";

const ChatRightPanel = () => {
  return (
    <div className="right-panel">
      <ChatRoominfo />
      <ChatingRoom />
      <ChatInput />
    </div>
  );
};

export default ChatRightPanel;
