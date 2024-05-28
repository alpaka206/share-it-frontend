// ChatLeftPanel.js
import React, { useState } from "react";
import "../css/ChatingRoom.css";
import MyChat from "./MyChat";
import MyDeal from "./MyDeal";
import GuestDeal from "./GuestDeal";
import GuestChat from "./GuestChat";
import axios from "axios";

const ChatingRoom = ({ chatHistory, setChatHistory }) => {
  // const handleSetActive = () => {
  //   const response = axios.get(
  //     `https://catholic-mibal.site/api/message/history?cursor=${
  //       chatHistory.cursor
  //     }&roomId=${chatHistory.messages[0].roomId}&size=${10}`
  //     // {
  //     //   headers: {
  //     //     Authorization: token,
  //     //   },
  //     // }
  //   );

  //   if (response.data.code === "SEC-001" || response.data.code === "SEC-002") {
  //     localStorage.removeItem("token");
  //   } else if (response.status === 200) {
  //     setChatHistory((prev) => ({
  //       ...prev,
  //       hasNext: response.data.data.hasNext,
  //       cursor: response.data.data.cursor,
  //       messages: [...prev.messages, ...response.data.data.messages],
  //     }));
  //   }
  // };
  return (
    <div className="ChatingRoom">
      <div className="ChatContainer">
        {chatHistory.messages
          .slice()
          .reverse()
          .map((chat, index) =>
            chat.sender === chatHistory.userId ? (
              chat.discriminateType === "MESSAGE" ? (
                <GuestChat key={index} GuestText={chat.message} />
              ) : (
                <GuestDeal
                  key={index}
                  startDate={chat.startDate}
                  endDate={chat.endDate}
                />
              )
            ) : chat.discriminateType === "MESSAGE" ? (
              <MyChat key={index} myText={chat.message} />
            ) : (
              <MyDeal
                key={index}
                startDate={chat.startDate}
                endDate={chat.endDate}
              />
            )
          )}
      </div>
    </div>
  );
};

export default ChatingRoom;
