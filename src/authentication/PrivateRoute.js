import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Login from "../pages/Login";

const PrivateRoute = () => {
  const location = useLocation();
  const user = true;
  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location }} re>
        {" "}
      </Navigate>
    );
  }
  return <Outlet />;
};

export default PrivateRoute;
