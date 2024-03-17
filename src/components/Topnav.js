import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import "../css/Topnav.css";
import PublicButton from "./PublicButton";
import SearchContainer from "./SearchContainer";

function Topnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 나타내는 상태값 추가

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // useEffect(() => {

  //   const userIsLoggedIn = true;
  //   setIsLoggedIn(userIsLoggedIn);
  // }, []);

  return (
    <div className="header">
      <div className="nav_top">
        <div className="left-header">
          <img
            src="../assets/menu.svg"
            onClick={toggleMenu}
            alt="menu"
            className="menu-icon"
          />
          <div className="logo-container">
            <img
              src={process.env.PUBLIC_URL + `assets/logo.svg`}
              alt="logo"
              className="logo"
            />
          </div>
        </div>
        <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />
        <div className="right-header">
          <SearchContainer />

          <PublicButton Button_Text="알림" Button_Image={`assets/alert.svg`} />
          {isLoggedIn ? (
            <PublicButton
              Button_Text="마이페이지"
              Button_Image={`assets/mypage.svg`}
            />
          ) : (
            <PublicButton
              Button_Text="로그인"
              Button_Image={`assets/mypage.svg`}
            />
          )}
        </div>
      </div>
      <div className="nav_bottom">
        <PublicButton Button_Text="홈" Button_Image={`assets/home.svg`} />
        <PublicButton
          Button_Text="통합검색"
          Button_Image={`assets/Search.svg`}
        />
        <PublicButton Button_Text="빌리기" Button_Image={`assets/borrow.svg`} />
        <PublicButton Button_Text="필요해요" Button_Image={`assets/lend.svg`} />
      </div>
    </div>
  );
}

export default Topnav;
