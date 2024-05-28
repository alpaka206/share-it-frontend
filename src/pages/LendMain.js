import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Topnav from "../components/Topnav";
import LendListRow from "../components/LendListRow";
import TopTags from "../components/TopTags";
import Footer from "../components/Footer";
import "../css/LendMain.css";
import axios from "axios";

function LendMain() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("q");
  const [lendData, setLendData] = useState({
    hasNext: null,
    cursor: null,
    postInfos: [],
  });
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const token = localStorage.getItem("token");
  //         const response = await axios.get(
  //           `https://catholic-mibal.site/api/posts?limit=3&postType=NEED&cursor=${lendData.cursor}&keyword=${keyword}`,
  //           {
  //             headers: {
  //               Authorization: token,
  //             },
  //           }
  //         );
  //         if (
  //           response.data.code === "SEC-001" ||
  //           response.data.code === "SEC-002"
  //         ) {
  //           localStorage.removeItem("token");
  //         } else if (response.status === 200) {
  //           setLendData((prev) => ({
  //             ...prev,
  //             hasNext: response.data.hasNext,
  //             cursor: response.data.cursor,
  //             postInfos: [...prev.postInfos, response.data.postInfos],
  //           }));
  //         }
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //         // Handle errors if needed
  //       }
  //     };

  //     fetchData(); // Call the async function immediately
  //   }, []);

  return (
    <div className="container">
      <Topnav />
      <div className="lendmain-container">
        <div className="lendmain-title">
          {keyword
            ? decodeURIComponent(keyword)
            : "주변엔 이런 물건을 빌릴 수 있어요"}
        </div>
        <LendListRow lendData={lendData} setLendData={setLendData} />
        <TopTags location={"Lend"} />
      </div>
      <Footer />
    </div>
  );
}

export default LendMain;
