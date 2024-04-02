// SearchContainer.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/SearchContainer.css";
import Autoword from "./Autoword";
import SearchHistory from "./SearchHistory"; // SearchHistory 컴포넌트 추가

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 최근 검색어 불러오기
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() !== "") {
        const response = await axios.get("https://example.com/api/search");
        console.log("검색어:", searchTerm);
        // 검색 결과 처리 로직
        updateRecentSearches(searchTerm); // 최근 검색어 업데이트
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const updateRecentSearches = (searchTerm) => {
    // 최근 검색어 업데이트 및 로컬 스토리지에 저장
    const updatedSearches = [searchTerm, ...recentSearches.slice(0, 4)];
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <img
        src={process.env.PUBLIC_URL + `/assets/Search.svg`}
        alt="search"
        className="search-icon"
        onClick={handleSearch}
      />
      <Autoword keyword={searchTerm} />
      <SearchHistory searches={recentSearches} /> {/* 최근 검색어 표시 */}
    </div>
  );
}

export default SearchContainer;
