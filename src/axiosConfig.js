import axios from "axios";
import URL from "./server_url";

const instance = axios.create({
  baseURL: URL,
});

// 요청 인터셉터 설정
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // config.headers.Content-Type = 'application/json';
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 설정
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && (error.response.data.code === "SEC-001" || error.response.data.code === "SEC-002")) {
//       localStorage.removeItem("token");
//       window.location.href = "/";
//     }
//     return Promise.reject(error);
//   },
// );

export default axios;
