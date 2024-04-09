// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import LendMain from "./pages/LendMain";
import NeedMain from "./pages/NeedMain";
import Register from "./pages/Register";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/lend" element={<LendMain />} />
        <Route path="/need" element={<NeedMain />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Chat" element={<Chat />} />
        {/* Add more routes here for other pages */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
