import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import "../css/Topnav.css";
import PublicButton from "./PublicButton";
import SearchContainer from "./SearchContainer";
import { useLocation, useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";

function Topnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setActiveButton(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update login state
    handleButtonClick("/"); // Navigate to home or login page
    scrollToTop();
  };

  const handleButtonClick = (menuLink) => {
    setActiveButton(menuLink);
    navigate(menuLink);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="header">
      <div>
        <div className={`nav_top ${isMenuOpen ? "open" : ""}`}>
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
                onClick={() => {
                  handleButtonClick("/");
                  scrollToTop();
                }}
              />
            </div>
          </div>
          <Sidebar
            isOpen={isMenuOpen}
            onClose={toggleMenu}
            activeButton={activeButton}
          />
          <div className="right-header">
            <SearchContainer />
            <PublicButton
              Button_Text="채팅"
              Button_Image={`assets/chat.svg`}
              targetUrl="/chat"
              onClick={() => {
                handleButtonClick("/chat");
                scrollToTop();
              }}
              minWidth="16px"
            />
            {isLoggedIn ? (
              <PublicButton
                Button_Text="로그아웃"
                Button_Image={`assets/mypage.svg`}
                minWidth="15px"
                onClick={handleLogout}
              />
            ) : (
              <>
                <LoginButton />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="nav_bottom">
        <PublicButton
          Button_Text="홈"
          Button_Image={`/assets/home.svg`}
          targetUrl="/"
          onClick={() => {
            handleButtonClick("/");
            scrollToTop();
          }}
          minWidth="13px"
        />

        <PublicButton
          Button_Text="빌릴물건"
          Button_Image={`assets/search.svg`}
          targetUrl="/lend"
          onClick={() => {
            handleButtonClick("/lend");
            scrollToTop();
          }}
          minWidth="14px"
        />
        <PublicButton
          Button_Text="필요물건"
          Button_Image={`assets/search.svg`}
          targetUrl="/need"
          onClick={() => {
            handleButtonClick("/need");
            scrollToTop();
          }}
          minWidth="14px"
        />
        <PublicButton
          Button_Text="빌리기"
          Button_Image={`assets/lend.svg`}
          targetUrl="/lend_form"
          onClick={() => {
            handleButtonClick("/lend_form");
            scrollToTop();
          }}
          minWidth="21px"
        />
        <PublicButton
          Button_Text="필요해요"
          Button_Image={`assets/need.svg`}
          targetUrl="/need_form"
          minWidth="17px"
          onClick={() => {
            handleButtonClick("/need_form");
            scrollToTop();
          }}
        />
      </div>
    </div>
  );
}

export default Topnav;
