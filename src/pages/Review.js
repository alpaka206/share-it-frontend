import React, { useState } from 'react';
import Topnav from '../components/Topnav';
import Footer from '../components/Footer';
import ReviewList from '../components/ReviewList';

function Review() {
    return (
        <div className="container">
            <Topnav />
            <div>
                <ReviewList></ReviewList>
            </div>
            <Footer />
        </div>
    );
}
export default Review;
