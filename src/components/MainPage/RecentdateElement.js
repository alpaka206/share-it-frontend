import React from "react";
import "../../css/RecentdateElement.css";

const RecentdateElement = ({ Month, date, dayinfo, itemname }) => {
  return (
    <div className="RecentdateElement">
      <div className="RecentdateElement-calendar">
        <div className="RecentdateElement-month">{Month}</div>
        <div className="RecentdateElement-date">{date}</div>
      </div>
      <div className="RecentdateElement-info">
        <div className="RecentdateElement-dayinfo">{dayinfo}</div>
        <div className="RecentdateElement-iteminfo">{itemname}</div>
      </div>
    </div>
  );
};

export default RecentdateElement;
