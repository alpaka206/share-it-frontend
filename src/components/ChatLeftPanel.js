// ChatLeftPanel.js
import React, { useState } from "react";
import "../css/ChatLeftPanel.css";
import ChatListElement from "./ChatListElement";

const ChatLeftPanel = () => {
  // 가짜 데이터
  const chatData = [
    {
      id: 1,
      isactive: true,
      username: "user1",
      time: "6분전",
      message: "거래해요",
    },
    {
      id: 2,
      isactive: false,
      username: "user2",
      time: "12분전",
      message: "안녕하세요",
    },
    {
      id: 3,
      isactive: false,
      username: "user3",
      time: "20분전",
      message: "반가워요",
    },
  ];

  const [activeId, setActiveId] = useState(1); // 활성화된 ChatListElement의 id

  const handleSetActive = (id) => {
    setActiveId(id);
  };

  return (
    <div className="left-panel">
      <div className="chat-title">Chat</div>
      <input type="text" placeholder="Search" className="chat-search-input" />
      <div className="chat-list">
        {chatData.map((chat) => (
          <React.Fragment key={chat.id}>
            <ChatListElement
              isactive={chat.id === activeId}
              username={chat.username}
              time={chat.time}
              message={chat.message}
              onClick={() => handleSetActive(chat.id)}
            />
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChatLeftPanel;
