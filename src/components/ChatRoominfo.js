// ChatRightPanel.js
import React, { Fragment, useState } from "react";
import "../css/ChatRoominfo.css";

const ChatRoominfo = () => {
  const [makeDeal, setMakeDeal] = useState(false);
  const handleDeal = () => {};
  return (
    <Fragment>
      <div className="ChatRoominfo">
        <div className="ChatRoominfo-Info-Container">
          <div className="ChatRoominfo-img">
            <img
              src={process.env.PUBLIC_URL + `assets/mypage.svg`}
              alt="Item"
            />
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
          <button
            className="ChatRoominfo-plan-button"
            type="button"
            onClick={() => setMakeDeal(true)}
          >
            <img
              src={process.env.PUBLIC_URL + `assets/calendar.svg`}
              alt="Item"
            />
            약속잡기
          </button>
        </div>
      </div>
      {makeDeal && (
        <div className="chatRoominfo-overlay">
          <div className="chatRoominfo-overlay-content">
            <div>대여일</div>
            <div>반납일</div>
            <button type="button" onClick={() => setMakeDeal(false)}>
              취소
            </button>
            <button type="button" onClick={() => setMakeDeal(false)}>
              보내기
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ChatRoominfo;
