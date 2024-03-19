import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "../../css/DotCalendar.css";

function DotCalendar() {
  const [value, onChange] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState(null); // 호버된 날짜 상태 추가

  const checkDayProducts = {
    "2024-03-09": {
      name: "상품명1",
      imageUrl: "상품1 이미지 URL",
      rentalDate: "2024-03-09",
    },
    "2024-03-02": {
      name: "상품명2",
      imageUrl: "상품2 이미지 URL",
      rentalDate: "2024-03-02",
    },
    // 다른 날짜와 상품 정보 추가
  };

  const dateColors = {
    "2024-03-09": "#13F287",
    "2024-03-02": "#A191DE",
    // 다른 날짜와 색상들 추가
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="US"
        minDetail="month"
        maxDetail="month"
        showNeighboringMonth={false}
        formatDay={(locale, date) => moment(date).format("D")}
        formatYear={(locale, date) => moment(date).format("YYYY")}
        formatMonthYear={(locale, date) => moment(date).format("M월")}
        next2Label={null}
        prev2Label={null}
        tileClassName={({ date }) => {
          const dateString = moment(date).format("YYYY-MM-DD");
          const isCheckDay = dateString in checkDayProducts;
          return isCheckDay ? "checkDayTile" : "";
        }}
        onMouseOver={({ date }) => {
          const dateString = moment(date).format("YYYY-MM-DD");
          setHoveredDate(dateString);
        }}
        onMouseOut={() => {
          setHoveredDate(null);
        }}
        tileContent={({ date }) => {
          const dateString = moment(date).format("YYYY-MM-DD");
          const dotColor = dateColors[dateString];
          const isCheckDay = dateString in checkDayProducts;
          return isCheckDay ? (
            <div
              className="Checkdayhover"
              onMouseEnter={() => setHoveredDate(dateString)} // 호버 이벤트 핸들러 추가
              onMouseLeave={() => setHoveredDate(null)} // 호버 떠남 이벤트 핸들러 추가
            >
              <div className="dot" style={{ backgroundColor: dotColor }} />
            </div>
          ) : null;
        }}
      />
      {/* 호버된 날짜가 존재하고 해당 날짜의 상품 정보가 있을 경우에만 안내 메시지 표시 */}
      {hoveredDate && checkDayProducts[hoveredDate] && (
        <div className="hover-content">
          <div>{checkDayProducts[hoveredDate].name}</div>
          <div>{checkDayProducts[hoveredDate].rentalDate}</div>
          <img
            src={checkDayProducts[hoveredDate].imageUrl}
            alt={checkDayProducts[hoveredDate].name}
          />
        </div>
      )}
    </div>
  );
}

export default DotCalendar;
