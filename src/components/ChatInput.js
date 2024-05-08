// ChatRightPanel.js
import React from "react";
import "../css/ChatInput.css";

const ChatInput = () => {
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
        />
        <button className="ChatInput-button">
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
