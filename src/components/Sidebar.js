//Sidebar.js

import React, { useState } from "react";
import "../css/Sidebar.css";
import PublicSideMenu from "./PublicSideMenu";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenuLink, setActiveMenuLink] = useState("/");

  React.useEffect(() => {
    setActiveMenuLink(location.pathname);
  }, [location.pathname]);

  const handleMenuClick = (menuLink) => {
    onClose();
    setActiveMenuLink(menuLink);
    navigate(menuLink);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <img
          src={process.env.PUBLIC_URL + `assets/logo.svg`}
          alt="logo"
          className="logo"
        />{" "}
        <button className="close-btn" onClick={onClose}>
          <img src={process.env.PUBLIC_URL + "/assets/x.svg"} alt="Close" />
        </button>
      </div>
      <div className="home-group">
        <PublicSideMenu
          Menu_Text="홈"
          Menu_Link="/"
          Menu_Image={`assets/home.svg`}
          isActive={activeMenuLink === "/"}
          onClick={() => handleMenuClick("/")}
        />
        <PublicSideMenu
          Menu_Text="통합 검색"
          Menu_Link="/search"
          Menu_Image={`assets/Search.svg`}
          isActive={activeMenuLink === "/search"}
          onClick={() => handleMenuClick("/search")}
        />
        <PublicSideMenu
          Menu_Text="채팅"
          Menu_Link="/chat"
          Menu_Image={`assets/chat.svg`}
          isActive={activeMenuLink === "/chat"}
          onClick={() => handleMenuClick("/chat")}
        />
      </div>
      <div className="space"></div>
      <div className="lend-group">
        <PublicSideMenu
          Menu_Text="빌려주기"
          Menu_Link="/lend"
          Menu_Image={`assets/borrow.svg`}
          isActive={activeMenuLink === "/lend"}
          onClick={() => handleMenuClick("/lend")}
        />
        <PublicSideMenu
          Menu_Text="필요해요"
          Menu_Link="/need"
          Menu_Image={`assets/lend.svg`}
          isActive={activeMenuLink === "/need"}
          onClick={() => handleMenuClick("/need")}
        />
      </div>
      <div className="space"></div>
      <div className="evaluate-group">
        <PublicSideMenu
          Menu_Text="평가하기"
          Menu_Link="/evaluate"
          Menu_Image={`assets/evaluate.svg`}
          isActive={activeMenuLink === "/evaluate"}
          onClick={() => handleMenuClick("/evaluate")}
        />
        <PublicSideMenu
          Menu_Text="마이페이지"
          Menu_Link="/mypage"
          Menu_Image={`assets/mypage.svg`}
          isActive={activeMenuLink === "/mypage"}
          onClick={() => handleMenuClick("/mypage")}
        />
      </div>
      <div className="logout-space"></div>
      <div className="logout-group">
        <PublicSideMenu
          Menu_Text="로그아웃"
          Menu_Link="/logout"
          Menu_Image={`assets/logout.svg`}
          isActive={activeMenuLink === "/logout"}
          onClick={() => handleMenuClick("/logout")}
        />
      </div>
    </div>
  );
}

export default Sidebar;
