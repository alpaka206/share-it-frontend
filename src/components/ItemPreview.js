import React, { useState } from 'react';
import '../css/ItemPreview.css';

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
        if (rentalDays.nights === 0) {
            return `${rentalDays.days}일`;
        } else {
            return `${rentalDays.nights}박 ${rentalDays.days}일`;
        }
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
                <img src={process.env.PUBLIC_URL + productData.image} alt="상품 이미지" />
            </div>
            <div className="product-details">
                <h2 className="product">{productData.name}</h2>
                <p className="product">
                    {productData.location} · {calculateTimeDiff(productData.createdAt, new Date())}
                </p>
                <div className="product-info">
                    <span className="price">{`${productData.price.toLocaleString()}원 /`}</span>
                    <span className="rental-days">{formatRentalDays(productData.rentalDays)}</span>
                    <div className="heart-container">
                        <span className={heartClicked ? 'heart-red' : 'heart-gray'} onClick={handleHeartClick}>
                            &#9825;
                        </span>
                        <span className="heart-count">{heartCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
