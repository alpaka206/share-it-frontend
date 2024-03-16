import React from "react";
import "./Mainpage.css";
import Topnav from "../components/Topnav";
import YellowBox from "../components/MainPage/YellowBox";
import GreenBox from "../components/MainPage/GreenBox";
import DotCalendar from "../components/MainPage/DotCalendar";
import PurpleBox from "../components/MainPage/PurpleBox";
import Footer from "../components/Footer";
import ItemRow from "../components/MainPage/ItemRow";

function Mainpage() {
  return (
    <div className="container">
      <Topnav></Topnav>
      <div className="semi_container">
        <YellowBox className="yellow_box" />
        <DotCalendar className="DotCalendar" />
      </div>
      <div className="semi_container">
        <GreenBox className="green_box" />
        <PurpleBox className="purple_box" />
      </div>

      <div>주변엔 이런 물건을 빌릴 수 있어요</div>
      <div>
        <ItemRow></ItemRow>
      </div>
      <Footer />
    </div>
  );
}

export default Mainpage;
