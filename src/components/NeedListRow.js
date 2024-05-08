import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import ListPreview from './ListPreview.js';
import '../css/NeedListRow.css';
import { NeedDataState } from '../Atoms.js';

const ITEMS_PER_PAGE = 3; // 한 번에 보여질 항목 수

const NeedListRow = () => {
    const [page, setPage] = useState(1);
    const [testData, setTestData] = useRecoilState(NeedDataState); // Recoil 상태 가져오기

    const displayedProducts = testData.slice(0, ITEMS_PER_PAGE * page);

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("https://example.com/data");
    //     const newData = await response.json();
    //     setTestData([...testData, ...newData]); // 외부 데이터를 현재 상태에 추가
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    const loadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        // fetchData(); // 더보기를 클릭했을 때 데이터를 가져옴
    };

    return (
        <div>
            <div className="list-row-container">
                {displayedProducts.map((product, index) => (
                    <div className="list-preivew-wrapper" key={index}>
                        <ListPreview productData={product} />
                    </div>
                ))}
            </div>
            {displayedProducts.length < testData.length && <button onClick={loadMore}>더 보기</button>}
        </div>
    );
};

export default NeedListRow;
