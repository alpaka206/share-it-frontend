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
      username: "winterizcoming",
      time: "6분전",
      message: "거래 장소는 어디서할까요?",
    },
    {
      id: 2,
      isactive: false,
      username: "devkeon123",
      time: "12분전",
      message: "제가 빌릴수 있을까요?",
    },
    {
      id: 3,
      isactive: false,
      username: "smdmim",
      time: "20분전",
      message: "감사합니다",
    },
    {
      id: 4,
      isactive: false,
      username: "alpaka206",
      time: "40분전",
      message: "어디신가요?",
    },
    {
      id: 5,
      isactive: false,
      username: "xininny",
      time: "1시간전",
      message: "넵 알겠습니다",
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
