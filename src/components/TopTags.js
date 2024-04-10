import React, { Fragment } from "react";
import TextTags from "./TextTags";
import ImageTags from "./ImageTags";
import "../css/TopTags.css";

const TopTags = () => {
  return (
    <Fragment>
      <h1>인기 해시태그 한번에 모아보기</h1>
      <div className="TopTags">
        <TextTags />
        <ImageTags />
      </div>
    </Fragment>
  );
};

export default TopTags;
