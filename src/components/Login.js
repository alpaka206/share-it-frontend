import React, { Fragment } from "react";
import "../css/Login.css";

function Login({ onClick }) {
  return (
    <Fragment>
      <div className="Login">
        <button className="back-button" onClick={onClick}>
          &#8592;
        </button>
        <div>로그인</div>
      </div>
      <div className="id-input-row">
        <input type="text" placeholder="아이디를 입력하세요" />
      </div>
      <div className="pw-input-row">
        <input
          type="password"
          placeholder="비밀번호는  8자리 이상  대소문자 포함"
        />
      </div>
      <div className="bottom-row">
        <div className="find-text">ID/PW 찾기</div>
        <button className="login-button">로그인</button>
      </div>
    </Fragment>
  );
}

export default Login;
