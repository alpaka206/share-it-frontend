import React, { useState } from "react";
import "../css/LoginRegisterPrev.css";
import Login from "./Login";

function LoginRegisterPrev() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleBackButtonClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="LoginRegisterPrev">
      {isLogin ? (
        <Login onClick={handleBackButtonClick} />
      ) : (
        <>
          <div>
            공유경제의 기쁨,
            <br /> 지금 바로 경험해보세요
          </div>
          <div className="buttons-row">
            <button className="login-button" onClick={handleLoginClick}>
              로그인
            </button>
            <button className="signup-button">회원가입</button>
          </div>
          <div className="errorMessage">로그인에 문제가 있으신가요?</div>
        </>
      )}
    </div>
  );
}

export default LoginRegisterPrev;
