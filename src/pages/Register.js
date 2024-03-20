import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //const [_passwordError, setPasswordError] = useState(false);
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [agreeChecked, setAgreeChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [nickname, setNickname] = useState('');

    const secondDivRef = useRef(null);
    const thirdDivRef = useRef(null);
    const fourthDivRef = useRef(null);
    const fifthDivRef = useRef(null);
    const sixDivRef = useRef(null);

    const handleConfirmPassword = (e) => {
        const { value } = e.target;
        setConfirmPassword(value);
        //setPasswordError(value !== password);
    };

    const handleNext = (e, ref) => {
        e.preventDefault();
        if (ref === secondDivRef) {
            if (!agreeChecked) return;
        }
        if (ref === thirdDivRef) {
            if (!/^[a-z0-9]+$/.test(username)) return;
        }
        if (ref === fourthDivRef) {
            if (
                password === '' ||
                confirmPassword === '' ||
                password.length < 6 ||
                !/[A-Z]/.test(password) ||
                !/[a-z]/.test(password) ||
                !/[!@#$%^&*(),.?":{}|<>]/.test(password)
            )
                return;
        }
        if (ref === fifthDivRef) {
            if (!/\S+@\S+\.\S+/.test(email)) return;
        }
        if (ref === sixDivRef) {
            if (email !== confirmEmail) return;
        }
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleReset = (setState) => {
        setState('');
    };

    const validatePassword = () => {
        if (password === '' || confirmPassword === '') {
            return '비밀번호는 6글자 이상, 대소문자, 특수기호를 사용해야 해요.';
        } else if (password !== confirmPassword) {
            return '비밀번호가 일치하지 않습니다.';
        } else if (
            password.length < 6 ||
            !/[A-Z]/.test(password) ||
            !/[a-z]/.test(password) ||
            !/[!@#$%^&*(),.?":{}|<>]/.test(password)
        ) {
            return '비밀번호는 6글자 이상, 대소문자, 특수기호를 사용해야 해요.';
        } else {
            return '비밀번호가 일치합니다.';
        }
    };
    const handleNavigateToMain = () => {
        navigate('/');
        window.scrollTo(0, 0); // Scroll to top of the page
    };
    return (
        <div className="register-container">
            <div>
                <button onClick={() => navigate('/')}>처음으로</button>

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
                    <label htmlFor="agree">개인정보 수집 및 이용에 동의합니다.</label>
                    <button onClick={(e) => handleNext(e, secondDivRef)}>시작하기</button>
                    <p className="hello">hello</p>
                </div>
                <div ref={secondDivRef}>
                    <p>먼저, 아이디를 알려주세요.</p>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setUsername)} />
                    <p>아이디는 소문자 영어, 숫자만 사용할 수 있어요.</p>
                    <button onClick={(e) => handleNext(e, thirdDivRef)}>다음으로</button>
                    <p className="hello">hello</p>
                </div>
                <div ref={thirdDivRef}>
                    <p>비밀번호를 작성해주세요.</p>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setPassword)} />
                    <img
                        src="/assets/show_password.svg"
                        alt="show password"
                        onMouseEnter={() => setShowPassword(true)}
                        onMouseLeave={() => setShowPassword(false)}
                    />

                    <p>비밀번호를 재확인해주세요.</p>
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                    />
                    <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setConfirmPassword)} />
                    <img
                        src="/assets/show_password.svg"
                        alt="show password"
                        onMouseEnter={() => setShowConfirmPassword(true)}
                        onMouseLeave={() => setShowConfirmPassword(false)}
                    />
                    <p>{validatePassword()}</p>
                    <button onClick={(e) => handleNext(e, fourthDivRef)}>다음으로</button>
                    <p className="hello">hello</p>
                </div>
                <div ref={fourthDivRef}>
                    <p>
                        거의 다 왔어요!
                        <br />
                        학교 이메일을 입력해주세요.
                    </p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setEmail)} />
                    <button onClick={(e) => handleNext(e, fifthDivRef)}>다음으로</button>
                    <p className="hello">hello</p>
                </div>
                <div ref={fifthDivRef}>
                    <p>작성하신 주소로 이메일을 보냈어요</p>
                    <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
                    <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setConfirmEmail)} />
                    <p>메일함을 확인해 주세요.</p>
                    <p>메일이 도착하지 않았나요?</p>
                    <button onClick={(e) => handleNext(e, sixDivRef)}>다음으로</button>
                    <p className="hello">hello</p>
                </div>
                <div ref={sixDivRef}>
                    <p>환영해요! 이제부터 저를,,</p>
                    <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                    <p>님</p>
                    <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setNickname)} />
                    <p>으로 불러주세요!</p>
                </div>
                <button onClick={handleNavigateToMain}>공유경제 시작하기</button>
            </div>
        </div>
    );
};

export default Register;
