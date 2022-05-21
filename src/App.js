import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";

import Home from "./components/pages/Home";
import Day0 from "./components/pages/Day0";

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
  const [sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <>
      <Navbar setSidebarStatus={() => setSidebarStatus(!sidebarStatus)} />
      <Router>
        <Main>
          <Sidebar sidebarStatus={sidebarStatus} />
          <Content>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/day0" element={<Day0 />}></Route>
            </Routes>
          </Content>
        </Main>
      </Router>
    </>
  );
};

export default App;
