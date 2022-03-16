import React from "react";
import { useLocation } from "react-router-dom";

import Dashboard from "../Dashboard";
import AddSociety from "../Society/AddSociety";
import SocietyListing from "../Society/SocietyListing";
import Profile from "../Profile/index";
import BuilderRegisterUser from "../BuilderSociety/RegisterUser";
import RegisterStaff from "../BuilderSociety/StaffManagement/registerStaff";
import StaffListing from "../BuilderSociety/StaffManagement/staffListing";
import RegisterFlat from "../BuilderSociety/FlatManagemet/registerFlat";
import FlatListing from "../BuilderSociety/FlatManagemet/flatListing";
import RegisterAsset from "../BuilderSociety/AssetManagement/registerAsset";
import AssetListing from "../BuilderSociety/AssetManagement/assetListing";

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
      ) : location.pathname === "/builder_society_register" ? (
        <BuilderRegisterUser />
      ) : location.pathname === "/builder_staff_management" ? (
        <RegisterStaff />
      ) : location.pathname === "/staff_list" ? (
        <StaffListing />
      ) : location.pathname === "/register_flat" ? (
        <RegisterFlat />
      ) : location.pathname === "/flat_listing" ? (
        <FlatListing />
      ) : location.pathname === "/add_asset" ? (
        <RegisterAsset />
      ) : location.pathname === "/asset_list" ? (
        <AssetListing />
      ) : (
        <Dashboard />
      )}
    </>
  );
};

export default DashboardItems;
