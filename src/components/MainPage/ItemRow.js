import React, { useEffect, useState } from "react";
import ProductCard from "./ItemPreview";
import "../../css/ItemRow.css";
import { useNavigate } from "react-router-dom";
const ItemRow = ({ lendData = [] }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("lend", lendData);
  }, [lendData]);
  const handleClickProductCard = async (id) => {
    // navigate(`/lend_detail?q=${encodeURIComponent(id)}`);
  };
  return (
    <div className="item-row-container">
      {lendData.slice(0, 3).map((product, index) => (
        <div
          className="product-card-wrapper"
          key={index}
          onClick={() => handleClickProductCard(product.id)}
        >
          <ProductCard productData={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemRow;
