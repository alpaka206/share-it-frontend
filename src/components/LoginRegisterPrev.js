import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginRegisterPrev.css";
import Login from "./Login";

function LoginRegisterPrev() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const Rest_api_key = "6caecbc232757f347cc9db0a0cfb6392"; //REST API KEY
  const redirect_uri = "http://localhost:3000/"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleBackButtonClick = () => {
    setIsLogin(false);
  };

  const handleSignupClick = () => {
    navigate("/register");
  };

  return (
    <div className="LoginRegisterPrev">
      {isLogin ? (
        <Login onClick={handleBackButtonClick} />
      ) : (
        <>
          <div className="LoginRegisterText">
            공유경제의 기쁨,
            <br /> 지금 바로 경험해보세요
          </div>
          <button className="KakaoLogin" onClick={handleLogin}>
            <img
              src={process.env.PUBLIC_URL + `assets/kakao.svg`}
              alt="카카오"
            />
            카카오 로그인
          </button>
          <div className="buttons-row">
            <button className="login-button" onClick={handleLoginClick}>
              이메일로 로그인
            </button>
            |
            <button className="login-button" onClick={handleSignupClick}>
              이메일로 회원가입
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default LoginRegisterPrev;
