import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";

import Home from "./components/pages/Home";
import Day0 from "./components/pages/Day0";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

import "./index.css";

const Main = styled.main`
  display: flex;
`;

const App = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <>
      <Navbar setSidebarStatus={() => setSidebarStatus((prev) => !prev)} />
      <Main>
        <Router>
          <Sidebar sidebarStatus={sidebarStatus} />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/day0" element={<Day0 />}></Route>
          </Routes>
        </Router>
      </Main>
    </>
  );
};

export default App;
