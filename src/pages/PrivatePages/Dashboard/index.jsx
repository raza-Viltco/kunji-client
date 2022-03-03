import React from "react";
import DashboardGraph from "./dashboardGraph";
import DashboardCards from "./dashboardCards";
import DashboardBottomCards from "./dashboardBottomCards";

const Dashboard = () => {
  return (
    <>
      <DashboardCards />
      <DashboardGraph />
      <DashboardBottomCards />
    </>
  );
};

export default Dashboard;
