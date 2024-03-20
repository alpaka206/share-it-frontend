import React from "react";
import Topnav from "../components/Topnav";
import ChatLeftPanel from "../components/ChatLeftPanel";
import ChatRightPanel from "../components/ChatRightPanel";
import "../css/Chat.css";

const Chat = () => {
  return (
    <div className="container">
      <Topnav />
      <div>
        <ChatLeftPanel />
        <ChatRightPanel />
      </div>
    </div>
  );
};

export default Chat;
