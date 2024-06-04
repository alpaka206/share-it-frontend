import React, { useState, useEffect } from 'react';
import '../css/ListPreview.css';

const grayHeart = process.env.PUBLIC_URL + '/assets/gray_heart.svg';
const redHeart = process.env.PUBLIC_URL + '/assets/heart.svg';

const ListPreview = ({ productData }) => {
    const [heartClicked, setHeartClicked] = useState(false);
    const [heartCount, setHeartCount] = useState(0);

    useEffect(() => {
        setHeartCount(productData.likeCount);
    }, [productData.likeCount]);

    const handleHeartClick = () => {
        setHeartClicked(!heartClicked);
        setHeartCount((prevCount) => (heartClicked ? prevCount - 1 : prevCount + 1));
    };

    const getTimeDifference = (date) => {
        const now = new Date();
        const updatedDate = new Date(date);
        const diffInMs = now - updatedDate;

        const minutes = Math.floor(diffInMs / 60000);
        const hours = Math.floor(diffInMs / 3600000);
        const days = Math.floor(diffInMs / 86400000);

        if (minutes < 60) {
            return `${minutes}분 전`;
        } else if (hours < 24) {
            return `${hours}시간 전`;
        } else {
            return `${days}일 전`;
        }
    };

    const formattedDate = getTimeDifference(productData.updatedAt);
    const hashtags = productData.hashTag ? productData.hashTag.split('#').filter((tag) => tag) : []; // Split hashtags into an array

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
                    <span className="list-heart-count">{heartCount}</span> {/* Display heartCount */}
                </div>

                <div className="list-preview-name">
                    <div className="list-name-container">
                        <div className="list-name">{productData.title}</div>
                        <div className="list-date">{formattedDate}</div> {/* Render the formatted date */}
                    </div>
                    <div className="list-hashtags">
                        {hashtags.slice(0, 5).map((tag, index) => (
                            <div key={index} className="list-hashtag">
                                #{tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="list-info">
                    <div className="list-info-first-text">희망 가격</div>
                    <div className="list-price">{productData.cost}원</div>
                    <div className="list-rental-days">/ {productData.perDate}일</div>
                </div>
            </div>
        </div>
    );
};

export default ListPreview;
