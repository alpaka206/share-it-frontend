import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import ListPreview from './ListPreview.js';
import '../css/NeedListRow.css';
import { NeedDataState } from '../Atoms.js';
import { useNavigate } from 'react-router-dom'; // Step 1

const ITEMS_PER_PAGE = 3;

const NeedListRow = () => {
    const [page, setPage] = useState(1);
    const [testData, setTestData] = useRecoilState(NeedDataState);
    const [hasNext, setHasNext] = useState(false);
    const navigate = useNavigate(); // Step 2

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const limit = ITEMS_PER_PAGE;
            const response = await fetch(`http://localhost:8080/api/posts?limit=${limit}&postType=NEED`);
            const data = await response.json();
            setTestData(data.data.postInfos);
            setHasNext(data.data.hasNext);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const loadMore = async () => {
        const limit = ITEMS_PER_PAGE;
        const cursor = testData[testData.length - 1].updatedAt;
        try {
            const response = await fetch(
                `http://localhost:8080/api/posts?limit=${limit}&postType=NEED&cursor=${cursor}`
            );
            const newData = await response.json();
            setTestData([...testData, ...newData.data.postInfos]);
            setHasNext(newData.data.hasNext);
            setPage(page + 1);
        } catch (error) {
            console.error('Error fetching more data:', error);
        }
    };

    // Step 3: Function to handle click event and navigate
    const handleClickProductCard = async (id) => {
        navigate(`/need_detail?q=${encodeURIComponent(id)}`);
    };

    return (
        <div>
            <div className="list-row-container">
                {testData.map((product, index) => (
                    <div
                        className="list-preivew-wrapper"
                        key={index}
                        onClick={() => handleClickProductCard(product.id)}
                    >
                        {' '}
                        <ListPreview productData={product} />
                    </div>
                ))}
            </div>
            {hasNext && (
                <button className="need-load-more-button" onClick={loadMore}>
                    상품 더보기 <img src={process.env.PUBLIC_URL + `assets/loadmore.svg`} alt="상품 더보기" />
                </button>
            )}
        </div>
    );
};

export default NeedListRow;
