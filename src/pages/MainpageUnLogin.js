import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Mainpage.css";
import Topnav from "../components/Topnav";
import WelcomeMessageBox from "../components/MainPage/WelcomeMessageBox";
import RequestItemBox from "../components/MainPage/RequestItemBox";
import PurpleBox from "../components/MainPage/PurpleBox";
import Footer from "../components/Footer";
import ItemRow from "../components/MainPage/ItemRow";
import ShareItIntro from "../components/MainPage/ShareItIntro";
import axios from "axios";
import MoreButton from "../components/MoreButton";

function Mainpage() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
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
      <Topnav isLoggedIn={false} />
      <div className="semi_container">
        <WelcomeMessageBox />
        <ShareItIntro />
      </div>
      <div className="semi_container">
        <RequestItemBox  />
        <PurpleBox />
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
