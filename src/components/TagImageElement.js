import React from "react";
import "../css/TagImageElement.css";

const TagImageElement = ({
  Button_Image,
  Button_Text,
  gradientColor1,
  gradientColor2,
}) => {
  const customStyle = {
    "--gradient-color-1": gradientColor1,
    "--gradient-color-2": gradientColor2,
  };

  return (
    <div className="TagImageElement">
      <div style={customStyle} className="TagImageElementImage">
        <img src={process.env.PUBLIC_URL + Button_Image} alt="ButtonImage" />
      </div>
      <div>{Button_Text}</div>
    </div>
  );
};

export default TagImageElement;
