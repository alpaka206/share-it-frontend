import React, { useState } from "react";
import { useRecoilState } from "recoil";
import ProductCard from "./MainPage/ItemPreview";
import "../css/LendListRow.css";
import { LendDataState } from "../Atoms.js";

const ITEMS_PER_PAGE = 3; // 한 번에 보여질 항목 수

const LendListRow = () => {
  const [page, setPage] = useState(1);
  const [testData, setTestData] = useRecoilState(LendDataState); // Recoil 상태 가져오기

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
      <div className="item-row-container">
        {displayedProducts.map((product, index) => (
          <div className="product-card-wrapper" key={index}>
            <ProductCard productData={product} />
          </div>
        ))}
      </div>
      {displayedProducts.length < testData.length && (
        <button className="load-more-button" onClick={loadMore}>
          상품 더보기{" "}
          <img
            src={process.env.PUBLIC_URL + `assets/loadmore.svg`}
            alt="상품 더보기"
          />
        </button>
      )}
    </div>
  );
};

export default LendListRow;
