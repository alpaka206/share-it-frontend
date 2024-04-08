import React, { useState } from "react";
import ProductCard from "./MainPage/ItemPreview";
import "../css/ItemRow.css";
import TestData from "../data/TestData";

const ITEMS_PER_PAGE = 3; // 한 번에 보여질 항목 수

const ListRow = () => {
  const [page, setPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState(
    TestData.slice(0, ITEMS_PER_PAGE * page)
  );

  const loadMore = () => {
    const nextPage = page + 1;
    setDisplayedProducts([
      ...displayedProducts,
      ...TestData.slice(
        ITEMS_PER_PAGE * (nextPage - 1),
        ITEMS_PER_PAGE * nextPage
      ),
    ]);
    setPage(nextPage);
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
      {displayedProducts.length < TestData.length && (
        <button onClick={loadMore}>더 보기</button>
      )}
    </div>
  );
};

export default ListRow;
