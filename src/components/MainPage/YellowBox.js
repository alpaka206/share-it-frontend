// src/components/YellowBox.js
import React from "react";
import "../../css/YellowBox.css";

const YellowBox = ({
  tradingItems,
  reviewCount,
  nextReservation,
  isLoggedIn,
}) => {
  return (
    <div className="yellow-box">
      <p className="greeting">환영합니다!</p>
      <p className="prompt">오늘은 어떤 물건을 공유할까요?</p>
      {isLoggedIn && (
        <div className="yello-box-info">
          <div className="info-box">
            <p className="item-label">현재 거래중인 물건</p>
            <p className="item-value">{tradingItems}</p>
          </div>
          <div className="info-box">
            <p className="item-label">작성해야 하는 리뷰</p>
            <p className="item-value">{reviewCount}</p>
          </div>
          <div className="info-box">
            <p className="item-label">다음 예약까지</p>
            <p className="item-value">{nextReservation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default YellowBox;
