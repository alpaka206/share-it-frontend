import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Mainpage.css';
import Topnav from '../components/Topnav';
import YellowBox from '../components/MainPage/YellowBox';
import GreenBox from '../components/MainPage/GreenBox';
import DotCalendar from '../components/MainPage/DotCalendar';
import PurpleBox from '../components/MainPage/PurpleBox';
import Footer from '../components/Footer';
import ItemRow from '../components/MainPage/ItemRow';

function Mainpage() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Function to handle click event on "더보기" link
    const handleMoreClick = () => {
        navigate('/register'); // Redirect to register page
    };

    return (
        <div className="container">
            <Topnav />
            <div className="semi_container">
                <YellowBox className="yellow_box" />
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

            <div className="lend-more" onClick={handleMoreClick}>
                <span style={{ verticalAlign: 'middle' }}>더보기 </span>
                <img src="/assets/arrow_circle.svg" alt="Lend More" width={26} style={{ verticalAlign: 'middle' }} />
            </div>

            <Footer />
        </div>
    );
}

export default Mainpage;
