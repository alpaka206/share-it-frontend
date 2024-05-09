import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Unlogin.css";

const Unlogin = () => {
  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수 생성

  const handleButtonClick = () => {
    navigate("/trade"); // '/request' 경로로 이동
  };

  return <div className="Unlogin"></div>;
};

export default Unlogin;
