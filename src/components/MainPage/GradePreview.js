import React from "react";
import "../../css/GradePreview.css";
import Rating from "@mui/material/Rating";

// CSS를 사용하여 별의 크기를 조절하는 스타일입니다.
const blackStarStyles = {
  color: "black",
  fontSize: "2.5em",
};

const GradePreview = () => {
  return (
    <div className="preview-box">
      <div className="user-grade-info">
        <div className="star">
          {/* Rating 컴포넌트에 스타일을 적용합니다. */}
          <Rating
            name="read-only"
            value={4.4}
            precision={0.1}
            readOnly
            sx={{ "& .MuiSvgIcon-root": blackStarStyles }}
          />
          <div className="GradePreview-title">친절한 Giver시네요!</div>
        </div>

        <div className="grade-text">
          나의 평점
          <div className="Grade-score">4.8</div>
        </div>
      </div>
      <div className="grade-hashtag">
        <div className="grade-hashtag-top">
          <div className="grade-hashtag-black">#저렴해요</div>
          <div className="grade-hashtag-purple">#친절해요</div>
          <div className="grade-hashtag-black">#시간약속을잘지켜요</div>
          <div className="grade-hashtag-purple">#저렴해요</div>
        </div>
        <div className="grade-hashtag-bottom">
          <div className="grade-hashtag-black">#잘사용해요</div>
          <div className="grade-hashtag-purple">#응답이빨라요</div>
          <div className="grade-hashtag-black">#나는나눔왕</div>
          <div className="grade-hashtag-purple">#설명이 친절해요</div>
        </div>
      </div>
    </div>
  );
};

export default GradePreview;
