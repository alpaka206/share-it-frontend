// ChatRightPanel.js
import React, { useEffect, useState } from "react";
import "../css/ChatRightPanel.css";
import ChatRoominfo from "./ChatRoominfo";
import ChatingRoom from "./ChatingRoom";
import ChatInput from "./ChatInput";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { useRecoilState } from "recoil";
import { chatingList } from "../Atoms";

const ChatRightPanel = ({ chatHistory, setChatHistory }) => {
  const [stompClient, setStompClient] = useState(null);
  const [chatAll, setChatAll] = useRecoilState(chatingList);

  // useEffect(() => {
  //   if (chatHistory.roomId) {
  //     const socket = new SockJS("https://catholic-mibal.site/ws/chat");
  //     const client = new Client({
  //       webSocketFactory: () => socket,
  //       reconnectDelay: 5000,
  //       onConnect: () => {
  //         console.log("Connected");
  //         client.subscribe(`/sub/chat/room${chatHistory.roomId}`, (message) => {
  //           const response = JSON.parse(message.body);
  //           setChatHistory((prev) => ({
  //             ...prev,
  //             messages: [...prev.messages, response],
  //           }));
  //         });
  //       },
  //       onDisconnect: () => {
  //         console.log("Disconnected");
  //       },
  //     });

  //     client.activate();
  //     setStompClient(client);

  //     return () => {
  //       if (client) client.deactivate();
  //     };
  //   }
  // }, [chatHistory.roomId]);
  return (
    <div className="right-panel">
      <ChatRoominfo
        stompClient={stompClient}
        chatHistory={chatAll}
        setChatHistory={setChatAll}
      />
      <ChatingRoom chatHistory={chatAll} setChatHistory={setChatAll} />
      <ChatInput
        stompClient={stompClient}
        chatHistory={chatAll}
        setChatHistory={setChatAll}
      />
    </div>
  );
};

export default ChatRightPanel;
