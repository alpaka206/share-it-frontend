// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Mainpage} />
                {/* Add more routes here for other pages */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
