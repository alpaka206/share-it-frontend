import React from "react";
import "../css/ImageTags.css";
import TagImageElement from "./TagImageElement";

const ImageTags = () => {
  return (
    <div className="ImageTags">
      <div className="ImageTagsContainer">
        <TagImageElement
          Button_Image={`assets/monitor.svg`}
          Button_Text="#전자기기"
          gradientColor1="#57C1B3"
          gradientColor2="#EBBF77"
        />
        <TagImageElement
          Button_Image={`assets/battery.svg`}
          Button_Text="#보조배터리"
          gradientColor1="#A191DE"
          gradientColor2="#13F297"
        />
        <TagImageElement
          Button_Image={`assets/umbrella.svg`}
          Button_Text="#우산"
          gradientColor1="#DD3E57"
          gradientColor2="#D4773F"
        />
        <TagImageElement
          Button_Image={`assets/fix.svg`}
          Button_Text="#수리도구"
          gradientColor1="#46A98D"
          gradientColor2="#CD731F"
        />
        <TagImageElement
          Button_Image={`assets/game.svg`}
          Button_Text="#보드게임"
          gradientColor1="#65301D"
          gradientColor2="#4C2311"
        />
      </div>
      <div className="ImageTagsContainer">
        <TagImageElement
          Button_Image={`assets/speaker.svg`}
          Button_Text="#스피커"
          gradientColor1="#F94C57"
          gradientColor2="#FA57C1"
        />
        <TagImageElement
          Button_Image={`assets/camera.svg`}
          Button_Text="#카메라"
          gradientColor1="#EBB671"
          gradientColor2="#A92034"
        />
        <TagImageElement
          Button_Image={`assets/book.svg`}
          Button_Text="#강의교재"
          gradientColor1="#23169E"
          gradientColor2="#040242"
        />
        <TagImageElement
          Button_Image={`assets/bunner.svg`}
          Button_Text="#가스버너"
          gradientColor1="#E2A85C"
          gradientColor2="#D68544"
        />
        <TagImageElement
          Button_Image={`assets/light.svg`}
          Button_Text="#손전등"
          gradientColor1="#F2B278"
          gradientColor2="#ED77DF"
        />
      </div>
    </div>
  );
};

export default ImageTags;
