import React, { useState } from 'react';
import '../css/ListPreview.css';

const grayHeart = process.env.PUBLIC_URL + '/assets/gray_heart.svg';
const redHeart = process.env.PUBLIC_URL + '/assets/heart.svg';

// 임시 해시태그 데이터
const tempHashtags = ['일곱글자태그임', '일곱글자태그임', '일곱글자태그임', '일곱글자태그임', '일곱글자태그임'];

const ListPreview = ({ productData }) => {
    const [heartClicked, setHeartClicked] = useState(false);
    const [heartCount, setHeartCount] = useState(productData.heartCount);

    const calculateTimeDiff = (startTime, endTime) => {
        const diffMs = endTime - startTime;
        const diffMin = Math.round(diffMs / 60000);
        if (diffMin < 60) {
            return `${diffMin}분전`;
        } else if (diffMin < 1440) {
            const diffHours = Math.floor(diffMin / 60);
            return `${diffHours}시간전`;
        } else {
            const diffDays = Math.floor(diffMin / 1440);
            return `${diffDays}일전`;
        }
    };

    const formatRentalDays = (rentalDays) => {
        return `${rentalDays.days}일`;
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
        <div className="list-box">
            <div className="list-details">
                <div className="list-heart-container">
                    <img
                        className="list-heart-icon"
                        src={heartClicked ? redHeart : grayHeart}
                        alt={heartClicked ? '빨간 하트' : '회색 하트'}
                        onClick={handleHeartClick}
                    />
                    <span className="list-heart-count">{heartCount}</span>
                </div>
                <div className="list-preview-name">
                    <div className="list-name-container">
                        <div className="list-name">{productData.name}</div>
                        <div className="list-date">{calculateTimeDiff(productData.createdAt, new Date())}</div>
                    </div>
                    <div className="list-hashtags">
                        {tempHashtags.slice(0, 5).map((tag, index) => (
                            <div key={index} className="list-hashtag">
                                #{tag}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="list-info">
                    <div className="list-info-first-text">희망 가격</div>
                    <div className="list-price">{`${productData.price.toLocaleString()}원`}</div>
                    <div className="list-rental-days">/ {formatRentalDays(productData.rentalDays)}</div>
                </div>
            </div>
        </div>
    );
};

export default ListPreview;
