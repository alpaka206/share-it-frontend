import axios from "../axiosConfig";

export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

export const validateEmailCode = async (code) => {
  try {
    const response = await axios.post(`/auth/email-code`, { code });
    return response.data.status === 200;
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
};

export const sendEmail = async (email) => {
  try {
    const response = await axios.post(`/auth/mail`, { email });
    return response.data.status === 200;
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
};

export const validateRegisterForm = (userRegisterState, buttonCheck) => {
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

  return errors;
};
