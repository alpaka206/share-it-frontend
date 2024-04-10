import React from "react";
import Topnav from "../components/Topnav";
import NeedListRow from "../components/NeedListRow";

function NeedMain() {
  return (
    <div className="container">
      <Topnav></Topnav>
      <div>
        <NeedListRow />
      </div>
    </div>
  );
}

export default NeedMain;
