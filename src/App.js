// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Mainpage from "./pages/Mainpage";
import LendMain from "./pages/LendMain";
import NeedMain from "./pages/NeedMain";
import Register from "./pages/Register";
import SocialRegister from "./pages/SocialRegister";
import Lendform from "./pages/LendForm";
import Needform from "./pages/NeedForm";
import Chat from "./pages/Chat";
import LendDetail from "./pages/LendDetail";
import NeedDetail from "./pages/NeedDetail";
import Review from "./pages/Review";
import LoginPage from "./pages/LoginPage";
import Redirection from "./pages/RedirectionPage";

import "./css/Appcss.css";
import "./axiosConfig";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TransitionGroup>
                <CSSTransition key="mainpage" classNames="page" timeout={500}>
                  <Mainpage />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/lend"
            element={
              <TransitionGroup>
                <CSSTransition key="lendmain" classNames="page" timeout={500}>
                  <LendMain />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/lend_form"
            element={
              <TransitionGroup>
                <CSSTransition key="lend_form" classNames="page" timeout={500}>
                  <Lendform />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/lend_detail"
            element={
              <TransitionGroup>
                <CSSTransition key="lend_detail" classNames="page" timeout={500}>
                  <LendDetail />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/need"
            element={
              <TransitionGroup>
                <CSSTransition key="need" classNames="page" timeout={500}>
                  <NeedMain />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/need_form"
            element={
              <TransitionGroup>
                <CSSTransition key="need_form" classNames="page" timeout={500}>
                  <Needform />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/need_detail"
            element={
              <TransitionGroup>
                <CSSTransition key="need_detail" classNames="page" timeout={500}>
                  <NeedDetail />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/register"
            element={
              <TransitionGroup>
                <CSSTransition key="register" classNames="page" timeout={500}>
                  <Register />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/social-register"
            element={
              <TransitionGroup>
                <CSSTransition key="socialRegister" classNames="page" timeout={500}>
                  <SocialRegister />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/Chat"
            element={
              <TransitionGroup>
                <CSSTransition key="Chat" classNames="page" timeout={500}>
                  <Chat />
                </CSSTransition>
              </TransitionGroup>
            }
          />

          <Route
            path="/review"
            element={
              <TransitionGroup>
                <CSSTransition key="review" classNames="page" timeout={500}>
                  <Review />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/loginPage"
            element={
              <TransitionGroup>
                <CSSTransition key="loginPage" classNames="page" timeout={500}>
                  <LoginPage />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/redirection"
            element={
              <TransitionGroup>
                <CSSTransition key="loginPage" classNames="page" timeout={500}>
                  <Redirection />
                </CSSTransition>
              </TransitionGroup>
            }
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
