import React, { useState, useEffect } from "react";
import Topnav from "../components/Topnav";
import "../css/LendDetail.css";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import LendListRow from "../components/LendListRow";
import UserInfoPreview from "../components/UserInfoPreview";
import axios from "axios";

function LendDetail() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("q");
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const navigate = useNavigate();
  const [heartCount, setHeartCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [lendDetailData, setLendDetailData] = useState({
    id: null,
    title: null,
    content: null,
    hashTag: null,
    cost: null,
    perDate: null,
    imageKeys: [],
    editor: null,
  });
  const [lendData, setLendData] = useState([]);
  const [cursor, setCursor] = useState(null);

  const userData = {
    username: "Username",
    userschool: "Catholic University of Korea",
    star: 4.5,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8080/api/post/${keyword}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response);
        if (
          response.data.code.includes("SEC-001") ||
          response.data.code.includes("SEC-002")
        ) {
          localStorage.removeItem("token");
        } else if (response.status === 200) {
          const data = response.data.data;
          setLendDetailData(data);
          setHeartCount(data.likeCount);
          setIsLiked(data.liked);
          setPhotos(data.imageKeys);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors if needed
      }
    };
    const fetchListRow = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts`, {
          params: {
            limit: 3,
            postType: "LENT",
            cursor: null,
            keyword: "",
          },
        });
        console.log("key:", keyword);
        if (response.status === 200) {
          setLendData(response.data.data.postInfos);
          setCursor(response.data.data.cursor);
          console.log(lendData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors if needed
      }
    };

    fetchListRow();
    fetchData();
  }, [keyword]);

  const handleChatButtonClick = () => {
    navigate("/chat");
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
    const elapsedTime = Date.now() - new Date(updatedAt).getTime();
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

  const renderHashtags = () => {
    if (!lendDetailData.hashTag) return null;
    const hashtags = lendDetailData.hashTag.split(",").map((tag) => tag.trim());
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
              {tag}
            </div>
          ))}
        </div>
        <div className="hashtag-container2">
          {firstRowHashtags.map((tag, index) => (
            <div key={index} className="hashtag">
              {tag}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const grayHeart = process.env.PUBLIC_URL + "/assets/gray_heart.svg";
  const redHeart = process.env.PUBLIC_URL + "/assets/heart.svg";

  const goToPrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <Topnav />
      <div className="lend-detail-first-container">
        <div className="slider-container">
          {photos.length > 0 && (
            <>
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
                      className={`photo-dot ${
                        index === currentPhotoIndex ? "active" : ""
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="lend-detail-product-info">
          <div className="lend-deatil-hashtag-container">
            {renderHashtags()}
          </div>
          <div className="lend-detail-name">{lendDetailData.title}</div>
          <div className="lend-detail-price">
            {lendDetailData.cost}원
            <span className="lend-detail-days">
              {" "}
              / {lendDetailData.perDate}일
            </span>
          </div>
          <div className="lend-detail-updated">
            {/*{formatUpdatedAt(lendDetailData.updatedAt)}*/} 관심{heartCount}
          </div>
          <div className="lend-detail-isAvailable">
            {!lendDetailData.isAvailable ? <p>대여가능</p> : <p>대여불가</p>}
          </div>
          <div className="lend-detail-last-container">
            <img
              src={isLiked ? redHeart : grayHeart}
              alt={isLiked ? "찜 해제" : "찜하기"}
              className="lend-detail-like"
              onClick={handleLikeButtonClick}
              style={{ width: "48px", height: "48px" }}
            />
            <button
              className="lend-detail-chat"
              onClick={handleChatButtonClick}
            >
              채팅하기
            </button>
          </div>
        </div>
      </div>
      <div className="lend-detail-description-big-container">
        <div className="lend-detail-description-container">
          <div className="lend-detail-description-title">제품 상세</div>
          <div className="lend-detail-description-text">
            {lendDetailData.content?.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <UserInfoPreview userData={userData} />
      </div>
      <div className="lend-detail-listrow-title">최근 등록된 상품</div>
      <LendListRow
        lendData={lendData}
        setLendData={setLendData}
        cursor={cursor}
        keyword={keyword}
      />
      <Footer />
    </div>
  );
}

export default LendDetail;
