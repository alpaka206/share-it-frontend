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
      // {
      //   roomId: 1,
      //   sender: "winterizcoming",
      //   message: "안녕하세요. 혹시 빌릴수 있을까요?",
      //   sendTime: "2024-05-07T00:58:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "alpaka206",
      //   message: "네 가능해요. 언제부터 언제까지 사용하시나요?",
      //   sendTime: "2024-05-07T01:00:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "winterizcoming",
      //   message: "5월 22일부터 5월 23일까지 빌릴수 있을까요?",
      //   sendTime: "2024-05-07T01:05:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "alpaka206",
      //   message: "네 가능할거같아요",
      //   sendTime: "2024-05-07T01:10:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "winterizcoming",
      //   message: "혹시 물건에 문제같은건 따로 없을까요?",
      //   sendTime: "2024-05-07T01:15:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "alpaka206",
      //   message: "생활 기스정도만 있고 기능적으로 문제는 없어요",
      //   sendTime: "2024-05-07T01:20:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "winterizcoming",
      //   message: "아 감사합니다. 가격은 혹시 얼마일까요?",
      //   sendTime: "2024-05-07T01:25:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "alpaka206",
      //   message: "2일이면 10000원이십니다.",
      //   sendTime: "2024-05-07T01:30:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "winterizcoming",
      //   message: "혹시 네고 가능할까요?",
      //   sendTime: "2024-05-07T01:35:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "alpaka206",
      //   message: "아니요 네고는 힘들것 같습니다",
      //   sendTime: "2024-05-07T01:40:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "winterizcoming",
      //   message: "넵 알겠습니다",
      //   sendTime: "2024-05-07T01:45:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "alpaka206",
      //   message: "거래 장소는 어디서할까요?",
      //   sendTime: "2024-05-07T01:50:23.36076",
      //   discriminateType: "MESSAGE",
      // },
      // {
      //   roomId: 1,
      //   sender: "alpaka206",
      //   discriminateType: "PURCHASE",
      //   purchaseId: 1,
      //   startDate: "2024-05-07T00:58:23.36076",
      //   endDate: "2024-05-07T00:58:23.36076",
      //   sendTime: "2024-05-07T00:58:23.36076",
      // },
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
