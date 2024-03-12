import React from 'react';
import ProductCard from './ItemPreview';
import '../css/ItemRow.css';
const ItemRow = () => {
    const products = [
        {
            image: './assets/example.png',
            name: '상품1',
            location: '위치1',
            price: 10000,
            rentalDays: { nights: 1, days: 2 },
            heartCount: 5,
            createdAt: new Date('2024-03-12T18:50:00'),
        },
        {
            image: '',
            name: '상품2',
            location: '위치2',
            price: 20000,
            rentalDays: { nights: 2, days: 3 },
            heartCount: 10,
            createdAt: new Date('2024-03-11T18:50:00'),
        },
        {
            image: '',
            name: '상품3',
            location: '위치3',
            price: 30000,
            rentalDays: { nights: 3, days: 4 },
            heartCount: 15,
            createdAt: new Date('2024-03-10T18:50:00'),
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
