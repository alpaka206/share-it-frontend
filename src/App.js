// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import LendMain from './pages/LendMain';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainpage />} />
                <Route path="/lend" element={<LendMain />} />
                {/* Add more routes here for other pages */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
