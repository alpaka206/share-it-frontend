import React from "react";

const SearchHistory = ({ searches, onDelete }) => {
  if (searches.length === 0) return null;
  return (
    <div className="search-history">
      <h2>최근 검색어</h2>

      {searches.map((search, index) => (
        <div>
          <ul>
            <li key={index}>{search}</li>
            <button onClick={() => onDelete(index)}>X</button>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SearchHistory;
