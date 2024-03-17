// Autoword.js
import React, { useState, useEffect } from "react";
import "../css/Autoword.css";

const Autoword = ({ keyword }) => {
  const [keyItems, setKeyItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`
        );
        const data = await res.json();
        const filteredData = data
          .filter((list) => list.city.includes(keyword))
          .slice(0, 10);
        setKeyItems(filteredData);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    if (keyword.trim() !== "") {
      fetchData();
    } else {
      setKeyItems([]); // 검색어가 비어있을 경우 목록 초기화
    }
  }, [keyword]);

  return (
    <div className="auto-complete-container">
      {keyItems.length > 0 && (
        <div className="auto-complete">
          {keyItems.map((item) => (
            <div key={item.city} className="auto-complete-item">
              {item.city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autoword;
