import { useState } from 'react';
import MainpageLogin from './MainpageLogin';
import MainpageUnLogin from './MainpageUnLogin';
function Mainpage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return <div>{isLoggedIn ? <MainpageLogin /> : <MainpageUnLogin />}</div>;
}
export default Mainpage;
