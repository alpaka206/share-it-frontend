import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [userState, setUserState] = useState({
    agreeCheck: false,
    id: null,
    passwd: null,
    passwdCheck: null,
    email: null,
    emailpw: null,
    nickname: null,
  });
  const [buttonCheck, setButtonCheck] = useState({
    idCheck: false,
    pwsame: false,
    emailCheck: false,
    emailpwCheck: false,
    nicknameCheck: false,
    Idbtn: false,
    PWbtn: false,
    Emailbtn: false,
    EmailPWbtn: false,
  });
  const [showPassword, setShowPassword] = useState({
    first: false,
    second: false,
  });

  const secondDivRef = useRef(null);
  const thirdDivRef = useRef(null);
  const fourthDivRef = useRef(null);
  const fifthDivRef = useRef(null);
  const sixDivRef = useRef(null);

  const handleNext = async (e, ref) => {
    e.preventDefault();
    if (ref === secondDivRef) {
      if (!userState.agreeCheck) return;
    }
    if (ref === thirdDivRef) {
      if (!/^[a-z0-9]{8,15}$/.test(userState.id)) return;

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users?username=${userState.id}`
        );
        if (response.data === false) {
          setButtonCheck((prevState) => ({
            ...prevState,
            idCheck: false,
            Idbtn: true,
          }));
          return;
        } else {
          setButtonCheck((prevState) => ({
            ...prevState,
            idCheck: true,
            Idbtn: true,
          }));
        }
      } catch (error) {
        console.error("Error checking username:", error);

        return;
      }
    }
    if (ref === fourthDivRef) {
      if (
        userState.passwd === "" ||
        userState.passwdCheck === "" ||
        userState.passwd.length < 6 ||
        !/[A-Z]/.test(userState.passwd) ||
        !/[a-z]/.test(userState.passwd) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(userState.passwd) ||
        userState.passwd !== userState.passwdCheck
      ) {
        setButtonCheck((prevState) => ({
          ...prevState,
          pwsame: false,
          PWbtn: true,
        }));
        return;
      } else {
        setButtonCheck((prevState) => ({
          ...prevState,
          pwsame: true,
          PWbtn: true,
        }));
      }
    }
    if (ref === fifthDivRef) {
      if (!/\S+@\S+\.\S+/.test(userState.email)) {
        setButtonCheck((prevState) => ({
          ...prevState,
          emailCheck: false,
          Emailbtn: true,
        }));
        return;
      }
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users?email=${userState.email}`
        );
        if (response.data === false) {
          setButtonCheck((prevState) => ({
            ...prevState,
            emailCheck: false,
            Emailbtn: true,
          }));
          return;
        } else {
          setButtonCheck((prevState) => ({
            ...prevState,
            emailCheck: true,
            Emailbtn: true,
          }));
        }
      } catch (error) {
        console.error("Error checking email:", error);
        return;
      }
    }
    if (ref === sixDivRef) {
      if (userState.email !== userState.emailpw) {
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
    }

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRegisterButtonClicked = async () => {
    const errors = [];
    if (!userState.agreeCheck) {
      errors.push("개인정보 수집 및 이용에 동의해야 합니다.");
    }

    if (!buttonCheck.idCheck) {
      errors.push("아이디를 다시 확인해주세요");
    }
    if (!buttonCheck.pwsame) {
      errors.push("비밀번호를 다시 확인해주세요");
    }

    if (!buttonCheck.emailCheck) {
      errors.push("이메일을 다시 확인해주세요");
    }

    if (buttonCheck.emailpwCheck) {
      errors.push("이메일 인증 코드를 확인해 주세요");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    try {
      const postData = {
        ID: userState.id,
        PW: userState.passwd,
        Email: userState.email,
        nickname: userState.nickname,
      };
      console.log(postData);
      // const response = await axios.post(
      //   "https://jsonplaceholder.typicode.com/users",
      //   postData
      // );
      // console.log("회원가입 완료:", response.data);

      navigate("/");
      window.scrollTo(0, 0);
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
                setUserState((prevState) => ({
                  ...prevState,
                  agreeCheck: !prevState.agreeCheck,
                }))
              }
            >
              <button
                id="agree"
                className={`checkbox-check ${
                  userState.agreeCheck ? "checked" : ""
                }`}
              >
                {userState.agreeCheck && (
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
                onClick={(e) => handleNext(e, secondDivRef)}
                className="second-button"
              >
                시작하기
              </button>
            </div>
          </div>
        </div>
        <div className="secondDivRef" ref={secondDivRef}>
          <div className="secondDivRef-firsttext">
            먼저, 아이디를 알려주세요.
          </div>
          <div className="secondDivRef-input">
            <input
              className="secondDivRef-input-id"
              type="text"
              value={userState.id}
              onChange={(e) => {
                setUserState((prevState) => ({
                  ...prevState,
                  id: e.target.value,
                }));
                setButtonCheck((prev) => ({
                  ...prev,
                  idCheck: false,
                }));
              }}
              placeholder="아이디 입력..."
            />
            {buttonCheck.Idbtn && buttonCheck.idCheck !== null && (
              <img
                src={
                  buttonCheck.idCheck === true
                    ? "/assets/approved.svg"
                    : "/assets/delete_red.svg"
                }
                alt="reset"
              />
            )}
          </div>

          <div className="secondDivRef-secondtext">
            아이디는 8-15자, 소문자 영어, 숫자만 사용할 수 있어요.
          </div>

          <div className="third-button">
            <button
              onClick={(e) => {
                handleNext(e, thirdDivRef);
              }}
            >
              다음으로
            </button>
          </div>
        </div>
        <div className="thirdDivRef" ref={thirdDivRef}>
          <div className="thirdDivRef-firsttext">비밀번호를 작성해 주세요.</div>
          <div className="thirdDivRef-first-input-container">
            <div className="thirdDivRef-first-input-2">
              <input
                className="thirdDivRef-first-input"
                type={showPassword.first ? "text" : "password"}
                value={userState.passwd}
                onChange={(e) => {
                  setUserState((prevState) => ({
                    ...prevState,
                    passwd: e.target.value,
                  }));
                  setButtonCheck((prev) => ({
                    ...prev,
                    pwsame: false,
                  }));
                }}
                placeholder="비밀번호 입력..."
              />
              <img
                className="showPasswordIcon"
                src="/assets/show_password.svg"
                alt="show password"
                onMouseEnter={() =>
                  setShowPassword((prevState) => ({
                    ...prevState,
                    first: true,
                  }))
                }
                onMouseLeave={() =>
                  setShowPassword((prevState) => ({
                    ...prevState,
                    first: false,
                  }))
                }
              />
            </div>
            {buttonCheck.PWbtn && (
              <img
                src={
                  buttonCheck.pwsame
                    ? "/assets/approved.svg"
                    : "/assets/delete_red.svg"
                }
                alt="reset"
              />
            )}
          </div>
          <div className="thirdDivRef-second-input-container">
            <div className="thirdDivRef-second-input-2">
              <input
                className="thirdDivRef-second-input"
                type={showPassword.second ? "text" : "password"}
                value={userState.passwdCheck}
                onChange={(e) => {
                  setUserState((prevState) => ({
                    ...prevState,
                    passwdCheck: e.target.value,
                  }));
                  setButtonCheck((prev) => ({
                    ...prev,
                    pwsame: false,
                  }));
                }}
                placeholder="비밀번호 재확인"
              />
              <img
                className="showConfirmPasswordIcon"
                src="/assets/show_password.svg"
                alt="show password"
                onMouseEnter={() =>
                  setShowPassword((prevState) => ({
                    ...prevState,
                    second: true,
                  }))
                }
                onMouseLeave={() =>
                  setShowPassword((prevState) => ({
                    ...prevState,
                    second: false,
                  }))
                }
              />
            </div>
            {buttonCheck.PWbtn && (
              <img
                src={
                  buttonCheck.pwsame
                    ? "/assets/approved.svg"
                    : "/assets/delete_red.svg"
                }
                alt="reset"
              />
            )}
          </div>
          <div className="thirdDivRef-second">
            <div className="thirdDivRef-secondtext">
              비밀번호는 6글자 이상, 대소문자, 특수기호를 사용해야 해요.
            </div>
            <div className="fourth-button-container">
              <button
                className="fourth-button"
                onClick={(e) => {
                  handleNext(e, fourthDivRef);
                }}
              >
                다음으로
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
              value={userState.email}
              onChange={(e) => {
                setUserState((prevState) => ({
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
                  userState.emailCheck
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
              value={userState.emailpw}
              onChange={(e) => {
                setUserState((prevState) => ({
                  ...prevState,
                  emailpw: e.target.value,
                }));
                setButtonCheck((prev) => ({
                  ...prev,
                  emailpwCheck: false,
                }));
              }}
              placeholder="4자리 코드 입력"
            />
            {buttonCheck.EmailPWbtn && (
              <img
                src={
                  userState.emailpwCheck
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
              value={userState.nickname}
              onChange={(e) =>
                setUserState((prevState) => ({
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
                  }));
                } else {
                  setButtonCheck((prev) => ({
                    ...prev,
                    nicknameCheck: true,
                  }));
                }
              }}
              placeholder="username"
            />
            <div className="sixDivRef-secondtext">님</div>
            {userState.nicknameCheck ? (
              <img src="/assets/approved.svg" alt="approved" />
            ) : (
              <img src="/assets/delete_red.svg" alt="delete" />
            )}
          </div>
          {userState.namecheck &&
            (userState.nicknameCheck ? (
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

export default Register;
