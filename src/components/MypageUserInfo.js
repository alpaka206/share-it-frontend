// src/components/YellowBox.js
import React from "react";
import "../css/MypageUserInfo.css";
import "../css/GradePreview.css";
import Rating from "@mui/material/Rating";

// CSS를 사용하여 별의 크기를 조절하는 스타일입니다.
const UserInfoStarStyles = {
  color: "black",
  fontSize: "32px",
};
const MypageUserInfo = ({
  tradingItems,
  reviewCount,
  nextReservation,
  isLoggedIn,
}) => {
  return (
    <div className="MypageUserInfo">
      <div className="mainpuage-login-userinfo">
        <div className="mainpuage-login-userimage">
          <img
            src={process.env.PUBLIC_URL + `assets/mypage.svg`}
            alt="유저이미지"
          />
        </div>
        <div className="mainpuage-login-userinfo-right">
          <div className="mainpuage-login-usertext-top">
            <div className="mainpuage-login-username">alpaka206</div>
            <div className="mainpuage-login-userdot">•</div>
            <div className="mainpuage-login-star">
              <Rating
                name="read-only"
                value={4.4}
                precision={0.1}
                readOnly
                sx={{ "& .MuiSvgIcon-root": UserInfoStarStyles }}
              />
            </div>
          </div>
          <div className="mainpuage-login-school">
            Catholic University of Korea
          </div>
          <button className="mainpuage-login-fixbutton">수정하기</button>
        </div>
      </div>

      <div className="mainpuage-login-info">
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
