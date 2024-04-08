// Autoword.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import wordData from "../data/wordData";
import "../css/Autoword.css";

const Autoword = ({ keyword }) => {
  const [keyItems, setKeyItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (keyword.trim() !== "") {
        const filteredData = wordData
          .filter((item) => item.includes(keyword))
          .slice(0, 10);
        setKeyItems(filteredData);
      } else {
        setKeyItems([]); // 검색어가 비어있을 경우 목록 초기화
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div className="auto-complete-container">
      {keyItems.length > 0 && (
        <div className="auto-complete">
          {keyItems.map((item, index) => (
            <div key={index} className="auto-complete-item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autoword;
