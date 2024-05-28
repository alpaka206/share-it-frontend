// ChatRightPanel.js
import React, { useEffect, useState } from "react";
import "../css/ChatRightPanel.css";
import ChatRoominfo from "./ChatRoominfo";
import ChatingRoom from "./ChatingRoom";
import ChatInput from "./ChatInput";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const ChatRightPanel = ({ chatHistory, setChatHistory }) => {
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    if (chatHistory.roomId) {
      const socket = new SockJS("https://catholic-mibal.site/ws/chat");
      const client = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000,
        onConnect: () => {
          console.log("Connected");
          client.subscribe(`/sub/chat/room${chatHistory.roomId}`, (message) => {
            const response = JSON.parse(message.body);
            setChatHistory((prev) => ({
              ...prev,
              messages: [...prev.messages, response],
            }));
          });
        },
        onDisconnect: () => {
          console.log("Disconnected");
        },
      });

      client.activate();
      setStompClient(client);

      return () => {
        if (client) client.deactivate();
      };
    }
  }, [chatHistory.roomId]);
  return (
    <div className="right-panel">
      <ChatRoominfo
        stompClient={stompClient}
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
      />
      <ChatingRoom chatHistory={chatHistory} setChatHistory={setChatHistory} />
      <ChatInput
        stompClient={stompClient}
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
      />
    </div>
  );
};

export default ChatRightPanel;
