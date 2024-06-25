import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/RequestItemBox.css';

const RequestItemBox = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleMoreClick = () => {
        navigate('/need_form');
        window.scrollTo(0, 0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className="green-box">
            <div className="description">찾으시는 물건이 없나요?</div>

            <div className="greenbox-move">
                <button
                    className="greenbox-button"
                    onClick={handleMoreClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '6px' }}>물건 요청하러 가기</div>
                        <img
                            src={isHovered ? '/assets/arrow_circle_hover.svg' : '/assets/arrow_circle.svg'}
                            alt="More"
                            width={20}
                        />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default RequestItemBox;
