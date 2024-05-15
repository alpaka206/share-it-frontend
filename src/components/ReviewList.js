import React, { useState } from "react";
import "../css/ReviewList.css";
import { Rating } from "@mui/material";
const ReviewListStarStyles = {
  color: "black",
  fontSize: "24px",
};
const ReviewStarStyles = {
  color: "black",
  fontSize: "36px",
};
const ReviewList = ({
  status,
  productName,
  price,
  daysAgo,
  rentaldays,
  star,
}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationCompleted, setConfirmationCompleted] = useState(false);
  const handleConfirmationToggle = () => {
    setShowConfirmation(!showConfirmation);
  };
  const [starRating, setStarRating] = useState(0);
  const [teststarRating, setTestStarRating] = useState(star);

  const handleConfirmation = () => {
    if (!confirmationCompleted) {
      // 별점을 선택하지 않았을 때만 반납 확인 작업을 수행
      // 여기에 반납 확인 로직을 구현
      setConfirmationCompleted(true);
      setShowConfirmation(false);
      setTestStarRating(starRating);
    }
  };

  // 임시 데이터
  // const temporaryData = {
  //   status: 2,
  //   productName: "임시 상품명",
  //   price: "100,000원",
  //   rentaldays: 4,
  //   daysAgo: 3,
  // };

  // const {
  //   status: tempStatus,
  //   productName: tempProductName,
  //   price: tempPrice,
  //   rentaldays: tempRentalDays,
  //   daysAgo: tempDaysAgo,
  // } = temporaryData;

  return (
    <div className="reviewlist">
      <div
        className={`reviewlist-container ${showConfirmation ? "clicked" : ""}`}
      >
        <div className="reviewlist-status">
          {status === 0 && <div className="reviewlist-status-0">예약중</div>}
          {status === 1 && <div className="reviewlist-status-1">거래중</div>}
          {status === 2 && <div className="reviewlist-status-2">반납완료</div>}
        </div>
        <div className="reviewlist-info-container">
          <div className="reviewlist-info-1">
            <div className="reviewlist-name">
              {productName}&nbsp;&middot;&nbsp;
            </div>
            <div className="reviewlist-price">{price}</div>
            <div className="reviewlist-rentalday">/{rentaldays}일</div>
          </div>

          <div className="reviewlist-info-2">
            <div className="reviewlist-day">{daysAgo}일전</div>
          </div>
        </div>

        {status === 2 && (
          <div className="reviewlist-toggle-container">
            <Rating
              name="read-only"
              value={teststarRating}
              precision={0.1}
              readOnly
              sx={{ "& .MuiSvgIcon-root": ReviewListStarStyles }}
            />
            <button
              className="reviewlist-toggle"
              onClick={handleConfirmationToggle}
              disabled={confirmationCompleted || star !== 0}
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/toggle_arrow.svg"}
                alt="반납 확인"
              />
            </button>
          </div>
        )}
      </div>
      {showConfirmation && star === 0 && (
        <div className="reviewlist-confirm-container">
          <div className="reviewlist-confirm-container-text">
            username님 과의 거래는
            <br /> 어떠셨나요?
          </div>
          <div className="reviewlist-confirm-container-star">
            <Rating
              name="simple-controlled"
              value={starRating}
              precision={0.5}
              onChange={(event, newValue) => {
                setStarRating(newValue);
              }}
              sx={{ "& .MuiSvgIcon-root": ReviewStarStyles }}
            />
          </div>
          <div className="reviewlist-confirm-button-container">
            <button
              className="reviewlist-confirm-button"
              onClick={handleConfirmation}
            >
              확인
            </button>
            <button
              className="reviewlist-close-button"
              onClick={handleConfirmationToggle}
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewList;
