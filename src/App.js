// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import Mainpage from './pages/Mainpage';
import LendMain from './pages/LendMain';
import NeedMain from './pages/NeedMain';
import Register from './pages/Register';
import Lendform from './pages/LendForm';
import Needform from './pages/NeedForm';
import Chat from './pages/Chat';
import LendDetail from './pages/LendDetail';
import MyPage from './pages/MyPage';
import Review from './pages/Review';
import LoginPage from './pages/LoginPage';

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/lend" element={<LendMain />} />
                    <Route path="/lend_form" element={<Lendform />} />
                    <Route path="/need" element={<NeedMain />} />
                    <Route path="/need_form" element={<Needform />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Chat" element={<Chat />} />
                    <Route path="/lend_detail" element={<LendDetail />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/Review" element={<Review />} />
                    <Route path="/LoginPage" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
