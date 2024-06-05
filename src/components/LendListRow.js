import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import ProductCard from "./MainPage/ItemPreview";
import "../css/LendListRow.css";
import { LendDataState } from "../Atoms.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ITEMS_PER_PAGE = 3; // 한 번에 보여질 항목 수

const LendListRow = ({ lendData, setLendData, cursor, keyword }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/posts`, {
        params: {
          limit: 3,
          postType: "LENT",
          cursor: cursor,
          keyword: keyword,
        },
      });
      if (response.status === 200) {
        // const newData = response.data.data.postInfos;
        // const combinedData = [...lendData, ...newData]; // 새로운 데이터를 뒤에 추가
        // const uniqueData = combinedData.filter((item, index, array) => {
        //   return array.findIndex((elem) => elem.id === item.id) === index;
        // });
        // setLendData(uniqueData);
        setLendData((prev) => [...prev, ...response.data.data.postInfos]);
        setEnd(response.data.data.hasNext);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData();
  };
  const handleClickProductCard = async (id) => {
    navigate(`/lend_detail?q=${encodeURIComponent(id)}`);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="item-row-container">
        {lendData &&
          lendData.slice(0, ITEMS_PER_PAGE * page).map((product, index) => (
            <div
              className="product-card-wrapper LendList-product-card"
              key={index}
              onClick={() => handleClickProductCard(product.id)}
            >
              <ProductCard productData={product} />
            </div>
          ))}
      </div>
      {/* {lendData.hasNext && ( */}
      {lendData && end && (
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
