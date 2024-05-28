// ChatLeftPanel.js
import React, { useEffect, useState } from "react";
import "../css/ChatLeftPanel.css";
import ChatListElement from "./ChatListElement";
import axios from "axios";

const ChatLeftPanel = ({ chatHistory, setChatHistory }) => {
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
  // const chatData = [
  //   {
  //     id: 1,
  //     isactive: true,
  //     username: "winterizcoming",
  //     time: "6분전",
  //     message: "거래 장소는 어디서할까요?",
  //   },
  //   {
  //     id: 2,
  //     isactive: false,
  //     username: "devkeon123",
  //     time: "12분전",
  //     message: "제가 빌릴수 있을까요?",
  //   },
  //   {
  //     id: 3,
  //     isactive: false,
  //     username: "smdmim",
  //     time: "20분전",
  //     message: "감사합니다",
  //   },
  //   {
  //     id: 4,
  //     isactive: false,
  //     username: "alpaka206",
  //     time: "40분전",
  //     message: "어디신가요?",
  //   },
  //   {
  //     id: 5,
  //     isactive: false,
  //     username: "xininny",
  //     time: "1시간전",
  //     message: "넵 알겠습니다",
  //   },
  // ];

  const [activeId, setActiveId] = useState(1);

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
    setChatHistory((prev) => ({
      ...prev,
      // hasNext: response.data.data.hasNext,
      // cursor: response.data.data.cursor,
      // messages: [...prev.messages, ...response.data.data.messages],
      presentId: id,
      userId: title,
    }));
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
