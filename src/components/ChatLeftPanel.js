// ChatLeftPanel.js
import React, { useEffect, useState } from "react";
import "../css/ChatLeftPanel.css";
import ChatListElement from "./ChatListElement";
import axios from "axios";
import { useRecoilState } from "recoil";
import { chatingList } from "../Atoms";

const ChatLeftPanel = ({ chatHistory, setChatHistory }) => {
  const [chatItem, setChatItem] = useRecoilState(chatingList);

  const [chatList, setChatList] = useState([
    {
      id: 1,
      isactive: true,
      title: "winterizcoming",
    },
    {
      id: 2,
      isactive: false,
      title: "devkeon123",
    },
    {
      id: 3,
      isactive: false,
      title: "smdmim",
    },
    {
      id: 4,
      isactive: false,
      title: "alpaka206",
    },
    {
      id: 5,
      isactive: false,
      title: "xininny",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredChatList, setFilteredChatList] = useState(chatList);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const token = localStorage.getItem("token");
  //       const response = await axios.get(
  //         "https://catholic-mibal.site/api/chatroom"
  //         // {
  //         //   headers: {
  //         //     Authorization: token,
  //         //   },
  //         // }
  //       );
  //       if (
  //         response.data.code === "SEC-001" ||
  //         response.data.code === "SEC-002"
  //       ) {
  //         localStorage.removeItem("token");
  //       } else if (response.status === 200) {
  //         setChatList((prev) => ({
  //           ...prev,
  //           ...response.data.data,
  //         }));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // Handle errors if needed
  //     }
  //   };

  //   fetchData(); // Call the async function immediately
  // }, []);
  useEffect(() => {
    setFilteredChatList(
      chatList.filter((chat) =>
        chat.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, chatList]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [activeId, setActiveId] = useState(null);

  const handleSetActive = (id, title) => {
    setActiveId(id);
    // const response = axios.get(
    //   `https://catholic-mibal.site/api/message/history?cursor=${""}&roomId=${id}&size=${10}`
    //   // {
    //   //   headers: {
    //   //     Authorization: token,
    //   //   },
    //   // }
    // );
    // if (response.data.code === "SEC-001" || response.data.code === "SEC-002") {
    //   localStorage.removeItem("token");
    // } else if (response.status === 200) {
    setChatItem((prev) => ({
      ...prev,
      // hasNext: response.data.data.hasNext,
      // cursor: response.data.data.cursor,
      // messages: [...response.data.data.messages],
      // roomId: response.data.data.messages[0].roomId,
      userId: title,

      messages: [
        {
          roomId: 1,
          sender: "winterizcoming",
          message: "안녕하세요. 혹시 빌릴수 있을까요?",
          sendTime: "2024-05-07T00:58:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "alpaka206",
          message: "네 가능해요. 언제부터 언제까지 사용하시나요?",
          sendTime: "2024-05-07T01:00:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "winterizcoming",
          message: "5월 22일부터 5월 23일까지 빌릴수 있을까요?",
          sendTime: "2024-05-07T01:05:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "alpaka206",
          message: "네 가능할거같아요",
          sendTime: "2024-05-07T01:10:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "winterizcoming",
          message: "혹시 물건에 문제같은건 따로 없을까요?",
          sendTime: "2024-05-07T01:15:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "alpaka206",
          message: "생활 기스정도만 있고 기능적으로 문제는 없어요",
          sendTime: "2024-05-07T01:20:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "winterizcoming",
          message: "아 감사합니다. 가격은 혹시 얼마일까요?",
          sendTime: "2024-05-07T01:25:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "alpaka206",
          message: "2일이면 10000원이십니다.",
          sendTime: "2024-05-07T01:30:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "winterizcoming",
          message: "혹시 네고 가능할까요?",
          sendTime: "2024-05-07T01:35:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "alpaka206",
          message: "아니요 네고는 힘들것 같습니다",
          sendTime: "2024-05-07T01:40:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "winterizcoming",
          message: "넵 알겠습니다",
          sendTime: "2024-05-07T01:45:23.36076",
          discriminateType: "MESSAGE",
        },
        {
          roomId: 1,
          sender: "alpaka206",
          message: "거래 장소는 어디서할까요?",
          sendTime: "2024-05-07T01:50:23.36076",
          discriminateType: "MESSAGE",
        },
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
    }));
    console.log(chatItem.messages);
    // }
  };

  return (
    <div className="left-panel">
      <div className="chat-title">Chat</div>
      <input
        type="text"
        placeholder="Search"
        className="chat-search-input"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="chat-list">
        {/* {chatList.map((chat) => (
          <React.Fragment key={chat.chatRoomId}>
            <ChatListElement
              isactive={chat.chatRoomId === activeId}
              username={chat.username}
              time={chat.time}
              message={chat.message}
              onClick={() => handleSetActive(chat.chatRoomId)}
            />
            <hr />
          </React.Fragment>
        ))} */}
        {/* {chatData.map((chat) => (
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
        ))} */}
        {filteredChatList.map((chat) => (
          <React.Fragment key={chat.id}>
            <ChatListElement
              isactive={chat.id === activeId}
              title={chat.title}
              onClick={() => handleSetActive(chat.id, chat.title)}
            />
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChatLeftPanel;
