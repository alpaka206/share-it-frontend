// ChatRightPanel.js
import React from "react";
import "../css/MyDeal.css";
import { formatDate } from "../utils/dateFormatter";
const MyDeal = ({ startDate, endDate }) => {
  return (
    <div className="MyDeal">
      <div className="MyDeal-text">약속을 만들었어요.</div>
      <div className="MyDeal-date">대여일 : {formatDate(startDate)}</div>
      <div className="MyDeal-date">반납일 : {formatDate(endDate)}</div>
    </div>
  );
};

export default MyDeal;
