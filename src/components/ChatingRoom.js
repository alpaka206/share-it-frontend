// ChatLeftPanel.js
import React, { useState } from "react";
import "../css/ChatingRoom.css";
import MyChat from "./MyChat";
import GuestChat from "./GuestChat";

const ChatingRoom = () => {
  return (
    <div className="ChatingRoom">
      <div className="ChatContainer">
        <GuestChat GuestText={"거래 장소는 어디서할까요?"} />
        <GuestChat GuestText={"넵 알겠습니다"} />
        <MyChat myText={"아니요 네고는 힘들것 같습니다"} />
        <GuestChat GuestText={"혹시 네고 가능할까요?"} />
        <MyChat myText={"2일이면 10000원이십니다."} />
        <GuestChat GuestText={"아 감사합니다. 가격은 혹시 얼마일까요?"} />
        <MyChat myText={"생활 기스정도만 있고 기능적으로 문제는 없어요"} />
        <GuestChat GuestText={"혹시 물건에 문제같은건 따로 없을까요?"} />
        <MyChat myText={"네 가능할거같아요"} />
        <GuestChat GuestText={"5월 22일부터 5월 23일까지 빌릴수 있을까요?"} />
        <MyChat myText={"네 가능해요. 언제부터 언제까지 사용하시나요?"} />
        <GuestChat GuestText={"안녕하세요. 혹시 빌릴수 있을까요?"} />
      </div>
    </div>
  );
};

export default ChatingRoom;
