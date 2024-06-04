import { useEffect, useState } from "react";
import MainpageLogin from "./MainpageLogin";
import MainpageUnLogin from "./MainpageUnLogin";
import axios from "axios";

function Mainpage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem("token") || "";
        const response = await axios.get(
          "https://catholic-mibal.site/token/check",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (
          response.data.code[0] === "SEC-001" ||
          response.data.code[0] === "SEC-002"
        ) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
        // setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return <div>{isLoggedIn ? <MainpageLogin /> : <MainpageUnLogin />}</div>;
}
export default Mainpage;
