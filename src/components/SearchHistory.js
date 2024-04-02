// SearchHistory.js
import React from "react";

const SearchHistory = ({ searches }) => {
  return (
    <div className="search-history">
      <h2>최근 검색어</h2>
      <ul>
        {searches.map((search, index) => (
          <li key={index}>{search}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
