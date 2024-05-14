import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../css/SearchContainer.css';
import Autoword from './Autoword';
import SearchHistory from './SearchHistory';
import { useNavigate } from 'react-router-dom';

function SearchContainer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isActive, setIsActive] = useState(true);

    const searchContainerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedSearches = localStorage.getItem('recentSearches');
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
            if (searchTerm.trim() !== '') {
                updateRecentSearches(searchTerm);
                if (isActive) {
                    navigate(`/lend?q=${encodeURIComponent(searchTerm)}`);
                } else {
                    navigate(`/need?q=${encodeURIComponent(searchTerm)}`);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const updateRecentSearches = (searchTerm) => {
        const updatedSearches = [searchTerm, ...recentSearches];
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    };

    const handleDelete = (index) => {
        const updatedSearches = recentSearches.filter((_, i) => i !== index);
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    };

    const handleSearchBoxClick = () => {
        setIsSearchActive(true);
    };

    const handleClickOutside = (event) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
            setIsSearchActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleRecentSearch = (search) => {
        setSearchTerm(search);
        setIsSearchActive(true);
    };

    return (
        <div ref={searchContainerRef} className="search-container">
            <input
                type="text"
                placeholder={`검색어를 입력하세요`}
                className="search-input"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
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

            {isSearchActive && (
                <div>
                    <SearchHistory
                        searches={recentSearches}
                        onDelete={handleDelete}
                        onSearch={handleRecentSearch}
                        isActive={isActive}
                        setIsActive={setIsActive}
                    />
                    <Autoword keyword={searchTerm} onSearch={handleRecentSearch} className="search-autoword" />
                </div>
            )}
        </div>
    );
}

export default SearchContainer;
