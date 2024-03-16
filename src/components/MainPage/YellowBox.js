// src/components/YellowBox.js
import React from "react";
import "../../css/YellowBox.css";

const YellowBox = ({ username, itemCount }) => {
  return (
    <div className="yellow-box">
      <p className="greeting">환영합니다! {username}님</p>
      <p className="prompt">오늘은 어떤 물건을 공유할까요?</p>
      <p className="item-count">
        지금 내가 빌려준 물건<span className="count">{itemCount}</span>
      </p>
    </div>
  );
};

export default YellowBox;
