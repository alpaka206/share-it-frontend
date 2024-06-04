import React, { useState, useEffect, useRef } from 'react';
import Topnav from '../components/Topnav';
import '../css/NeedDetail.css';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Rating } from '@mui/material';

const grayHeart = process.env.PUBLIC_URL + '/assets/gray_heart.svg';
const redHeart = process.env.PUBLIC_URL + '/assets/heart.svg';

const NeedDetail = () => {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get('q');
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const [heartClicked, setHeartClicked] = useState(false);
    const [heartCount, setHeartCount] = useState(0);
    const imagesContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const userData = {
        username: 'Username',
        userschool: 'Catholic University of Korea',
        star: 4.5,
    };
    const ReviewListStarStyles = {
        color: 'black',
        fontSize: '32px',
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/post/${keyword}`);
                setData(response.data.data);
                setHeartCount(response.data.data.likeCount);
                setHeartClicked(response.data.data.likeCount);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle errors if needed
            }
        };
        fetchData();
    }, [keyword]);

    const handleChatClick = () => {
        navigate('/chat');
        window.scrollTo(0, 0);
    };

    const handleHeartClick = () => {
        setHeartClicked(!heartClicked);
        setHeartCount((prevCount) => (heartClicked ? prevCount - 1 : prevCount + 1));
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
        const tags = hashTag.split('#').filter((tag) => tag.trim() !== ''); // 공백 및 빈 문자열 제거
        return tags.map((tag, index) => (
            <span key={index} className="Need-deatil-hashtag">
                #{tag}
            </span>
        ));
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
        const walk = (x - startX) * 2;
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
                            <div>{userData.username}</div>
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
                            <img src={key} alt={`Need Detail ${index}`} className="Need-detail-image" />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NeedDetail;
