import { Navigate, Route } from "react-router-dom";

import React from "react";

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null; 
};

const PrivateRoute = ({ children }) => {

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
