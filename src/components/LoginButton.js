import React, { Fragment, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LoginRegisterPrev from "./LoginRegisterPrev";
import "../css/PublicButton.css";
import "../css/LoginButton.css";

function LoginButton({ targetUrl }) {
  const [showLoginRegister, setShowLoginRegister] = useState(false);
  const loginRegisterRef = useRef(null);
  const location = useLocation();
  const isActive = location.pathname === targetUrl;
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
  return (
    <Fragment>
      <button
        type="button"
        className={`PublicButton ${isActive ? "active" : ""}`}
        onClick={handleLoginClick}
      >
        <img
          src={process.env.PUBLIC_URL + `assets/mypage.svg`}
          alt="ButtonImage"
        />

        <div>로그인</div>
      </button>
      <div ref={loginRegisterRef} className="login-register">
        {showLoginRegister && <LoginRegisterPrev />}
      </div>
    </Fragment>
  );
}

export default LoginButton;
