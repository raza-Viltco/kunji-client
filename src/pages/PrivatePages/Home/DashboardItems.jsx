import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Dashboard from "../Dashboard";
import AddSociety from "../Society/AddSociety";
import SocietyListing from "../Society/SocietyListing";
import Profile from "../Profile/index";
import BuilderRegisterUser from "../BuilderSociety/RegisterUser";
import RegisterStaff from "../BuilderSociety/StaffManagement/registerStaff";
import StaffListing from "../BuilderSociety/StaffManagement/staffListing";
import RegisterFlat from "../BuilderSociety/FlatManagemet/RegistFlat";
import FlatListing from "../BuilderSociety/FlatManagemet/FlatListing";
import RegisterAsset from "../BuilderSociety/AssetManagement/AddAsset";
import AssetListing from "../BuilderSociety/AssetManagement/AssetListing";
import FacilitiesListing from "../BuilderSociety/FacilitiesManagement/FacilitiesListing";
import SocietyDashboard from "../SocietyDashboard";
import AddSector from "../SocietyConfigration/HorizontalSociety/addSector";
import AddStreet from "../SocietyConfigration/HorizontalSociety/addStreet";
import AddPlots from "../SocietyConfigration/HorizontalSociety/addPlots";
import AddApartment from "../SocietyConfigration/VerticalSociety/addApartment";
import DefineBuilding from "../SocietyConfigration/VerticalSociety/defineBuilding";
import KunjiRole from "../UserManagement/Kunji/Role";
import UserKunjiCreation from "../UserManagement/Kunji/UserCreation";
import UserKunjiApproval from "../UserManagement/Kunji/UserApproval";
import AddKunjiStaff from "../StaffManagement/Kunji/AddStaff";
import StaffKunjiMember from "../StaffManagement/Kunji/StaffMember";
import AddKunjiDepartment from "../Department/Kunji";
import VisitorList from "../SecurityManagement/Society/VisitorList";

const DashboardItems = () => {
  const location = useLocation();
  const userData = useSelector((state) => state.user.data);
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
      ) : location.pathname === "/facility_listing" ? (
        <FacilitiesListing />
      ) : location.pathname === "/add_sector" ? (
        <AddSector />
      ) : location.pathname === "/add_street" ? (
        <AddStreet />
      ) : location.pathname === "/add_plots" ? (
        <AddPlots />
      ) : location.pathname === "/add_apartment" ? (
        <AddApartment />
      ) : location.pathname === "/define_building" ? (
        <DefineBuilding />
      ) : location.pathname === "/kunji_Role" ? (
        <KunjiRole />
      ) : location.pathname === "/user_kunji_creation" ? (
        <UserKunjiCreation />
      ) : location.pathname === "/user_kunji_approval" ? (
        <UserKunjiApproval />
      ): location.pathname === "/add_kunji_staff" ? (
        <AddKunjiStaff />
      ) 
      : location.pathname === "/list_kunji_staff" ? (
        <StaffKunjiMember />
      ) 
      : location.pathname === "/add_kunji_department" ? (
        <AddKunjiDepartment />
      ) 
      : location.pathname === "/society_visitor_list" ? (
        <VisitorList />
      ) 
      : userData?.data?.roles[0].name === "Super Admin" ? (
        <Dashboard />
      ) : userData?.data?.roles[0].name === "Society Admin" ? (
        <SocietyDashboard />
      ) : (
        ""
      )}
    </>
  );
};

export default DashboardItems;
