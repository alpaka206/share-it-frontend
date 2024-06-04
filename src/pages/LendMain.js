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
  const [lendData, setLendData] = useState([]);
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts`, {
          params: {
            limit: 3,
            postType: "LENT",
            cursor: null,
            keyword: keyword,
          },
        });
        console.log("key:", keyword);
        if (response.status === 200) {
          setLendData(response.data.data.postInfos);
          setCursor(response.data.data.cursor);
          console.log(lendData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors if needed
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div className="container">
      <Topnav />
      <div className="lendmain-container">
        <div className="lendmain-title">
          {keyword
            ? decodeURIComponent(keyword)
            : "주변엔 이런 물건을 빌릴 수 있어요"}
        </div>
        <LendListRow
          lendData={lendData}
          setLendData={setLendData}
          cursor={cursor}
          keyword={keyword}
        />
        <TopTags location={"Lend"} />
      </div>
      <Footer />
    </div>
  );
}

export default LendMain;
