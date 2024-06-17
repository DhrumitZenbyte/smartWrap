import React from "react";
import { Navigate } from "react-router-dom";

const Authmiddleware = ({ children }) => {
  const authUser = localStorage.getItem("authUser");

  if (!authUser) {
    return <Navigate to="/login" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authmiddleware;
