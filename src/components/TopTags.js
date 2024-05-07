import React, { Fragment } from "react";
import TextTags from "./TextTags";
import ImageTags from "./ImageTags";
import "../css/TopTags.css";
import { useNavigate } from "react-router-dom";

const TopTags = ({ location }) => {
  const navigate = useNavigate();
  const clickSearch = (searchTerm) => {
    navigate(
      `/${encodeURIComponent(location)}?q=${encodeURIComponent(searchTerm)}`
    );
  };
  return (
    <Fragment>
      <h1>인기 해시태그 한번에 모아보기</h1>
      <div className="TopTags">
        <TextTags onClick={(text) => clickSearch(text)} />
        <ImageTags onClick={(text) => clickSearch(text)} />
      </div>
    </Fragment>
  );
};

export default TopTags;
