// SearchContainer.js
import React, { useState } from "react";
import axios from "axios";
import "../css/SearchContainer.css";
import Autoword from "./Autoword";

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() !== "") {
        const response = await axios.get("https://example.com/api/search");
        console.log("검색어:", searchTerm);
        // 검색 결과 처리 로직
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
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
        src="../assets/Search.svg"
        alt="search"
        className="search-icon"
        onClick={handleSearch}
      />
      <Autoword keyword={searchTerm} />
    </div>
  );
}

export default SearchContainer;
