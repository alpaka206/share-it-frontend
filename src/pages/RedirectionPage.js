import React, { useEffect, useRef } from "react";
import base64 from "base-64";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../Atoms";
import DecodeJWT from "../components/DecodeJWT";

function Redirection() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URL(window.location.href).searchParams.get("token");

    const processToken = async () => {
      if (token) {
        const decoded = DecodeJWT(token);

        if (decoded) {
          if (decoded.role === "ROLE_SOCIAL") {
            console.log("회원가입 유저");
            localStorage.removeItem("token");
            localStorage.setItem("token", token);
            navigate("/social-register");
          } else if (decoded.role === "ROLE_USER") {
            console.log("로그인 유저");
            localStorage.removeItem("token");
            localStorage.setItem("token", token);
            navigate("/");
          } else {
            console.error("Unknown role:", decoded.role);
            navigate("/");
          }
        } else {
          console.error("Invalid token");
          navigate("/");
        }
      } else {
        console.error("Token not found in URL");
        navigate("/");
      }
    };

    processToken();
  }, [navigate]);

  return <div></div>;
}

export default Redirection;
