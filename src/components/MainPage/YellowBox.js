// src/components/YellowBox.js
import React from "react";
import "../../css/YellowBox.css";

const YellowBox = () => {
  return (
    <div className="yellow-box">
      <p className="greeting">환영합니다!</p>
      <p className="prompt">오늘은 어떤 물건을 공유할까요?</p>
    </div>
  );
};

export default YellowBox;
