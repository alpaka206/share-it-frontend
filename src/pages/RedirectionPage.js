import React, { useEffect, useRef } from "react";
import base64 from "base-64";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../Atoms";

function Redirection() {
  const navigate = useNavigate();
  const [userToken, setUserToken] = useRecoilState(userState);
  const tokenRef = useRef(null);

  useEffect(() => {
    // Extract token from URL once
    if (!tokenRef.current) {
      const token = new URL(window.location.href).searchParams.get("token");
      tokenRef.current = token;
      console.log("Extracted token from URL:", token);
    }

    const processToken = async () => {
      const token = tokenRef.current;

      if (token) {
        const decoded = decodeJWT(token);
        console.log("Decoded token:", decoded);

        if (decoded) {
          if (decoded.role === "ROLE_SOCIAL") {
            console.log("회원가입 유저");
            setUserToken((prevUser) => ({ ...prevUser, token: token }));
            navigate("/social-register");
          } else if (decoded.role === "ROLE_USER") {
            console.log("로그인 유저");
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
  }, [navigate, setUserToken]);

  const decodeJWT = (token) => {
    try {
      const payload = token.split(".")[1];
      const decodedPayload = base64.decode(payload);
      return JSON.parse(decodedPayload);
    } catch (error) {
      console.error("Invalid token", error);
      return null;
    }
  };

  return <div></div>;
}

export default Redirection;
