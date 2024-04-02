import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nicknameError, setNicknameError] = useState('');

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

    const handleNext = async (e, ref) => {
        e.preventDefault();
        if (ref === secondDivRef) {
            if (!agreeChecked) return;
        }
        if (ref === thirdDivRef) {
            if (!/^[a-z0-9]{8,15}$/.test(username)) return; // 아이디 조건 검사 추가
            // 서버에 아이디 중복 확인 요청
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);
                if (response.data.length > 0) {
                    setUsernameError('중복된 아이디입니다.');
                    return;
                }
            } catch (error) {
                console.error('Error checking username:', error);
                return;
            }
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
            // 이메일 중복 확인 요청
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`);
                if (response.data.length > 0) {
                    setEmailError('중복된 이메일입니다.');
                    return;
                }
            } catch (error) {
                console.error('Error checking email:', error);
                return;
            }
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
    const handleCompleteRegistration = async () => {
        if (
            username === '' ||
            password === '' ||
            confirmPassword === '' ||
            email === '' ||
            confirmEmail === '' ||
            nickname === '' ||
            usernameError !== '' ||
            emailError !== '' ||
            nicknameError !== ''
        ) {
            // 필수 정보가 누락되었거나 에러가 있는 경우에는 회원가입을 완료하지 않습니다.
            return;
        }

        // 회원가입 정보를 서버로 전송합니다.
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
                title: '회원가입',
                body: `아이디: ${username}, 비밀번호: ${password}, 이메일: ${email}, 닉네임: ${nickname}`,
                userId: 1, // 임의의 userId 사용
            });
            console.log('회원가입 완료:', response.data);
            // 회원가입이 성공적으로 완료되면 홈 화면으로 이동합니다.
            navigate('/');
        } catch (error) {
            console.error('Error registering:', error);
            // 서버로의 요청이 실패한 경우에 대한 처리를 여기에 추가할 수 있습니다.
        }
    };

    // 회원가입 완료 버튼 클릭 시 회원가입을 완료합니다.
    const handleRegisterButtonClicked = () => {
        handleCompleteRegistration();
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
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="아이디 입력..."
                    />
                    <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setUsername)} />
                    <p>{usernameError}</p>
                    <p>아이디는 8-15자, 소문자 영어, 숫자만 사용할 수 있어요.</p>
                    <button onClick={(e) => handleNext(e, thirdDivRef)}>다음으로</button>
                    <p className="hello">hello</p>
                </div>
                <div ref={thirdDivRef}>
                    <p>비밀번호를 작성해주세요.</p>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호 입력..."
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
                        placeholder="비밀번호 재확인"
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
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@catholic.ac.kr"
                    />
                    <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setEmail)} />
                    <p>{emailError || '보다 신뢰할 수 있는 거래를 위해 필요해요.'}</p> {/* 이메일 중복 에러 표시 */}
                    <button onClick={(e) => handleNext(e, fifthDivRef)}>인증하기</button>
                    <p className="hello">hello</p>
                </div>
                <div ref={fifthDivRef}>
                    <p>작성하신 주소로 이메일을 보냈어요</p>
                    <input
                        type="email"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        placeholder="4자리 코드 입력"
                    />
                    <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setConfirmEmail)} />
                    <p>메일함을 확인해 주세요.</p>
                    <p>메일이 도착하지 않았나요?</p>
                    <button onClick={(e) => handleNext(e, sixDivRef)}>다음으로</button>
                    <p className="hello">hello</p>
                </div>
                <div ref={sixDivRef}>
                    <p>환영해요! 이제부터 저를,,</p>
                    <input
                        type="text"
                        value={nickname}
                        onChange={(e) => {
                            setNickname(e.target.value);
                            // 닉네임 입력 시에 발생하는 에러를 검사합니다.
                            if (!/^[a-zA-Z0-9\u3131-\uD79D]{1,15}$/.test(e.target.value)) {
                                setNicknameError('닉네임은 15자 이내로, 영어, 한글, 숫자만 사용 가능합니다.');
                            } else {
                                setNicknameError('');
                            }
                        }}
                        placeholder="username"
                    />
                    <p>{nicknameError}</p>
                    <p>닉네임은 15자 이내로, 영어, 한글, 숫자만 사용 가능합니다.</p>
                    <img src="/assets/delete_red.svg" alt="reset" onClick={() => handleReset(setNickname)} />
                    <p>으로 불러주세요!</p>
                </div>
                <button onClick={handleRegisterButtonClicked}>공유경제 시작하기</button>
            </div>
        </div>
    );
};

export default Register;
