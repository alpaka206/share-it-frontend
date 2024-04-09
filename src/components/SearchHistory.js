// SearchHistory.js
import React from "react";
import "../css/SearchHistory.css";

const SearchHistory = ({ searches, onDelete, onSearch }) => {
  // onSearch 함수 추가
  if (searches.length === 0) return null;
  return (
    <div className="search-history">
      <h2>최근 검색어</h2>

      {searches.map((search, index) => (
        <div key={index}>
          <ul>
            <li onClick={() => onSearch(search)}>{search}</li>{" "}
            {/* 클릭된 최근 검색어로 검색 실행 */}
            <button onClick={() => onDelete(index)}>X</button>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SearchHistory;
