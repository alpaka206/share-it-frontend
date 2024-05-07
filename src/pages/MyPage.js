import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mainpage.css";
import Topnav from "../components/Topnav";
import DotCalendar from "../components/MainPage/DotCalendar";
import Footer from "../components/Footer";
import ItemRow from "../components/MainPage/ItemRow";
import MypageUserInfo from "../components/MypageUserInfo";

function MyPage() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMoreClick = () => {
    navigate("/lend");
    window.scrollTo(0, 0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <Topnav />
      <div className="semi_container">
        <MypageUserInfo
          className="yellow_box"
          tradingItems={3}
          reviewCount={3}
          nextReservation="D-3"
          isLoggedIn={isLoggedIn}
        />
        <DotCalendar className="DotCalendar" />
      </div>

      <div className="text-wrapper">내가 올린 상품 목록</div>
      <div>
        <ItemRow />
      </div>

      <div
        className="lend-more"
        onClick={handleMoreClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>

      <Footer />
    </div>
  );
}

export default MyPage;
