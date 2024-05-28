import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Topnav from '../components/Topnav';
import Footer from '../components/Footer';
import '../css/NeedDetail.css';
import { Rating } from '@mui/material';

const grayHeart = process.env.PUBLIC_URL + '/assets/gray_heart.svg';
const redHeart = process.env.PUBLIC_URL + '/assets/heart.svg';

const tempData = {
    id: 1,
    title: 'Need_Title 32px Max Length,, about 30?',
    content: `Apple 매직 키보드 입니다.
윈도우 사용자들도 쓸수 있는데 아마 불편할 꺼에요.
그래도 아이패드한테는 가장 잘 어울리는 키보드 같습니다.
제가 한동안 여행을 가게 되서 잠깐 빌려드리면 좋을 것 같아 이렇게 올려봅니다.
왼쪽에 살짝 흠집 있어요.
편하게 연락 주세요!


이 페이지는 상세 설명에 대한 부분이
아무리 길어도 상관이 없음`,
    hashTag: '최대일곱글자임 최대일곱글자임 최대일곱글자임 최대일곱글자임 최대일곱글자임',
    cost: 4000,
    perDate: 1,
    imageKeys: [
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/360',
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/360',
        'https://via.placeholder.com/480',
    ],
    author: 'username',
    heartCount: 8,
};

const NeedDetail = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const [heartClicked, setHeartClicked] = useState(false);
    const [heartCount, setHeartCount] = useState(tempData.heartCount);
    const imagesContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/lendDetail');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
                setData(tempData);
            }
        };
        fetchData();
    }, []);

    const ReviewListStarStyles = {
        color: 'black',
        fontSize: '32px',
    };

    const handleChatClick = () => {
        navigate('/chat');
    };

    const renderContentWithLineBreaks = (content) => {
        return content.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
        ));
    };

    const renderHashTags = (hashTag) => {
        const hashTags = hashTag.split(' ');
        return hashTags.map((tag, index) => (
            <span key={index} className="Need-deatil-hashtag">
                #{tag}
            </span>
        ));
    };

    const handleHeartClick = () => {
        if (heartClicked) {
            setHeartCount(heartCount - 1);
        } else {
            setHeartCount(heartCount + 1);
        }
        setHeartClicked(!heartClicked);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - imagesContainerRef.current.offsetLeft);
        setScrollLeft(imagesContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - imagesContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        imagesContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    if (!data) return null;

    return (
        <div className="container">
            <Topnav />
            <div className="Need-detail">
                <div className="Need-detail-need">필요해요</div>
                <div className="Need-detail-title">{data.title}</div>
                <hr />
                <div className="Need-detail-content-container">
                    <div className="Need-detail-content">{renderContentWithLineBreaks(data.content)}</div>
                    <div>
                        <div className="Need-detail-user">
                            <div className="Need-detail-user-info-image-container">
                                <img src="/assets/mypage.svg" alt="mypage" className="Need-detail-user-info-image" />
                            </div>
                            <div>{data.author}</div>
                            <div className="user-info-star-rating">
                                <Rating
                                    value={4.5}
                                    precision={0.5}
                                    readOnly
                                    sx={{ '& .MuiSvgIcon-root': ReviewListStarStyles }}
                                />
                            </div>
                            <button className="Need-detail-chat-button" onClick={handleChatClick}>
                                채팅하기
                            </button>
                        </div>
                        <div className="Need-detail-heart-container">
                            <img
                                className="Need-detail-heart-icon"
                                src={heartClicked ? redHeart : grayHeart}
                                alt={heartClicked ? '빨간 하트' : '회색 하트'}
                                onClick={handleHeartClick}
                            />
                            <div className="Need-detail-heart-count">{heartCount}</div>
                        </div>
                    </div>
                </div>
                <div className="Need-detail-hashtags-container">{renderHashTags(data.hashTag)}</div>
                <div className="Need-detail-image-title">참고 사진</div>
                <div
                    className="Need-detail-images-container"
                    ref={imagesContainerRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {data.imageKeys.map((key, index) => (
                        <div key={index} className="Need-detail-image-wrapper">
                            <img src={key} alt={`Lend Detail ${index}`} className="Need-detail-image" />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NeedDetail;
