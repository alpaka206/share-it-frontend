import React from 'react';
import { Rating } from '@mui/material';
import '../css/UserInfoPreview.css';

const ReviewListStarStyles = {
    color: 'black',
    fontSize: '32px',
};

function UserInfoPreview({ userData }) {
    return (
        <div className="user-info-card">
            <div className="user-info-header">
                <div className="user-info-image-container">
                    <img src="/assets/mypage.svg" alt="mypage" className="user-info-image" />
                </div>

                <div className="user-details">
                    <div className="user-info-username">{userData.username}</div>
                    <div className="user-info-school">{userData.userschool}</div>
                    <div className="user-info-average-rating">평균 평점</div>
                </div>
            </div>
            <div className="user-info-star-rating">
                <Rating
                    value={userData.star}
                    precision={0.5}
                    readOnly
                    sx={{ '& .MuiSvgIcon-root': ReviewListStarStyles }}
                />
            </div>
        </div>
    );
}

export default UserInfoPreview;
