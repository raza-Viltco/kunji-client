import React from "react";
import { useLocation } from "react-router-dom";

import Dashboard from "../Dashboard";
import AddSociety from "../Society/AddSociety";
import SocietyListing from "../Society/SocietyListing";
import Profile from "../Profile/index";

const DashboardItems = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/add_society" ? (
        <AddSociety />
      ) : location.pathname === "/society_list" ? (
        <SocietyListing />
      ) : location.pathname === "/user_profile" ? (
        <Profile />
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default DashboardItems;
