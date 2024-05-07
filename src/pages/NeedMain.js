import React from "react";
import Topnav from "../components/Topnav";
import NeedListRow from "../components/NeedListRow";
import TopTags from "../components/TopTags";
import { useLocation } from "react-router-dom";

function NeedMain() {
  const location = useLocation(); // 현재 URL 정보를 가져옵니다.
  const keyword = new URLSearchParams(location.search).get("q");
  return (
    <div className="container">
      <Topnav></Topnav>
      <div>
        <NeedListRow />
        <TopTags location={"Need"} />
      </div>
    </div>
  );
}

export default NeedMain;
