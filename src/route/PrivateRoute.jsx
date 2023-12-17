import React, { useContext } from "react";
import { Auth0Context } from "../context/Auth0Context";
import Layout from "../layout/Layout";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loginUser } = useContext(Auth0Context);

  if (!loginUser) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
