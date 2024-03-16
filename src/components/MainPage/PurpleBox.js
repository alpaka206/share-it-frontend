import React from "react";
import "../../css/PurpleBox.css";

const PurpleBox = () => {
  return (
    <div className="purple-box">
      <div className="title">이런 물건들이 필요해요!</div>
      <div className="content">
        <div className="item">
          <span className="circle">1</span>
          <span className="text">
            길이 체크 a b c d e f g h i j k l m n o p q r s t u v w x y z
          </span>
        </div>
        <div className="item">
          <span className="circle">2</span>
          <span className="text">
            길이 체크 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
          </span>
        </div>
        <div className="item">
          <span className="circle">3</span>
          <span className="text">아이폰 케이블 필요해요 급해요 ㅜㅜ</span>
        </div>
      </div>

      <div className="footer">필요한 물건 문의하러 가기</div>
    </div>
  );
};

export default PurpleBox;
