import React, { useState } from 'react';
import '../css/ReviewList.css';

const ReviewList = ({ status, productName, price, daysAgo }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationCompleted, setConfirmationCompleted] = useState(false);
    const handleConfirmationToggle = () => {
        setShowConfirmation(!showConfirmation);
    };

    const handleConfirmation = () => {
        if (!confirmationCompleted) {
            // 별점을 선택하지 않았을 때만 반납 확인 작업을 수행
            // 여기에 반납 확인 로직을 구현
            setConfirmationCompleted(true);
            setShowConfirmation(false);
        }
    };

    // 임시 데이터
    const temporaryData = {
        status: 2,
        productName: '임시 상품명',
        price: '100,000원',
        rentaldays: 4,
        daysAgo: 3,
    };

    const {
        status: tempStatus,
        productName: tempProductName,
        price: tempPrice,
        rentaldays: tempRentalDays,
        daysAgo: tempDaysAgo,
    } = temporaryData;

    return (
        <div className="reviewlist">
            <div className="reviewlist-container">
                <div className="reviewlist-status">
                    {tempStatus === 0 && <div className="reviewlist-status-0">예약중</div>}
                    {tempStatus === 1 && <div className="reviewlist-status-1">거래중</div>}
                    {tempStatus === 2 && <div className="reviewlist-status-2">반납완료</div>}
                </div>
                <div className="reviewlist-info-container">
                    <div className="reviewlist-info-1">
                        <div className="reviewlist-name">{tempProductName}&nbsp;&middot;&nbsp;</div>
                        <div className="reviewlist-price">{tempPrice}</div>
                        <div className="reviewlist-rentalday">/{tempRentalDays}일</div>
                    </div>

                    <div className="reviewlist-info-2">
                        <div className="reviewlist-day">{tempDaysAgo}일전</div>
                    </div>
                </div>

                {tempStatus === 2 && (
                    <div className="reviewlist-toggle-container">
                        <button
                            className="reviewlist-toggle"
                            onClick={handleConfirmationToggle}
                            disabled={confirmationCompleted}
                        >
                            <img src={process.env.PUBLIC_URL + '/assets/toggle_arrow.svg'} alt="반납 확인" />
                        </button>
                    </div>
                )}
            </div>
            {showConfirmation && (
                <div className="reviewlist-confirm-container">
                    <button className="reviewlist-confirm-button" onClick={handleConfirmation}>
                        확인
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReviewList;
