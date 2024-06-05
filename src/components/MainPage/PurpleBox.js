import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/PurpleBox.css";

const PurpleBox = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
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
    navigate("/need");
    window.scrollTo(0, 0);
  };

  const handleMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleMouseLeave = () => {
    setIsButtonHovered(false);
  };

  return (
    <div className="purple-box">
      <div className="title">이런 물건들이 필요해요!</div>
      <div className="content">
        {[1, 2, 3].map((itemNumber, index) => (
          <div
            className={`item ${index === currentItemIndex ? "active" : ""}`}
            key={index}
            onMouseEnter={() => handleItemHover(index)}
            onMouseLeave={handleItemLeave}
          >
            <div className="circle">{itemNumber}</div>
            <div className="purple-text">
              {index === 0
                ? "돗자리 있으신분 있나요?"
                : index === 1
                ? "공학용 계산기 가지고 계신분 있나요?"
                : "충전기가 필요해요"}
            </div>
          </div>
        ))}
      </div>
      <button
        className="purplebox-button"
        onClick={handleMoreClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        필요해요 게시판 바로가기
        <img
          src={
            isButtonHovered
              ? "/assets/arrow_circle_hover.svg"
              : "/assets/arrow_circle.svg"
          }
          alt="More"
          width={20}
        />
      </button>
    </div>
  );
};

export default PurpleBox;
