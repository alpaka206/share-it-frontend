//빌려주기

import React from "react";
import Topnav from "../components/Topnav";
import LendListRow from "../components/LendListRow";
import TopTags from "../components/TopTags";

function LendMain() {
  return (
    <div className="container">
      <Topnav></Topnav>
      <div>
        <LendListRow />
        <TopTags />
      </div>
    </div>
  );
}

export default LendMain;
