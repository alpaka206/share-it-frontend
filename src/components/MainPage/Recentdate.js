import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Recentdate.css";
import RecentdateElement from "./RecentdateElement";

const Recentdate = () => {
  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수 생성

  const handleButtonClick = () => {
    navigate("/trade"); // '/request' 경로로 이동
  };

  return (
    <div className="Recentdate">
      <RecentdateElement />
    </div>
  );
};

export default Recentdate;
