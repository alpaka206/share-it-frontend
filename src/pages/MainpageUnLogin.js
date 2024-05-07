import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css';
import Topnav from '../components/Topnav';
import YellowBox from '../components/MainPage/YellowBox';
import DotCalendar from '../components/MainPage/DotCalendar';
import GreenBox from '../components/MainPage/GreenBox';
import PurpleBox from '../components/MainPage/PurpleBox';
import Footer from '../components/Footer';
import ItemRow from '../components/MainPage/ItemRow';
import RecentTrade from '../components/MainPage/RecentTrade';
import GradePreview from '../components/MainPage/GradePreview';
import Calendar from '../components/Calendar';

function Mainpage() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleMoreClick = () => {
        navigate('/lend');
        window.scrollTo(0, 0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="container">
            <Topnav />
            <div className="semi_container">
                <YellowBox
                    className="yellow_box"
                    tradingItems={3}
                    reviewCount={3}
                    nextReservation="D-3"
                    isLoggedIn={isLoggedIn}
                />
                <DotCalendar className="DotCalendar" />
            </div>
            <div className="semi_container">
                <GreenBox className="green_box" />
                <PurpleBox className="purple_box" />
            </div>

            <div className="text-wrapper">주변엔 이런 물건을 빌릴 수 있어요</div>
            <div>
                <ItemRow />
            </div>

            <div
                className="lend-more"
                onClick={handleMoreClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span style={{ verticalAlign: 'middle' }}>더보기 </span>
                <img
                    src={isHovered ? '/assets/arrow_circle_hover.svg' : '/assets/arrow_circle.svg'}
                    alt="Lend More"
                    width={26}
                    style={{ verticalAlign: 'middle' }}
                />
            </div>

            <Footer />
        </div>
    );
}

export default Mainpage;
