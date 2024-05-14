import React, { useRef, useEffect, useState } from 'react';
import '../css/SearchHistory.css';

const useDraggable = () => {
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);

    const handleMouseDown = (event) => {
        event.preventDefault(); // 기본 동작 막기
        setIsDragging(true);
        setStartX(event.pageX - scrollLeft);
    };

    const handleMouseMove = (event) => {
        event.preventDefault(); // 기본 동작 막기
        if (!isDragging) return;
        const x = event.pageX - scrollLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed here
        event.target.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return {
        onMouseDown: handleMouseDown,
        onMouseMove: handleMouseMove,
        onMouseUp: handleMouseUp,
        onMouseLeave: handleMouseLeave,
    };
};

const SearchHistory = ({ searches, onDelete, onSearch, isActive, setIsActive }) => {
    const scrollerRef = useRef(null);
    const { onMouseDown, onMouseMove, onMouseUp, onMouseLeave } = useDraggable();

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (scroller) {
            scroller.addEventListener('mousedown', onMouseDown);
            scroller.addEventListener('mousemove', onMouseMove);
            scroller.addEventListener('mouseup', onMouseUp);
            scroller.addEventListener('mouseleave', onMouseLeave);
            return () => {
                scroller.removeEventListener('mousedown', onMouseDown);
                scroller.removeEventListener('mousemove', onMouseMove);
                scroller.removeEventListener('mouseup', onMouseUp);
                scroller.removeEventListener('mouseleave', onMouseLeave);
            };
        }
    }, [onMouseDown, onMouseMove, onMouseUp, onMouseLeave]);

    const handleButtonClick = (state) => {
        setIsActive(state);
    };

    return (
        <div className="search-history">
            <p className="search-history-text">최근 검색어</p>
            <hr />
            <div className="search-history-list" ref={scrollerRef}>
                {searches.map((search, index) => (
                    <div
                        key={index}
                        className="search-history-word"
                        onClick={(event) => {
                            event.preventDefault();
                            onSearch(search);
                        }}
                    >
                        #{search}
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                onDelete(index);
                            }}
                        >
                            <img src="/assets/form_hashtag_delete.svg" alt="delete" width={10} height={10} />
                        </button>
                    </div>
                ))}
            </div>
            <p className="search-history-text">검색 옵션</p>
            <hr />
            <div className="search-history-list">
                <button
                    className={`lend-button ${isActive ? 'active' : 'inactive'}`}
                    onClick={() => handleButtonClick(true)}
                >
                    빌려주기
                </button>
                <button
                    className={`lend-button ${isActive ? 'inactive' : 'active'}`}
                    onClick={() => handleButtonClick(false)}
                >
                    필요해요
                </button>
            </div>
        </div>
    );
};

export default SearchHistory;
