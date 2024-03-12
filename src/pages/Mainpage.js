import React from "react";
import "./Mainpage.css";
import Topnav from "../components/Topnav";
import YellowBox from "../components/YellowBox";
import GreenBox from "../components/GreenBox";
import Calendar from "../components/Calendar";
import PurpleBox from "../components/PurpleBox";
import Footer from "../components/Footer";

function Mainpage() {
  return (
    <div className="container">
      <Topnav></Topnav>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <YellowBox />
        <Calendar />
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <GreenBox style={{ flex: 1 }} />
        <PurpleBox style={{ flex: 1 }} />
      </div>
      <Footer />
    </div>
  );
}

export default Mainpage;
