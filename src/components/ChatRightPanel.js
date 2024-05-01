// ChatRightPanel.js
import React from "react";
import "../css/ChatRightPanel.css";

const ChatRightPanel = () => {
  return (
    <div className="right-panel">
      <div className="item-box">
        {/* 물건에 대한 정보가 표시될 요소들이 여기에 들어갈 것입니다. */}
        <img
          src="process.env.PUBLIC_URL/assets/game.svg"
          alt="Item"
          className="item-image"
        />
        <div className="item-details">
          <div className="item-name">Item Name</div>
          <div className="user-name">User Name</div>
        </div>
        <button className="complete-button">거래완료</button>
        <button className="complete-button">약속잡기</button>
      </div>
      <div className="chat-page">
        {/* 채팅 페이지가 여기에 들어갈 것입니다. */}
      </div>
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
