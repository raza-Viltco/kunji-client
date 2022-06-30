import React from "react";
import { useSelector } from "react-redux";

import Dashboard from "../Dashboard";
import SocietyDashboard from "../SocietyDashboard";

const DashboardItems = () => {
  const userData = useSelector((state) => state.user.data);

  return (
    <>
      {userData?.data?.role.name === "kunji admin" ? (
        <Dashboard />
      ) : userData?.data?.role.name === "Society Admin" ||
        userData?.data?.role.name === "Security Guard" ? (
        <SocietyDashboard />
      ) : (
        ""
      )}
    </>
  );
};

export default DashboardItems;
