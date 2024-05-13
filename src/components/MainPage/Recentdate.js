import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Recentdate.css";
import RecentdateElement from "./RecentdateElement";

const Recentdate = () => {
  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수 생성

  // 데이터 배열
  const recentItems = [
    { Month: "MAY", date: 4, dayinfo: "반납일", itemname: "에어팟 맥스" },
    { Month: "MAY", date: 22, dayinfo: "대여일", itemname: "로지텍 K380" },
    { Month: "JUNE", date: 17, dayinfo: "반납일", itemname: "로지텍 K380" },
  ];

  const handleButtonClick = () => {
    navigate("/trade"); // '/request' 경로로 이동
  };

  return (
    <div className="Recentdate">
      {/* recentItems 배열을 매핑하여 각각의 RecentdateElement에 props로 전달 */}
      {recentItems.map((item, index) => (
        <RecentdateElement
          key={index}
          Month={item.Month}
          date={item.date}
          dayinfo={item.dayinfo}
          itemname={item.itemname}
        />
      ))}
    </div>
  );
};

export default Recentdate;
