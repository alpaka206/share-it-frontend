import React, { useState } from "react";
import Topnav from "../components/Topnav";
import ChatLeftPanel from "../components/ChatLeftPanel";
import ChatRightPanel from "../components/ChatRightPanel";
import "../css/Chat.css";
import ChatEmpty from "../components/ChatEmpty";
import { useRecoilState } from "recoil";
import { chatingList } from "../Atoms";

const Chat = () => {
  const [chatMain, setChatMain] = useRecoilState(chatingList);

  const [chatHistory, setChatHistory] = useState({
    hasNext: null,
    cursor: "",
    userId: null,
    roomId: null,
    messages: [
    ],
  });
  return (
    <div className="container">
      <Topnav />
      <div className="Chat">
        <ChatLeftPanel
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
        />
        {chatMain.messages.length < 1 ? (
          <ChatEmpty />
        ) : (
          <ChatRightPanel
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
          />
        )}
      </div>
    </div>
  );
};

export default Chat;
