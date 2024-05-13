import React, { useState, useRef } from 'react';
import Topnav from '../components/Topnav';
import '../css/LendDetail.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import LendListRow from '../components/LendListRow';
import UserInfoPreview from '../components/UserInfoPreview';

function LendDetail() {
    const [photos, setPhotos] = useState([
        '/assets/monitor.svg',
        'https://via.placeholder.com/360',
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/360',
        'https://via.placeholder.com/480',
    ]);

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const navigate = useNavigate();
    const [heartCount, setHeartCount] = useState(15);
    const [isLiked, setIsLiked] = useState(false);

    const handleChatButtonClick = () => {
        navigate('/chat');
    };

    // 임시 데이터
    const hashtags = ['애플', '모니터', '전자기기', '애플모니터', 'apple'];
    const name = '애플 모니터';
    const price = '5000';
    const rentalDays = 4;
    const updatedAt = new Date('2024-05-06T17:00:00');
    const isAvailable = true;
    const productDescription = `Apple 매직 키보드 입니다.
    윈도우 사용자들도 쓸수 있는데 아마 불편할 꺼에요.
그래도 아이패드한테는 가장 잘 어울리는 키보드 같습니다.
제가 한동안 여행을 가게 되서 잠깐 빌려드리면 좋을 것 같아 이렇게 올려봅니다.
왼쪽에 살짝 흠집 있어요.
편하게 연락 주세요!`;
    const userData = {
        username: 'Username',
        userschool: 'Catholic University of Korea',
        star: 4.5,
    };

    const handleLikeButtonClick = () => {
        if (isLiked) {
            setHeartCount(heartCount - 1);
        } else {
            setHeartCount(heartCount + 1);
        }
        setIsLiked(!isLiked);
    };
    const formatUpdatedAt = (updatedAt) => {
        const elapsedTime = Date.now() - updatedAt.getTime();
        const minutes = Math.floor(elapsedTime / (1000 * 60));
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days}일전`;
        } else if (hours > 0) {
            return `${hours}시간전`;
        } else {
            return `${minutes}분전`;
        }
    };

    const numberWithCommas = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const renderHashtags = () => {
        const MAX_HASHTAGS_PER_LINE = 3;
        const firstRowHashtags = [];
        const secondRowHashtags = [];

        hashtags.forEach((tag, index) => {
            if (index < MAX_HASHTAGS_PER_LINE) {
                firstRowHashtags.push(tag);
            } else {
                secondRowHashtags.push(tag);
            }
        });

        return (
            <div>
                <div className="hashtag-container1">
                    {secondRowHashtags.map((tag, index) => (
                        <div key={index} className="hashtag">
                            #{tag}
                        </div>
                    ))}
                </div>
                <div className="hashtag-container2">
                    {firstRowHashtags.map((tag, index) => (
                        <div key={index} className="hashtag">
                            #{tag}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const grayHeart = process.env.PUBLIC_URL + '/assets/gray_heart.svg';
    const redHeart = process.env.PUBLIC_URL + '/assets/heart.svg';

    const goToPrevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };

    const goToNextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="container">
            <Topnav />
            <div className="lend-detail-first-container">
                <div className="slider-container">
                    <img
                        src={photos[currentPhotoIndex]}
                        alt={`Photo ${currentPhotoIndex + 1}`}
                        className="slider-container-img"
                    />
                    <div className="arrow-container">
                        <img
                            src="/assets/LendDetail_previous.svg"
                            alt="Previous"
                            className="prev-arrow"
                            onClick={goToPrevPhoto}
                        />
                        <img
                            src="/assets/LendDetail_next.svg"
                            alt="Next"
                            className="next-arrow"
                            onClick={goToNextPhoto}
                        />
                        <div className="photo-indicator">
                            {photos.map((photo, index) => (
                                <div
                                    key={index}
                                    className={`photo-dot ${index === currentPhotoIndex ? 'active' : ''}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lend-detail-product-info">
                    <div className="lend-deatil-hashtag-container">{renderHashtags()}</div>

                    <div className="lend-detail-name">{name}</div>
                    <div className="lend-detail-price">
                        {numberWithCommas(price)}원<span className="lend-detail-days"> / {rentalDays}일</span>
                    </div>

                    <div className="lend-detail-updated">
                        {formatUpdatedAt(updatedAt)} 관심{heartCount}
                    </div>
                    <div className="lend-detail-isAvailable">{isAvailable ? <p>대여가능</p> : <p>대여불가</p>}</div>
                    <div className="lend-detail-last-container">
                        <img
                            src={isLiked ? redHeart : grayHeart}
                            alt={isLiked ? '찜 해제' : '찜하기'}
                            className="lend-detail-like"
                            onClick={handleLikeButtonClick}
                            style={{ width: '48px', height: '48px' }}
                        />
                        <button className="lend-detail-chat" onClick={handleChatButtonClick}>
                            채팅하기
                        </button>
                    </div>
                </div>
            </div>
            <div className="lend-detail-description-big-container">
                <div className="lend-detail-description-container">
                    <div className="lend-detail-description-title">제품 상세</div>
                    <div className="lend-detail-description-text">
                        {productDescription.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <UserInfoPreview userData={userData} />
            </div>
            <div className="lend-detail-listrow-title">최근 등록된 상품</div>
            <LendListRow />

            <Footer />
        </div>
    );
}

export default LendDetail;
