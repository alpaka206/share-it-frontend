import React from "react";
import "../css/PublicButton.css";

function PublicButton({ Button_Text, Button_Image }) {
  return (
    <button type="PublicButton" className="PublicButton">
      <img src={process.env.PUBLIC_URL + Button_Image} alt="ButtonImage" />
      <div>{Button_Text}</div>
    </button>
  );
}

export default PublicButton;
