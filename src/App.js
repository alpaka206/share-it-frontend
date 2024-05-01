// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import Mainpage from './pages/Mainpage';
import LendMain from './pages/LendMain';
import NeedMain from './pages/NeedMain';
import Register from './pages/Register';
import Lendform from './pages/Lend_form';
import Chat from './pages/Chat';
import LendDetail from './pages/LendDetail';

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/lend" element={<LendMain />} />
                    <Route path="/lend_form" element={<Lendform />} />
                    <Route path="/need" element={<NeedMain />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Chat" element={<Chat />} />
                    <Route path="/lend_detail" element={<LendDetail />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
