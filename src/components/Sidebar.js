import React, { useState } from 'react';
import '../css/Sidebar.css';
import PublicSideMenu from './PublicSideMenu';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar({ isOpen, onClose }) {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeMenuLink, setActiveMenuLink] = useState('/');

    React.useEffect(() => {
        setActiveMenuLink(location.pathname);
    }, [location.pathname]);

    const handleMenuClick = (menuLink) => {
        onClose();
        setActiveMenuLink(menuLink);
        navigate(menuLink);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <img src={process.env.PUBLIC_URL + `assets/logo.svg`} alt="logo" className="logo" />{' '}
                <button className="close-btn" onClick={onClose}>
                    <img src={process.env.PUBLIC_URL + '/assets/close.svg'} alt="Close" />
                </button>
            </div>
            <div className="home-group">
                <PublicSideMenu
                    Menu_Text="홈"
                    Menu_Link="/"
                    Menu_Image={`assets/home.svg`}
                    isActive={activeMenuLink === '/'}
                    onClick={() => handleMenuClick('/')}
                />
                <PublicSideMenu
                    Menu_Text="채팅"
                    Menu_Link="/chat"
                    Menu_Image={`assets/chat.svg`}
                    isActive={activeMenuLink === '/chat'}
                    onClick={() => handleMenuClick('/chat')}
                />
            </div>
            <div className="space"></div>
            <div className="lend-group">
                <PublicSideMenu
                    Menu_Text="빌릴물건"
                    Menu_Link="/lend"
                    Menu_Image={`assets/lend.svg`}
                    isActive={activeMenuLink === '/lend'}
                    onClick={() => handleMenuClick('/lend')}
                />
                <PublicSideMenu
                    Menu_Text="필요물건"
                    Menu_Link="/need"
                    Menu_Image={`assets/need.svg`}
                    isActive={activeMenuLink === '/need'}
                    onClick={() => handleMenuClick('/need')}
                />
                <PublicSideMenu
                    Menu_Text="빌리기"
                    Menu_Link="/lend_form"
                    Menu_Image={`assets/lend.svg`}
                    isActive={activeMenuLink === '/lend_form'}
                    onClick={() => handleMenuClick('/lend_form')}
                />
                <PublicSideMenu
                    Menu_Text="필요해요"
                    Menu_Link="/need_form"
                    Menu_Image={`assets/need.svg`}
                    isActive={activeMenuLink === '/need_form'}
                    onClick={() => handleMenuClick('/need_form')}
                />
            </div>
            <div className="space"></div>
            <div className="evaluate-group">
                <PublicSideMenu
                    Menu_Text="평가하기"
                    Menu_Link="/review"
                    Menu_Image={`assets/rate.svg`}
                    isActive={activeMenuLink === '/review'}
                    onClick={() => handleMenuClick('/review')}
                />
            </div>
            <div className="logout-space"></div>
            <div className="logout-group">
                <PublicSideMenu
                    Menu_Text="로그아웃"
                    Menu_Link="/logout"
                    Menu_Image={`assets/logout.svg`}
                    isActive={activeMenuLink === '/logout'}
                    onClick={() => handleMenuClick('/logout')}
                />
            </div>
        </div>
    );
}

export default Sidebar;
