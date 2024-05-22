import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/RecentTrade.css';

const RecentTrade = () => {
    const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수 생성

    const handleButtonClick = () => {
        navigate('/review');
        window.scrollTo(0, 0); // '/request' 경로로 이동
    };

    return (
        <div className="recent-trade">
            <span className="description">최근 거래는</span>
            <span className="sub-description">어떠셨나요?</span>
            <div className="star-container">
                <img src="/assets/star.svg" alt="Star" className="star-image" />
                <img src="/assets/star.svg" alt="Star" className="star-image" />
                <img src="/assets/unfill_star.svg" alt="Star" className="star-image" />
            </div>
            <div className="move">
                <div className="page-move" onClick={handleButtonClick}>
                    <span>다른 이용자 평가하기 </span>
                    <img src="/assets/arrow_circle.svg" alt="Footer Icon" width={20} />
                </div>
            </div>
        </div>
    );
};

export default RecentTrade;
