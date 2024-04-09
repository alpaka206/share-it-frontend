import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/SocialRegister.css';

const SocialRegister = () => {
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [agreeChecked, setAgreeChecked] = useState(false);
    const [nickname, setNickname] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nicknameError, setNicknameError] = useState('');
    const [emailCheck, setEmailCheck] = useState(false);

    const secondDivRef = useRef(null);
    const thirdDivRef = useRef(null);
    const fourthDivRef = useRef(null);
    const fifthDivRef = useRef(null);
    const sixDivRef = useRef(null);

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
        setEmailCheck(false);
        setEmailError('');
    };

    const handleNext = async (e, ref) => {
        e.preventDefault();
        if (ref === secondDivRef) {
            if (!agreeChecked) return;
        }

        if (ref === fifthDivRef) {
            if (!/\S+@\S+\.\S+/.test(email)) return;
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
                if (response.data.length > 0) {
                    setEmailError('중복된 이메일입니다.');
                    return;
                } else {
                    setEmailCheck(true);
                }
            } catch (error) {
                console.error('Error checking email:', error);
                return;
            }
        }
        if (ref === sixDivRef) {
            if (email !== confirmEmail) return;
        }

        if (!usernameError && !emailError) {
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }
        }

        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleReset = (setState) => {
        setState('');
    };

    const handleNicknameChange = (e) => {
        const value = e.target.value;
        setNickname(value);

        setNicknameError('');

        if (value !== '' && !/^[a-zA-Z0-9\u3131-\uD79D]{1,15}$/.test(value)) {
            setNicknameError('닉네임은 15자 이내로, 영어, 한글, 숫자만 사용 가능합니다.');
        }
    };

    const handleRegisterButtonClicked = async () => {
        const errors = [];
        if (!agreeChecked) {
            errors.push('개인정보 수집 및 이용에 동의해야 합니다.');
        }

        if (!emailCheck) {
            errors.push(setEmailError);
        }

        if (nicknameError !== '') {
            errors.push(nicknameError);
        }

        if (email === '' || confirmEmail === '' || nickname === '') {
            errors.push('모든 필수 항목을 입력하세요.');
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            errors.push('올바른 이메일 형식이 아닙니다.');
        }

        if (email !== confirmEmail) {
            errors.push('이메일이 일치하지 않습니다.');
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
                title: '소셜 회원가입',
                body: `이메일: ${email}, 닉네임: ${nickname}`,
            });
            console.log('회원가입 완료:', response.data);

            navigate('/');
            window.scrollTo(0, 0);
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <div className="register-container">
            <div>
                <div className="zeroDivRef">
                    <button className="first-button" onClick={() => navigate('/')}>
                        처음으로
                    </button>
                </div>

                <div className="firstDivRef">
                    <p>
                        공유경제의 기쁨, <br /> 쉐어릿으로 시작해보세요.
                    </p>
                    <p>간단한 회원가입으로 시작할게요.</p>
                    <input
                        type="checkbox"
                        id="agree"
                        checked={agreeChecked}
                        onChange={() => setAgreeChecked(!agreeChecked)}
                    />
                    <label htmlFor="agree" className="label-agree">
                        개인정보 수집 및 이용에 동의합니다.
                    </label>
                    <button onClick={(e) => handleNext(e, secondDivRef)} className="second-button">
                        시작하기
                    </button>
                </div>

                <div className="fourthDivRef" ref={fourthDivRef}>
                    <p className="fourthDivRef-firsttext">
                        거의 다 왔어요!
                        <br />
                        학교 이메일을 입력해주세요.
                    </p>
                    <div className="fourthDivRef-input">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="example@catholic.ac.kr"
                        />
                        <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setEmail)} />
                    </div>
                    <div className="fourthDivRef-second">
                        <p className="fourthDivRef-secondtext">
                            {emailError || '보다 신뢰할 수 있는 거래를 위해 필요해요.'}
                        </p>
                        <button onClick={(e) => handleNext(e, fifthDivRef)}>인증하기</button>
                    </div>
                </div>
                <div className="fifthDivRef" ref={fifthDivRef}>
                    <p className="fifthDivRef-firsttext">작성하신 주소로 이메일을 보냈어요</p>
                    <div className="fifthDivRef-input">
                        <input
                            type="email"
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            placeholder="4자리 코드 입력"
                        />
                        <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setConfirmEmail)} />
                    </div>
                    <p className="fifthDivRef-secondtext">메일함을 확인해 주세요.</p>
                    <div className="fifthDivRef-second">
                        <button className="fifthDivRef-thirdtext">메일이 도착하지 않았나요?</button>
                        <button className="fifthDivRef-secondbutton" onClick={(e) => handleNext(e, sixDivRef)}>
                            다음으로
                        </button>
                    </div>
                </div>
                <div className="sixDivRef" ref={sixDivRef}>
                    <p className="sixDivRef-firsttext">환영해요! 이제부터 저를,,</p>
                    <div className="sixDivRef-input">
                        <input type="text" value={nickname} onChange={handleNicknameChange} placeholder="username" />
                        <p className="sixDivRef-secondtext">님</p>
                        <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setNickname)} />
                    </div>
                    <p>{nicknameError || '닉네임은 15자 이내로, 영어, 한글, 숫자만 사용 가능합니다.'}</p>
                    <p className="sixDivRef-thirdtext">으로 불러주세요!</p>

                    <button className="last-button" onClick={handleRegisterButtonClicked}>
                        공유경제 시작하기 <span>&gt;</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialRegister;
