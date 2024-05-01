import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Topnav from '../components/Topnav';
import '../css/LendDetail.css';
import Footer from '../components/Footer';

function LendDetail() {
    const [photos, setPhotos] = useState([
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/480',
        'https://via.placeholder.com/480',
    ]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        appendDots: (dots) => (
            <div style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center' }}>
                <div style={{ display: 'inline-block' }}>
                    <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>
                        {photos.map((_, index) => (
                            <li
                                key={index}
                                style={{
                                    display: 'inline-block',
                                    margin: '0 5px',
                                    cursor: 'pointer',
                                    fontSize: currentSlide === index ? '1.5em' : '1em',
                                }}
                                onClick={() => sliderRef.current.slickGoTo(index)}
                            >
                                &bull;
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ),
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="container">
            <Topnav />
            <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                    {photos.map((photo, index) => (
                        <div key={index}>
                            <img src={photo} alt={`Photo ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
                <div className="arrow-container">
                    <button className="prev-arrow" onClick={goToPrevSlide}>
                        Previous
                    </button>
                    <button className="next-arrow" onClick={goToNextSlide}>
                        Next
                    </button>
                </div>
            </div>
            <div></div>
            <Footer />
        </div>
    );
}

export default LendDetail;
