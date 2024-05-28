// ChatRightPanel.js
import React, { useState } from "react";
import "../css/ChatInput.css";

const ChatInput = ({ stompClient, chatHistory, setChatHistory }) => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    if (stompClient && stompClient.connected && message.trim() !== "") {
      const messageData = {
        roomId: chatHistory.roomId,
        senderId: chatHistory.userId,
        message: message,
        sendTime: new Date().toISOString(),
      };

      stompClient.publish({
        destination: `/pub/chat/message`,
        body: JSON.stringify(messageData),
      });

      stompClient.subscribe(
        `/pub/chat/message${chatHistory.roomId}`,
        (message) => {
          const response = JSON.parse(message.body);
          // 응답을 받아와서 chatHistory의 messages에 추가
          setChatHistory((prev) => ({
            ...prev,
            messages: [...prev.messages, response],
          }));
        }
      );
    }
  };

  return (
    <div className="ChatInput">
      <div className="ChatInput-Image">
        <img src={process.env.PUBLIC_URL + `assets/plus.svg`} alt="imageplus" />
      </div>
      <div className="ChatInput-InputBox">
        <input
          type="text"
          placeholder="Input Message"
          className="ChatInput-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="ChatInput-button" onClick={sendMessage}>
          <img
            src={process.env.PUBLIC_URL + `assets/uparrow.svg`}
            alt="uparrow"
          />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
