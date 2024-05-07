// src/components/YellowBox.js
import React from "react";
import "../css/MypageUserInfo.css";
import "../css/GradePreview.css";
import Rating from "@mui/material/Rating";

// CSS를 사용하여 별의 크기를 조절하는 스타일입니다.
const blackStarStyles = {
  color: "black",
  fontSize: "1em",
};
const MypageUserInfo = ({
  tradingItems,
  reviewCount,
  nextReservation,
  isLoggedIn,
}) => {
  return (
    <div className="yellow-box">
      <div className="mypage-userinfo">
        <div className="mypage-userimage">
          <img
            src={process.env.PUBLIC_URL + `assets/kakao.svg`}
            alt="유저이미지"
          />
        </div>
        <div className="mypage-userinfo-right">
          <div className="mypage-usertext-top">
            <div className="mypage-username">username</div>
            <div className="mypage-userdot">•</div>
            <div className="mypage-star">
              {/* Rating 컴포넌트에 스타일을 적용합니다. */}
              <Rating
                name="read-only"
                value={4.4}
                precision={0.1}
                readOnly
                sx={{ "& .MuiSvgIcon-root": blackStarStyles }}
              />
            </div>
          </div>
          <div className="mypage-school">Catholic University of Korea</div>
          <button className="mypage-fixbutton">수정하기</button>
        </div>
      </div>

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
    </div>
  );
};

export default MypageUserInfo;
