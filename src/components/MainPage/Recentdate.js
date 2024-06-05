import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Recentdate.css";
import RecentdateElement from "./RecentdateElement";

const Recentdate = () => {
  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수 생성

  // 데이터 배열
  const recentItems = [
    { Month: "JUNE", date: 8, dayinfo: "대여일", itemname: "손전등" },
    { Month: "JUNE", date: 10, dayinfo: "반납일", itemname: "후라이팬" },
    { Month: "JUNE", date: 12, dayinfo: "반납일", itemname: "멀티탭" },
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
