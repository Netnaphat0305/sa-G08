// สำหรับนักศึกษา/ผู้ใช้ทั่วไป
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Board from "../pages/Board/Board";
import JobDetail from "../pages/Board/JobDetail";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<Board />} />
      <Route path="/post-detail" element={<JobDetail />} />
    </Routes>
  );
};

export default MainRoutes;
