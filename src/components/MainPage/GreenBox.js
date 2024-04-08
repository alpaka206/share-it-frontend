import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/GreenBox.css';

const GreenBox = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/need');
        window.scrollTo(0, 0);
    };

    return (
        <div className="green-box">
            <span className="description">찾으시는 물건이</span>
            <span className="sub-description">없나요?</span>
            <div className="move">
                <div className="page-move" onClick={handleButtonClick}>
                    <span>물건 요청하러 가기 </span>
                    <img src="/assets/arrow_circle.svg" alt="Footer Icon" width={20} />
                </div>
            </div>
        </div>
    );
};

export default GreenBox;
