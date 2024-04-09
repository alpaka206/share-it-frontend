import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../css/SearchContainer.css";
import Autoword from "./Autoword";
import SearchHistory from "./SearchHistory";

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchType, setSearchType] = useState("need");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const searchContainerRef = useRef(null);

  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSearchActive(true);
  };

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() !== "") {
        updateRecentSearches(searchTerm);
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  const updateRecentSearches = (searchTerm) => {
    const updatedSearches = [searchTerm, ...recentSearches];
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleDelete = (index) => {
    const updatedSearches = recentSearches.filter((_, i) => i !== index);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleSearchBoxClick = () => {
    setIsSearchActive(true);
  };

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setIsSearchActive(false);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRecentSearch = (search) => {
    setSearchTerm(search);
    setIsSearchActive(true);
    // Additional code to trigger search with the selected term if needed
  };

  return (
    <div ref={searchContainerRef} className="search-container">
      <div className="search-toggle" onClick={toggleDropdown}>
        <span>{searchType === "need" ? "▼ 필요해요 |" : "▼ 빌려주기 |"}</span>
        {isDropdownOpen && (
          <div className="dropdown-options">
            <button onClick={() => setSearchType("need")}>필요해요</button>
            <button onClick={() => setSearchType("lend")}>빌려주기</button>
          </div>
        )}
      </div>
      <input
        type="text"
        placeholder={`검색어를 입력하세요`}
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        onClick={handleSearchBoxClick}
      />
      <img
        src={process.env.PUBLIC_URL + `/assets/Search.svg`}
        alt="search"
        className="search-icon"
        onClick={handleSearch}
      />
      <Autoword keyword={searchTerm} onSearch={handleRecentSearch} />
      {isSearchActive && (
        <SearchHistory
          searches={recentSearches}
          onDelete={handleDelete}
          onSearch={handleRecentSearch}
        />
      )}
    </div>
  );
}

export default SearchContainer;
