import React, { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import '../css/LoginRegisterPrev.css';
import Login from './Login';
import { kakaoConfig } from '../data/kakaoConfig.js';

function LoginRegisterPrev() {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoConfig.Rest_api_key}&redirect_uri=${kakaoConfig.redirect_uri}&response_type=code`;

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
        navigate('/register');
        window.scrollTo(0, 0);
    };

    return (
        <div className="LoginRegisterPrev">
            {isLogin ? (
                <Login onClick={handleBackButtonClick} />
            ) : (
                <div className="LoginRegisterPrev-prev">
                    <div className="LoginRegisterText">
                        공유경제의 기쁨,
                        <br /> 지금 바로 경험해보세요
                    </div>
                    <button className="KakaoLogin" onClick={handleLogin}>
                        <img src={process.env.PUBLIC_URL + `assets/kakao.svg`} alt="카카오" />
                        카카오로 시작하기
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
                </div>
            )}
        </div>
    );
}

export default LoginRegisterPrev;
