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
      <Footer />
    </div>
  );
}

export default LoginPage;
