// SocialRegister.js
import React from "react";
import { useNavigate } from "react-router-dom";
import useRegister from "../hooks/useRegister";
import Step from "../components/Step"; // Step 컴포넌트 임포트
import "../css/SocialRegister.css";

const SocialRegister = () => {
  const navigate = useNavigate();
  const {
    userRegisterState,
    setRegisterUserState,
    buttonCheck,
    setButtonCheck,
    handleNext,
    handleRegisterButtonClicked,
    fourthDivRef,
    fifthDivRef,
    sixDivRef,
  } = useRegister();

  return (
    <div className="register-container">
      <div>
        <div className="zeroDivRef">
          <button className="first-button" onClick={() => navigate("/")}>
            처음으로
          </button>
        </div>

        <Step
          ref={fourthDivRef}
          className="privary_policy"
          stepTitle="공유경제의 기쁨,<br/> 쉐어릿으로 시작해보세요."
          stepSubtitle="간단한 회원가입으로 시작할게요."
          buttonText="시작하기"
          onClick={(e) => handleNext(e, fourthDivRef)}
          agreeCheck={userRegisterState.agreeCheck}
          setAgreeCheck={(value) => setRegisterUserState({ ...userRegisterState, agreeCheck: value })}
        />

        <Step
          ref={fifthDivRef}
          className="register_email"
          stepTitle="거의 다 왔어요!<br/> 학교 이메일을 입력해주세요."
          inputType="email"
          inputValue={userRegisterState.email}
          setInputValue={(value) => setRegisterUserState({ ...userRegisterState, email: value })}
          buttonText="인증하기"
          onClick={(e) => handleNext(e, fifthDivRef)}
          inputPlaceholder="example@catholic.ac.kr"
          buttonCheck={buttonCheck.Emailbtn}
          isValid={buttonCheck.emailCheck}
          extraText="보다 신뢰할 수 있는 거래를 위해 필요해요."
        />

        <Step
          ref={sixDivRef}
          className="register_email_code"
          stepTitle="작성하신 주소로 이메일을 보냈어요"
          inputType="email"
          inputValue={userRegisterState.emailpw}
          setInputValue={(value) => setRegisterUserState({ ...userRegisterState, emailpw: value })}
          buttonText="다음으로"
          onClick={(e) => handleNext(e, sixDivRef)}
          inputPlaceholder="6자리 코드 입력"
          buttonCheck={buttonCheck.EmailPWbtn}
          isValid={buttonCheck.emailpwCheck}
          extraText="메일이 도착하지 않았나요?"
          emailCodeText="메일함을 확인해 주세요."
        />

        <div className="sixDivRef" ref={sixDivRef}>
          <div className="sixDivRef-firsttext">환영해요! 이제부터 저를,,</div>
          <div className="sixDivRef-input">
            <input
              className="sixDivRef-input-nick"
              type="text"
              value={userRegisterState.nickname}
              onChange={(e) => setRegisterUserState({ ...userRegisterState, nickname: e.target.value })}
              onBlur={(e) => {
                const value = e.target.value;
                const nicknameValid = /^[a-zA-Z0-9\u3131-\uD79D]{1,15}$/.test(value);
                setButtonCheck({
                  ...buttonCheck,
                  nicknameCheck: nicknameValid,
                  namecheck: true,
                });
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
          {buttonCheck.namecheck && !buttonCheck.nicknameCheck && (
            <div className="sixDivRef-alert">닉네임은 15자 이내로, 영어, 한글, 숫자만 사용 가능합니다.</div>
          )}
          <div className="sixDivRef-thirdtext">으로 불러주세요!</div>
          <div className="last-button-container">
            <button className="last-button" onClick={handleRegisterButtonClicked}>
              공유경제 시작하기 <span>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialRegister;
