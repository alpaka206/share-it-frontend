import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from react-router-dom
import '../../css/PurpleBox.css';

const PurpleBox = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate(); // Using useNavigate for programmatic navigation

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isHovered) {
                setCurrentItemIndex((prevIndex) => (prevIndex + 1) % 3);
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [isHovered]);

    const handleItemHover = (index) => {
        setCurrentItemIndex(index);
        setIsHovered(true);
    };

    const handleItemLeave = () => {
        setIsHovered(false);
    };

    const handleNavigateToNeedPage = () => {
        navigate('/need'); // Navigating to '/need' page when clicked on "필요한 물건 문의하러 가기"
    };

    return (
        <div className="purple-box">
            <div className="title">이런 물건들이 필요해요!</div>
            <div className="content">
                {[1, 2, 3].map((itemNumber, index) => (
                    <div
                        className={`item ${index === currentItemIndex ? 'active' : ''}`}
                        key={index}
                        onMouseEnter={() => handleItemHover(index)}
                        onMouseLeave={handleItemLeave}
                    >
                        <span className="circle">{itemNumber}</span>
                        <span className="text">
                            {index === 0
                                ? '길이 체크 a b c d e f g h i j k l m n o p q r s t u v w x y z'
                                : index === 1
                                ? '길이 체크 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17'
                                : '아이폰 케이블 필요해요 급해요 ㅜㅜ'}
                        </span>
                    </div>
                ))}
            </div>

            <div className="footer">
                <div className="footer-content" onClick={handleNavigateToNeedPage}>
                    <span>필요한 물건 문의하러 가기 </span>
                    <img src="/assets/arrow_circle.svg" alt="Footer Icon" onMouseEnter={handleItemHover} width={20} />
                </div>
            </div>
        </div>
    );
};

export default PurpleBox;
