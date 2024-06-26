import { useState, useRef } from "react";
import axios from "../axiosConfig";
import { validateEmail, validateEmailCode, sendEmail, validateRegisterForm } from "../utils/validation";

const useRegister = () => {
  const [userRegisterState, setRegisterUserState] = useState({
    agreeCheck: false,
    email: null,
    emailpw: null,
    nickname: null,
  });
  const [buttonCheck, setButtonCheck] = useState({
    emailCheck: false,
    emailpwCheck: false,
    nicknameCheck: false,
    Emailbtn: false,
    EmailPWbtn: false,
  });

  const fourthDivRef = useRef(null);
  const fifthDivRef = useRef(null);
  const sixDivRef = useRef(null);

  const handleNext = async (e, ref) => {
    e.preventDefault();
    if (ref === fourthDivRef && !userRegisterState.agreeCheck) return;

    if (ref === fifthDivRef) {
      if (!validateEmail(userRegisterState.email)) {
        setButtonCheck((prevState) => ({
          ...prevState,
          emailCheck: false,
          Emailbtn: true,
        }));
        return;
      }
      if (!(await sendEmail(userRegisterState.email))) {
        setButtonCheck((prevState) => ({
          ...prevState,
          emailCheck: false,
          Emailbtn: true,
        }));
        return;
      }
      setButtonCheck((prevState) => ({
        ...prevState,
        emailCheck: true,
        Emailbtn: true,
      }));
    }

    if (ref === sixDivRef) {
      if (!(await validateEmailCode(userRegisterState.emailpw))) {
        setButtonCheck((prevState) => ({
          ...prevState,
          emailpwCheck: false,
          EmailPWbtn: true,
        }));
        return;
      }
      setButtonCheck((prevState) => ({
        ...prevState,
        emailpwCheck: true,
        EmailPWbtn: true,
      }));
    }

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRegisterButtonClicked = async () => {
    const errors = validateRegisterForm(userRegisterState, buttonCheck);
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }
    try {
      const response = await axios.post("/auth/register", {
        nick_name: userRegisterState.nickname,
      });
      if (response.data.status === 200) {
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        alert("가입이 완료되었습니다.");
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return {
    userRegisterState,
    setRegisterUserState,
    buttonCheck,
    setButtonCheck,
    handleNext,
    handleRegisterButtonClicked,
    fourthDivRef,
    fifthDivRef,
    sixDivRef,
  };
};

export default useRegister;
