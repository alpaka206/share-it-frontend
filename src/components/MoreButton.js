// ChatRightPanel.js
import React from "react";

const MoreButton = ({
  handleMoreClick,
  handleMouseEnter,
  handleMouseLeave,
  isHovered,
}) => {
  return (
    <button
      className="main-more-button"
      onClick={handleMoreClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "7px" }}>더보기</div>
        <img
          src={
            isHovered
              ? "/assets/arrow_circle_hover.svg"
              : "/assets/arrow_circle.svg"
          }
          alt="Lend More"
          width={24}
        />
      </div>
    </button>
  );
};

export default MoreButton;
