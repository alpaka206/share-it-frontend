import React from "react";
import "../../css/RecentdateElement.css";

const RecentdateElement = () => {
  return (
    <div className="RecentdateElement">
      <div className="RecentdateElement-calendar">
        <div className="RecentdateElement-month">MAY</div>
        <div className="RecentdateElement-date">13</div>
      </div>
      <div className="RecentdateElement-info">
        <div className="RecentdateElement-dayinfo">반납일</div>
        <div className="RecentdateElement-iteminfo">에어팟 맥스</div>
      </div>
    </div>
  );
};

export default RecentdateElement;
