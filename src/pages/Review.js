import React, { useState } from 'react';
import Topnav from '../components/Topnav';
import Footer from '../components/Footer';
import ReviewList from '../components/ReviewList';

function Review() {
    const review = [
        {
            status: 0,
            productName: '노트북',
            price: '10,000원',
            rentaldays: 2,
            daysAgo: 1,
            star: 0,
        },
        {
            status: 1,
            productName: '후라이팬',
            price: '3,000원',
            rentaldays: 4,
            daysAgo: 3,
            star: 0,
        },
        {
            status: 2,
            productName: '가스버너',
            price: '2,000원',
            rentaldays: 1,
            daysAgo: 5,
            star: 0,
        },
        {
            status: 2,
            productName: '멀티탭',
            price: '1,000원',
            rentaldays: 5,
            daysAgo: 7,
            star: 4.5,
        },
    ];
    return (
        <div className="container">
            <Topnav />
            <div>
                {review.map((review, index) => (
                    <div key={index}>
                        <ReviewList
                            productName={review.productName}
                            status={review.status}
                            price={review.price}
                            daysAgo={review.daysAgo}
                            rentaldays={review.rentaldays}
                            star={review.star}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
export default Review;
