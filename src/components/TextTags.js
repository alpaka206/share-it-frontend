import React from "react";
import "../css/TextTags.css";

const TextTags = ({ onClick }) => {
  return (
    <div className="TextTags">
      <div className="Column">
        <div onClick={() => onClick("고데기")}>#고데기</div>
        <div onClick={() => onClick("케이블")}>#케이블</div>
        <div onClick={() => onClick("청소기")}>#청소기</div>
      </div>
      <div className="Column">
        <div onClick={() => onClick("드라이기")}>#드라이기</div>
        <div onClick={() => onClick("무선충전기")}>#무선충전기</div>
      </div>
      <div className="Column">
        <div onClick={() => onClick("아이패드")}>#아이패드</div>
        <div onClick={() => onClick("후라이팬")}>#후라이팬</div>
        <div onClick={() => onClick("보조배터리")}>#보조배터리</div>
      </div>
      <div className="Column">
        <div onClick={() => onClick("전기면도기")}>#전기면도기</div>
        <div onClick={() => onClick("전자레인지")}>#전자레인지</div>
      </div>
    </div>
  );
};

export default TextTags;
