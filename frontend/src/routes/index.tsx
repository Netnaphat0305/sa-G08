import React from "react";
import Navbar from "../components/Navbar";
import MainRoutes from "./MainRoutes";
import AdminRoutes from "./EmAdminRoutes";

const AllRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <AdminRoutes />
    </>
  );
};

export default AllRoutes;
