import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/MainpageLogin.css";
import Topnav from "../components/Topnav";
import DotCalendar from "../components/MainPage/DotCalendar";
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
import MoreButton from "../components/MoreButton";

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
          <MoreButton
            handleMoreClick={handleMoreClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            isHovered={isHovered}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mainpage;
