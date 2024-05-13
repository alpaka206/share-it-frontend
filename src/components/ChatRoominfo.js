// ChatRightPanel.js
import React from "react";
import "../css/ChatRoominfo.css";

const ChatRoominfo = () => {
  return (
    <div className="ChatRoominfo">
      <div className="ChatRoominfo-Info-Container">
        <div className="ChatRoominfo-img">
          <img src={process.env.PUBLIC_URL + `assets/mypage.svg`} alt="Item" />
        </div>
        <div className="ChatRoominfo-textinfo">
          <div className="ChatRoominfo-username">winterizcoming</div>
          <div className="ChatRoominfo-itemname">매직 마우스</div>
        </div>
      </div>
      <div className="ChatRoominfo-button-Container">
        <button className="ChatRoominfo-complete-button" type="button">
          <img src={process.env.PUBLIC_URL + `assets/check.svg`} alt="Item" />{" "}
          거래완료
        </button>
        <button className="ChatRoominfo-plan-button" type="button">
          <img
            src={process.env.PUBLIC_URL + `assets/calendar.svg`}
            alt="Item"
          />
          약속잡기
        </button>
      </div>
    </div>
  );
};

export default ChatRoominfo;
