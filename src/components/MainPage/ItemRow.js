import React from "react";
import ProductCard from "./ItemPreview";
import "../../css/ItemRow.css";
const ItemRow = () => {
  const products = [
    {
      image: "./assets/monitor.svg",
      name: " 모니터",
      price: 10000,
      rentalDays: 2,
      heartCount: 5,
      createdAt: new Date("2024-05-12T18:50:00"),
    },
    {
      image: "./assets/speaker.svg",
      name: "스피커",
      price: 20000,
      rentalDays: 3,
      heartCount: 10,
      createdAt: new Date("2024-05-12T18:50:00"),
    },
    {
      image: "./assets/game.svg",
      name: "게임",
      price: 30000,
      rentalDays: 4,
      heartCount: 15,
      createdAt: new Date("2024-05-09T18:50:00"),
    },
  ];

  return (
    <div className="item-row-container">
      {products.map((product, index) => (
        <div className="product-card-wrapper" key={index}>
          <ProductCard productData={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemRow;
