import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/SocialRegister.css";
import { useRecoilState } from "recoil";
import { userState } from "../Atoms";

const SocialRegister = () => {
  const navigate = useNavigate();
  const [registerToken, setRegisterToken] = useRecoilState(userState);

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

  const secondDivRef = useRef(null);
  const thirdDivRef = useRef(null);
  const fourthDivRef = useRef(null);
  const fifthDivRef = useRef(null);
  const sixDivRef = useRef(null);

  const handleNext = async (e, ref) => {
    e.preventDefault();
    if (ref === fourthDivRef) {
      if (!userRegisterState.agreeCheck) return;
    }
    if (ref === fifthDivRef) {
      if (!/\S+@\S+\.\S+/.test(userRegisterState.email)) {
        setButtonCheck((prevState) => ({
          ...prevState,
          emailCheck: false,
          Emailbtn: true,
        }));
        return;
      }
      try {
        console.log("token:", registerToken.token);
        console.log("token:", registerToken.token);
        const response = await axios.post(
          `https://catholic-mibal.site/auth/mail`,
          {
            email: userRegisterState.email,
          },
          {
            headers: {
              Authorization: registerToken.token,
            },
          }
        );
        console.log("email : ", response);
        console.log("user email : ", userRegisterState.email);
        if (response.data.status !== 200) {
          setButtonCheck((prevState) => ({
            ...prevState,
            emailCheck: false,
            Emailbtn: true,
          }));
          console.log("fail user email : ", userRegisterState.email);

          return;
        } else {
          setButtonCheck((prevState) => ({
            ...prevState,
            emailCheck: true,
            Emailbtn: true,
          }));
          console.log("succes user email : ", userRegisterState.email);
        }
      } catch (error) {
        console.error("Error checking email:", error);
        return;
      }
    }
    if (ref === sixDivRef) {
      try {
        console.log("token:", registerToken.token);
        const response = await axios.post(
          `https://catholic-mibal.site/auth/email-code`,
          {
            code: userRegisterState.emailpw,
          },
          {
            headers: {
              Authorization: registerToken.token,
            },
          }
        );
        if (response.data.status !== 200) {
          setButtonCheck((prevState) => ({
            ...prevState,
            emailpwCheck: false,
            EmailPWbtn: true,
          }));
          return;
        } else {
          setButtonCheck((prevState) => ({
            ...prevState,
            emailpwCheck: true,
            EmailPWbtn: true,
          }));
        }
      } catch (error) {
        console.error("Error checking email:", error);
        return;
      }
    }

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRegisterButtonClicked = async () => {
    const errors = [];
    if (!userRegisterState.agreeCheck) {
      errors.push("개인정보 수집 및 이용에 동의해야 합니다.");
    }

    if (!buttonCheck.emailCheck) {
      errors.push("이메일을 다시 확인해주세요");
    }

    if (!buttonCheck.emailpwCheck) {
      errors.push("이메일 인증 코드를 확인해 주세요");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    try {
      console.log("nickname : ", userRegisterState.nickname);
      const response = await axios.post(
        "https://catholic-mibal.site/auth/register",
        { nick_name: userRegisterState.nickname },
        {
          headers: {
            Authorization: registerToken.token,
          },
        }
      );
      console.log("response : ", response);

      console.log("회원가입 완료:", response.data);

      if (response.data.status === 200) {
        const token = response.data.data.token;
        localStorage.setItem("token", token);

        alert("가입이 완료되었습니다.");
        navigate("/");
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="register-container">
      <div>
        <div className="zeroDivRef">
          <button className="first-button" onClick={() => navigate("/")}>
            처음으로
          </button>
        </div>

        <div className="firstDivRef">
          <div className="firstDivRef-first-text">
            공유경제의 기쁨,
            <br />
            쉐어릿으로 시작해보세요.
          </div>
          <div className="firstDivRef-second-text">
            간단한 회원가입으로 시작할게요.
          </div>
          <div className="checkbox-container-first">
            <div
              className="checkbox-container"
              onClick={() =>
                setRegisterUserState((prevState) => ({
                  ...prevState,
                  agreeCheck: !prevState.agreeCheck,
                }))
              }
            >
              <button
                id="agree"
                className={`checkbox-check ${
                  userRegisterState.agreeCheck ? "checked" : ""
                }`}
              >
                {userRegisterState.agreeCheck && (
                  <img
                    src="/assets/register_check.svg"
                    alt="Checked"
                    className="checkmark"
                  />
                )}
              </button>
              <div className="firstDivRef-agree-text">
                개인정보 수집 및 이용에 동의합니다.
              </div>
            </div>
            <div className="second-button-container">
              <button
                onClick={(e) => handleNext(e, fourthDivRef)}
                className="second-button"
              >
                시작하기
              </button>
            </div>
          </div>
        </div>
        <div className="fourthDivRef" ref={fourthDivRef}>
          <div className="fourthDivRef-firsttext">
            거의 다 왔어요!
            <br />
            학교 이메일을 입력해주세요.
          </div>
          <div className="fourthDivRef-input">
            <input
              className="fourthDivRef-input-email"
              type="email"
              value={userRegisterState.email}
              onChange={(e) => {
                setRegisterUserState((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
                setButtonCheck((prev) => ({
                  ...prev,
                  emailCheck: false,
                }));
              }}
              placeholder="example@catholic.ac.kr"
            />
            {buttonCheck.Emailbtn && (
              <img
                src={
                  buttonCheck.emailCheck
                    ? "/assets/approved.svg"
                    : "/assets/delete_red.svg"
                }
                alt="reset"
              />
            )}
          </div>
          <div className="fourthDivRef-second">
            <div className="fourthDivRef-secondtext">
              보다 신뢰할 수 있는 거래를 위해 필요해요.
            </div>
            <div className="fifth-button">
              <button
                onClick={(e) => {
                  handleNext(e, fifthDivRef);
                }}
              >
                인증하기
              </button>
            </div>
          </div>
        </div>
        <div className="fifthDivRef" ref={fifthDivRef}>
          <div className="fifthDivRef-firsttext">
            작성하신 주소로 이메일을 보냈어요
          </div>
          <div className="fifthDivRef-input">
            <input
              className="fifthDivRef-input-email"
              type="email"
              value={userRegisterState.emailpw}
              onChange={(e) => {
                setRegisterUserState((prevState) => ({
                  ...prevState,
                  emailpw: e.target.value,
                }));
                setButtonCheck((prev) => ({
                  ...prev,
                  emailpwCheck: false,
                }));
              }}
              placeholder="6자리 코드 입력"
            />
            {buttonCheck.EmailPWbtn && (
              <img
                src={
                  buttonCheck.emailpwCheck
                    ? "/assets/approved.svg"
                    : "/assets/delete_red.svg"
                }
                alt="reset"
              />
            )}
          </div>
          <div className="fifthDivRef-secondtext">메일함을 확인해 주세요.</div>
          <div className="fifthDivRef-second">
            <div>
              <button className="fifthDivRef-thirdtext">
                메일이 도착하지 않았나요?
              </button>
            </div>
            <div className="six-button-container">
              <button
                className="fifthDivRef-secondbutton"
                onClick={(e) => {
                  handleNext(e, sixDivRef);
                }}
              >
                다음으로
              </button>
            </div>
          </div>
        </div>
        <div className="sixDivRef" ref={sixDivRef}>
          <div className="sixDivRef-firsttext">환영해요! 이제부터 저를,,</div>
          <div className="sixDivRef-input">
            <input
              className="sixDivRef-input-nick"
              type="text"
              value={userRegisterState.nickname}
              onChange={(e) =>
                setRegisterUserState((prevState) => ({
                  ...prevState,
                  nickname: e.target.value,
                }))
              }
              onBlur={(e) => {
                const value = e.target.value;

                if (
                  value !== "" &&
                  !/^[a-zA-Z0-9\u3131-\uD79D]{1,15}$/.test(value)
                ) {
                  setButtonCheck((prev) => ({
                    ...prev,
                    nicknameCheck: false,
                    namecheck: true,
                  }));
                } else {
                  setButtonCheck((prev) => ({
                    ...prev,
                    namecheck: true,
                    nicknameCheck: true,
                  }));
                }
              }}
              placeholder="username"
            />
            <div className="sixDivRef-secondtext">님</div>
            {buttonCheck.namecheck &&
              (buttonCheck.nicknameCheck ? (
                <img src="/assets/approved.svg" alt="approved" />
              ) : (
                <img src="/assets/delete_red.svg" alt="delete" />
              ))}
          </div>
          {buttonCheck.namecheck &&
            (buttonCheck.nicknameCheck ? (
              <></>
            ) : (
              <div className="sixDivRef-alert">
                닉네임은 15자 이내로, 영어, 한글, 숫자만 사용 가능합니다.
              </div>
            ))}
          <div className="sixDivRef-thirdtext">으로 불러주세요!</div>
          <div className="last-button-container">
            <button
              className="last-button"
              onClick={(e) => {
                handleRegisterButtonClicked();
              }}
            >
              공유경제 시작하기 <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialRegister;
