// Step.js
import React from "react";

const Step = React.forwardRef(
  (
    {
      stepTitle,
      stepSubtitle,
      inputType,
      inputValue,
      setInputValue,
      buttonText,
      onClick,
      inputPlaceholder,
      buttonCheck,
      isValid,
      agreeCheck,
      setAgreeCheck,
      setButtonCheck,
      extraText,
      className,
      emailCodeText,
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={`${className}`}>
        <div dangerouslySetInnerHTML={{ __html: stepTitle }} className={`${className}_stepTitle`}></div>
        {stepSubtitle && <div className={`${className}_stepSubtitle`}>{stepSubtitle}</div>}
        {inputType && (
          <div className={`${className}_inputContainer`}>
            <input
              className={`${className}_input`}
              type={inputType}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              //   onBlur={() => {
              //     if (inputType === "email") {
              //       setButtonCheck((prev) => ({
              //         ...prev,
              //         Emailbtn: false,
              //       }));
              //     } else if (inputType === "emailpw") {
              //       setButtonCheck((prev) => ({
              //         ...prev,
              //         EmailPWbtn: false,
              //       }));
              //     }
              //   }}
              placeholder={inputPlaceholder}
            />
            {buttonCheck && <img src={isValid ? "/assets/approved.svg" : "/assets/delete_red.svg"} alt="status" />}
          </div>
        )}
        {agreeCheck !== undefined && (
          <div className="checkbox-container-first">
            <div className="checkbox-container" onClick={() => setAgreeCheck(!agreeCheck)}>
              <button id="agree" className={`checkbox-check ${agreeCheck ? "checked" : ""}`}>
                {agreeCheck && <img src="/assets/register_check.svg" alt="Checked" className="checkmark" />}
              </button>
              <div className="agree-text">개인정보 수집 및 이용에 동의합니다.</div>
            </div>
            <div className={`${className}_nextButton`}>
              <button onClick={onClick} className={`${className}_Button`}>
                {buttonText}
              </button>
            </div>
          </div>
        )}
        {className === "register_email_code" && <div className={`${className}_emailCodeText`}>{emailCodeText}</div>}
        {extraText && (
          <div className={`${className}_nextButton`}>
            <div className={`${className}_extra-text`}>{extraText}</div>
            <button onClick={onClick} className={`${className}_Button`}>
              {buttonText}
            </button>
          </div>
        )}
      </div>
    );
  },
);

export default Step;
