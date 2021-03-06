import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";

import Home from "./components/pages/Home";
import Day0 from "./components/pages/days/Day0";
import Day1 from "./components/pages/days/Day1";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/sidebar/Sidebar";

import "./index.css";

const Main = styled.main`
  display: flex;
`;

const Content = styled.div`
  margin: 8vh auto;
`;

const App = () => {
  let cursorPosX = 0;
  window.addEventListener("click", (e) => {
    cursorPosX = e.offsetX;
    closeSidebar();
  });

  const [sidebarStatus, setSidebarStatus] = useState(false);

  const windowWidth = window.innerWidth;
  const sidebarWidth = windowWidth * 0.6;

  function closeSidebar() {
    if (
      sidebarStatus == false &&
      cursorPosX > sidebarWidth &&
      windowWidth <= 450
    ) {
      setSidebarStatus(true);
    }
  }

  return (
    <>
      <Navbar setSidebarStatus={() => setSidebarStatus(!sidebarStatus)} />
      <Router>
        <Main>
          <Sidebar sidebarStatus={sidebarStatus} />
          <Content>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="day0" element={<Day0 />} />
              <Route path="day1" element={<Day1 />} />
            </Routes>
          </Content>
        </Main>
      </Router>
    </>
  );
};

export default App;
