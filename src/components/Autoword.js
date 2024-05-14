import React, { useState, useEffect } from 'react';
import axios from 'axios';
import wordData from '../data/wordData';
import '../css/Autoword.css';

const Autoword = ({ keyword, onSearch, className }) => {
    const [keyItems, setKeyItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (keyword.trim() !== '') {
                const filteredData = wordData.filter((item) => item.includes(keyword)).slice(0, 10);
                setKeyItems(filteredData);
            } else {
                setKeyItems([]);
            }
        };

        fetchData();
    }, [keyword]);

    const handleWordClick = (word) => {
        onSearch(word);
    };

    return (
        <div className="auto-complete-container">
            {keyItems.length > 0 && (
                <div className={className}>
                    {keyItems.map((item, index) => (
                        <div key={index} className="auto-complete-item" onClick={() => handleWordClick(item)}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Autoword;
