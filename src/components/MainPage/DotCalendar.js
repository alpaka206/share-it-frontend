import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "../../css/DotCalendar.css";

function DotCalendar() {
  const [value, onChange] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState(null);

  // 날짜와 상품 정보를 매핑한 Map
  const checkDayProducts = new Map([
    [
      "2024-03-01",
      [
        {
          id: 1,
          name: "상품명1",
          imageUrl: "상품1 이미지 URL",
          rentalDate: "2024-03-01",
          type: "start", // 시작일
        },
        {
          id: 2,
          name: "상품명2",
          imageUrl: "상품2 이미지 URL",
          rentalDate: "2024-03-01",
          type: "end", // 종료일
        },
        {
          id: 8,
          name: "상품명5",
          imageUrl: "상품5 이미지 URL",
          rentalDate: "2024-03-01",
          type: "start", // 시작일
        },
      ],
    ],
    [
      "2024-03-06",
      [
        {
          id: 3,
          name: "상품명1",
          imageUrl: "상품4 이미지 URL",
          rentalDate: "2024-03-06",
          type: "start", // 시작일
        },
      ],
    ],
    [
      "2024-03-09",
      [
        {
          id: 4,
          name: "상품명2",
          imageUrl: "상품5 이미지 URL",
          rentalDate: "2024-03-09",
          type: "end", // 종료일
        },
        {
          id: 5,
          name: "상품명3",
          imageUrl: "상품6 이미지 URL",
          rentalDate: "2024-03-09",
          type: "start", // 시작일
        },
      ],
    ],
    // 다른 상품 정보 추가
  ]);

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
          return checkDayProducts.has(dateString) ? "checkDayTile" : "";
        }}
        tileContent={({ date }) => {
          const dateString = moment(date).format("YYYY-MM-DD");
          const products = checkDayProducts.get(dateString);
          if (products && products.length > 0) {
            return products.map((product, index) => (
              <div
                key={`${dateString}-${product.id}`}
                className="Checkdayhover"
                onMouseEnter={() => setHoveredDate(dateString)}
                onMouseLeave={() => setHoveredDate(null)}
              >
                <div
                  className={`Checkdayhover dot ${product.type}`}
                  style={{
                    backgroundColor:
                      product.type === "start" ? "#13F287" : "#FF5733",
                  }}
                />
              </div>
            ));
          }
          return null;
        }}
      />

      {hoveredDate && (
        <div className="hover-content">
          {checkDayProducts.get(hoveredDate).map((product, index) => (
            <div key={`${hoveredDate}-${product.id}`}>
              <div>{product.name}</div>
              <div>{product.rentalDate}</div>
              <img src={product.imageUrl} alt={product.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DotCalendar;
