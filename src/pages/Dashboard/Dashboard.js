import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/DashboardSidebar";

const Dashboard = () => {
  return (
    <DashboardSidebar>
      <h2> This is dashboard</h2>
      <Outlet />
    </DashboardSidebar>
  );
};

export default Dashboard;
