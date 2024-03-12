// Topnav.js

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../css/Topnav.css";
import PublicButton from "./PublicButton";

function Topnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

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
          <PublicButton
            Button_Text="알림"
            Button_Image={`assets/alert.svg`}
          ></PublicButton>
          <PublicButton
            Button_Text="마이페이지"
            Button_Image={`assets/mypage.svg`}
          ></PublicButton>
        </div>
      </div>
      <div className="nav_bottom">
        <PublicButton
          Button_Text="홈"
          Button_Image={`assets/home.svg`}
        ></PublicButton>
        <PublicButton
          Button_Text="빌리기"
          Button_Image={`assets/borrow.svg`}
        ></PublicButton>
        <PublicButton
          Button_Text="필요해요"
          Button_Image={`assets/lend.svg`}
        ></PublicButton>
      </div>
    </div>
  );
}

export default Topnav;
