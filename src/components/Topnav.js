import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import '../css/Topnav.css';
import PublicButton from './PublicButton';
import SearchContainer from './SearchContainer';
import LoginRegisterPrev from './LoginRegisterPrev';
import { useLocation, useNavigate } from 'react-router-dom';

function Topnav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginRegister, setShowLoginRegister] = useState(false);
    const [activeButton, setActiveButton] = useState('/');
    const navigate = useNavigate();
    const loginRegisterRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const handleLoginClick = () => {
        setShowLoginRegister(true);
    };

    const handleClickOutside = (event) => {
        if (loginRegisterRef.current && !loginRegisterRef.current.contains(event.target)) {
            setShowLoginRegister(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    React.useEffect(() => {
        setActiveButton(location.pathname);
    }, [location.pathname]);

    const handleButtonClick = (menuLink) => {
        setActiveButton(menuLink);
        navigate(menuLink);
    };

    return (
        <div className="header">
            <div className={`nav_top ${isMenuOpen ? 'open' : ''}`}>
                <div className="left-header">
                    <img src="../assets/menu.svg" onClick={toggleMenu} alt="menu" className="menu-icon" />
                    <div className="logo-container">
                        <img
                            src={process.env.PUBLIC_URL + `assets/logo.svg`}
                            alt="logo"
                            className="logo"
                            onClick={() => handleButtonClick('/')}
                        />
                    </div>
                </div>
                <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} activeButton={activeButton} />
                <div className="right-header">
                    <SearchContainer />
                    <PublicButton
                        Button_Text="채팅"
                        Button_Image={`assets/chat.svg`}
                        targetUrl="/chat"
                        onClick={() => handleButtonClick('/chat')}
                    />
                    {isLoggedIn ? (
                        <PublicButton Button_Text="로그아웃" Button_Image={`assets/mypage.svg`} />
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
                    Button_Image="/assets/home.svg"
                    targetUrl="/"
                    onClick={() => handleButtonClick('/')}
                />

                <PublicButton
                    Button_Text="빌릴물건"
                    Button_Image={`assets/Search.svg`}
                    targetUrl="/lend"
                    onClick={() => handleButtonClick('/lend')}
                />
                <PublicButton
                    Button_Text="필요물건"
                    Button_Image={`assets/Search.svg`}
                    targetUrl="/need"
                    onClick={() => handleButtonClick('/need')}
                />
                <PublicButton
                    Button_Text="빌리기"
                    Button_Image={`assets/lend.svg`}
                    targetUrl="/lend_form"
                    onClick={() => handleButtonClick('/lend_form')}
                />
                <PublicButton
                    Button_Text="필요해요"
                    Button_Image={`assets/need.svg`}
                    targetUrl="/need_form"
                    onClick={() => handleButtonClick('/need_form')}
                />
            </div>
        </div>
    );
}

export default Topnav;
