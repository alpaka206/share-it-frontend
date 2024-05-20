import React from "react";
import "../css/TextTags.css";

const TextTags = ({ onClick }) => {
  return (
    <div className="TextTags">
      <div className="Column">
        <div onClick={() => onClick("선풍기")}>#선풍기</div>
        <div onClick={() => onClick("케이블")}>#케이블</div>
        <div onClick={() => onClick("청소기")}>#청소기</div>
      </div>
      <div className="Column">
        <div onClick={() => onClick("드라이기")}>#드라이기</div>
        <div onClick={() => onClick("무선충전기")}>#무선충전기</div>
      </div>
      <div className="Column">
        <div onClick={() => onClick("전공책")}>#전공책</div>
        <div onClick={() => onClick("후라이팬")}>#후라이팬</div>
        <div onClick={() => onClick("고데기")}>#고데기</div>
      </div>
      <div className="Column">
        <div onClick={() => onClick("USB")}>#USB</div>
        <div onClick={() => onClick("계산기")}>#계산기</div>
      </div>
    </div>
  );
};

export default TextTags;
