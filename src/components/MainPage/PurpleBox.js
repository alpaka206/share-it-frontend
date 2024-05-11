import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/PurpleBox.css';

const PurpleBox = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

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

    const handleMoreClick = () => {
        navigate('/need');
        window.scrollTo(0, 0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
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
                        <div className="circle">{itemNumber}</div>
                        <div className="purple-text">
                            {index === 0
                                ? '길이 체크 a b c d e f g h i j k l m n o p q r s t u v w x y z'
                                : index === 1
                                ? '길이 체크 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17'
                                : '아이폰 케이블 필요해요 급해요 ㅜㅜ'}
                        </div>
                    </div>
                ))}
            </div>
            <div className="purplebox-move">
                <button
                    className="purplebox-button"
                    onClick={handleMoreClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '9px' }}>필요해요 게시판 바로가기</div>
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

export default PurpleBox;
