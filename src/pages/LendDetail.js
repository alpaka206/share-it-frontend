import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topnav from '../components/Topnav';
import '../css/LendDetail.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function LendDetail() {
    const [photos, setPhotos] = useState([
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/480',
    ]);

    const sliderRef = useRef();
    const navigate = useNavigate();
    const [heartCount, setHeartCount] = useState(15);
    const [isLiked, setIsLiked] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center' }}>
                <div style={{ display: 'inline-block' }}>
                    <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}> {dots} </ul>
                </div>
            </div>
        ),
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const handleChatButtonClick = () => {
        navigate('/chat'); // 채팅하기 버튼 클릭 시 /chat 페이지로 이동
    };

    // 임시 데이터
    const hashtags = ['애플', '매직키보드', '전자기기', '키보드', '무선'];
    const name = '애플 매직 키보드';
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
        const slicedHashtags = hashtags.slice(0, MAX_HASHTAGS_PER_LINE * 2); // 최대 2줄로 표시
        return (
            <div className="hashtag-container">
                {slicedHashtags.map((tag, index) => (
                    <div key={index} className="hashtag">
                        #{tag}
                    </div>
                ))}
            </div>
        );
    };

    const grayHeart = process.env.PUBLIC_URL + '/assets/gray_heart.svg';
    const redHeart = process.env.PUBLIC_URL + '/assets/heart.svg';

    return (
        <div className="container">
            <Topnav />
            <div className="lend-detail-first-container">
                <div className="slider-container">
                    <Slider ref={sliderRef} {...settings}>
                        {photos.map((photo, index) => (
                            <div key={index}>
                                <img src={photo} alt={`Photo ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                    <div className="arrow-container">
                        <img
                            src="/assets/LendDetail_previous.svg"
                            alt="Previous"
                            className="prev-arrow"
                            onClick={goToPrevSlide}
                        />
                        <img
                            src="/assets/LendDetail_next.svg"
                            alt="Next"
                            className="next-arrow"
                            onClick={goToNextSlide}
                        />
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

            <div className="lend-detail-description-container">
                <div className="lend-detail-description-title">제품 상세</div>
                <div className="lend-detail-description-text">
                    {productDescription.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default LendDetail;
