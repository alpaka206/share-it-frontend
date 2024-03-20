// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import LendMain from './pages/LendMain';
import Register from './pages/Register';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/lend" element={<LendMain />} />
                <Route path="/register" element={<Register />} />
                {/* Add more routes here for other pages */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
