// ChatRightPanel.js
import React from "react";
import "../css/GuestDeal.css";
import { formatDate } from "../utils/dateFormatter";
const GuestDeal = ({ startDate, endDate }) => {
  return (
    <div className="GuestDeal">
      <div className="GuestDeal-text">약속을 만들었어요.</div>
      <div className="GuestDeal-date">대여일 : {formatDate(startDate)}</div>
      <div className="GuestDeal-date">반납일 : {formatDate(endDate)}</div>
    </div>
  );
};

export default GuestDeal;
