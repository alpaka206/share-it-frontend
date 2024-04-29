// Autoword.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import wordData from "../data/wordData";
import "../css/Autoword.css";

const Autoword = ({ keyword, onSearch }) => {
  // onSearch 함수 추가
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

  // 클릭된 단어를 검색어로 설정하고 검색 실행
  const handleWordClick = (word) => {
    onSearch(word);
  };

  return (
    <div className="auto-complete-container">
      {keyItems.length > 0 && (
        <div className="auto-complete">
          {keyItems.map((item, index) => (
            <div
              key={index}
              className="auto-complete-item"
              onClick={() => handleWordClick(item)}
            >
              # {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Autoword;
