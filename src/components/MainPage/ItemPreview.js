import React, { useState } from "react";
import "../../css/ItemPreview.css";

const grayHeart = process.env.PUBLIC_URL + "/assets/gray_heart.svg";
const redHeart = process.env.PUBLIC_URL + "/assets/heart.svg";

const ProductCard = ({ productData }) => {
  const [heartClicked, setHeartClicked] = useState(false);
  const [heartCount, setHeartCount] = useState(productData.heartCount);

  const calculateTimeDiff = (startTime, endTime) => {
    const diffMs = endTime - startTime;
    const diffMin = Math.round(diffMs / 60000);
    if (diffMin < 60) {
      return `${diffMin}분 전`;
    } else if (diffMin < 1440) {
      const diffHours = Math.floor(diffMin / 60);
      return `${diffHours}시간 전`;
    } else {
      const diffDays = Math.floor(diffMin / 1440);
      return `${diffDays}일 전`;
    }
  };

  const formatRentalDays = (rentalDays) => {
    return `/ ${rentalDays.days}일`;
  };

  const handleHeartClick = () => {
    if (heartClicked) {
      setHeartCount(heartCount - 1);
    } else {
      setHeartCount(heartCount + 1);
    }
    setHeartClicked(!heartClicked);
  };

  return (
    <div className="product-box">
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + productData.image}
          alt="상품 이미지"
        />
      </div>
      <div className="product-details">
        <div className="productcard-name">{productData.name}</div>
        <div className="productcard-time">
          {calculateTimeDiff(productData.createdAt, new Date())}
        </div>
        <div className="product-info">
          <div>
            <span className="productcard-price">{`${productData.price.toLocaleString()}원 `}</span>
            <span className="productcard-rental-days">
              {formatRentalDays(productData.rentalDays)}
            </span>
          </div>
          <div className="heart-container">
            <img
              className="heart-icon"
              src={heartClicked ? redHeart : grayHeart}
              alt={heartClicked ? "빨간 하트" : "회색 하트"}
              onClick={handleHeartClick}
            />
            <div className="productcard-heart-count">{heartCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
