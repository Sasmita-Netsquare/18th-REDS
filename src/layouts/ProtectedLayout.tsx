import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout: React.FC = () => {
  const isAuthenticated = () => !!Cookies.get("token");
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedLayout;
