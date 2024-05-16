import React, { Fragment } from "react";
import "../css/Login.css";

function Login({ onClick }) {
  return (
    <div className="Login-container">
      <div className="Login">
        <button className="back-button" onClick={onClick}>
          <img
            src={process.env.PUBLIC_URL + `assets/login-back-arrow.svg`}
            alt="뒤로가기"
          />
        </button>
        <div>로그인</div>
        <div>&nbsp;</div>
      </div>
      <div className="Login-input-row">
        <input type="text" placeholder="아이디를 입력하세요" />
      </div>
      <div className="Login-input-row">
        <input
          type="password"
          placeholder="비밀번호는 8자리 이상 대소문자 포함"
        />
      </div>
      <div className="bottom-row">
        <div className="find-text">ID / PW 찾기</div>
        <button className="Login-container-button">로그인</button>
      </div>
    </div>
  );
}

export default Login;
