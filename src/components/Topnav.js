import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import "../css/Topnav.css";
import PublicButton from "./PublicButton";
import SearchContainer from "./SearchContainer";
import LoginRegisterPrev from "./LoginRegisterPrev";
import { useNavigate } from "react-router-dom";

function Topnav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginRegister, setShowLoginRegister] = useState(false);
  const navigate = useNavigate();
  const loginRegisterRef = useRef(null); // Ref for login-register element

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLoginClick = () => {
    setShowLoginRegister(true);
  };

  const handleClickOutside = (event) => {
    if (
      loginRegisterRef.current &&
      !loginRegisterRef.current.contains(event.target)
    ) {
      setShowLoginRegister(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleButtonClick = (menuLink) => {
    navigate(menuLink);
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
              onClick={() => handleButtonClick("/")}
            />
          </div>
        </div>
        <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />
        <div className="right-header">
          <SearchContainer />
          <PublicButton
            Button_Text="채팅"
            Button_Image={`assets/chat.svg`}
            onClick={() => handleButtonClick("/Chat")}
          />
          {isLoggedIn ? (
            <PublicButton
              Button_Text="마이페이지"
              Button_Image={`assets/mypage.svg`}
            />
          ) : (
            <PublicButton
              Button_Text="로그인"
              Button_Image={`assets/mypage.svg`}
              onClick={handleLoginClick}
            />
          )}
        </div>
      </div>
      <div ref={loginRegisterRef} className="login-register">
        {showLoginRegister && <LoginRegisterPrev />}
      </div>
      <div className="nav_bottom">
        <PublicButton
          Button_Text="홈"
          Button_Image={`assets/home.svg`}
          onClick={() => handleButtonClick("/")}
        />
        <PublicButton
          Button_Text="빌릴물건"
          Button_Image={`assets/Search.svg`}
          onClick={() => handleButtonClick("/lend")}
        />
        <PublicButton
          Button_Text="필요물건"
          Button_Image={`assets/Search.svg`}
          onClick={() => handleButtonClick("/need")}
        />
        <PublicButton Button_Text="빌리기" Button_Image={`assets/need.svg`} />
        <PublicButton Button_Text="필요해요" Button_Image={`assets/lend.svg`} />
      </div>
    </div>
  );
}

export default Topnav;
