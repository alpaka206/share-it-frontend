import Footer from "../components/Footer";
import LoginRegisterPrev from "../components/LoginRegisterPrev";
import Topnav from "../components/Topnav";
import "../css/LoginPage.css";

function LoginPage() {
  return (
    <div className="container">
      <Topnav />
      <div className="LoginPage">
        <LoginRegisterPrev />
      </div>
      <div className="LoginPage-text">
        공유경제의 기쁨
        <br />
        지금 바로 경험해보세요
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
