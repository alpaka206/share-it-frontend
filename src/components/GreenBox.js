import React from 'react';
import '../css/GreenBox.css';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';

const GreenBox = () => {
    return (
        <div className="green-box">
            <span className="level">Lv. 5</span>
            <span className="description">거래 온도가 매우 높아요.</span>
            <span className="sub-description">따뜻한 giver시네요!</span>
            <div className="circular-progress-bar-container">
                <CircularProgressBar
                    percent={80}
                    colorCircle="white"
                    colorSlice="black"
                    stroke={10}
                    strokeBottom={10}
                    round={false}
                    cut={60}
                    rotation={200}
                    fontSize="0"
                ></CircularProgressBar>
            </div>
        </div>
    );
};

export default GreenBox;
