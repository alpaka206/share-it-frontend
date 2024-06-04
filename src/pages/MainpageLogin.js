import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/MainpageLogin.css";
import Topnav from "../components/Topnav";
import YellowBox from "../components/MainPage/YellowBox";
import DotCalendar from "../components/MainPage/DotCalendar";
import GreenBox from "../components/MainPage/GreenBox";
import PurpleBox from "../components/MainPage/PurpleBox";
import Footer from "../components/Footer";
import ItemRow from "../components/MainPage/ItemRow";
import RecentTrade from "../components/MainPage/RecentTrade";
import MypageUserInfo from "../components/MypageUserInfo";
import Recentdate from "../components/MainPage/Recentdate";
import { useRecoilValue } from "recoil";
import { NeedDataState } from "../Atoms";
import ListPreview from "../components/ListPreview";
import axios from "axios";

function Mainpage() {
  const navigate = useNavigate();
  const testData = useRecoilValue(NeedDataState);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts`, {
          params: {
            limit: 3,
            postType: "LENT",
            cursor: null,
            keyword: null,
          },
        });
        console.log(response);
        if (response.status === 200) {
          setHomeData(response.data.data.postInfos);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors if needed
      }
    };
    fetchData();
    // Call the async function immediately
  }, []);
  const handleMoreClick = () => {
    navigate("/lend");
    window.scrollTo(0, 0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container">
      <Topnav isLoggedIn={true} />
      <div className="semi_container">
        <MypageUserInfo
          className="yellow_box"
          tradingItems={2}
          reviewCount={1}
          nextReservation="D-3"
          isLoggedIn={isLoggedIn}
        />
        <Recentdate />
      </div>
      <div className="semi_container">
        <RecentTrade className="RecentTrade" />
        <PurpleBox className="purple_box" />
      </div>
      <div>
        <div className="text-wrapper">주변엔 이런 물건을 빌릴 수 있어요</div>
        <ItemRow lendData={homeData} />
        <div className="lend-more">
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
        </div>
      </div>
      <div className="MyPostProcuctList">
        <div className="MyPostProcuctList-text">내가 등록한 상품 목록</div>
        {testData.map((productData, index) => (
          <div className="list-preview-wrapper" key={index}>
            <ListPreview productData={productData} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Mainpage;
