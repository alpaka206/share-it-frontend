//빌려주기

import React from "react";
import Topnav from "../components/Topnav";
import ListRow from "../components/ListRow";

function LendMain() {
  return (
    <div className="container">
      <Topnav></Topnav>
      <div>
        <ListRow />
      </div>
    </div>
  );
}

export default LendMain;
