// สำหรับผู้ว่าจ้าง/แอดมิน
import React from "react";
import { Routes, Route } from "react-router-dom";

import JobPost from "../pages/JobPost/JobPost";

const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/post-job" element={<JobPost />} />
    </Routes>
  );
};

export default AdminRoutes;
