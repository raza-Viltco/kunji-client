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
import ServantApproval from "../SecurityManagement/Society/ServantApproval";
import GatePassApproval from "../SecurityManagement/Society/GatePassApproval";
import DeliveryBooking from "../SecurityManagement/Society/DeliveryBooking/deliveryBooking";
import PanicAlert from "../SecurityManagement/Society/PanicAlert";
import ChargesType from "../SocietyAdministration/ChargesType";
import GenerateBill from "../SocietyAdministration/GenerateBill";
import Notices from "../Notices/Society/Notices";
import TermsAndConditions from "../TermsAndConditions/Kunji";
import PropertyOwnerShip from "../PropertyOwnserShip";
import AssignOwnership from "../PropertyOwnserShip/assignOwnership";
import Complaints from "../SecurityManagement/Society/Complaints";
import ViewBill from "../SocietyAdministration/ViewBill";
import Assets from "../Assets/Society";
import SocietyListingView from "../Society/SocietyListingView";
import ViewProperty from "../PropertyOwnserShip/viewProperty";
import SocietyProfile from "../SocietyProfile";
import PropertyOwnerHorizontal from "../PropertyOwnserShip/PropertyOwnerHorizontal";
import ViewPropertyHor from "../PropertyOwnserShip/PropertyOwnerHorizontal/viewPropertyHor"
import AssignOwneHor from "../PropertyOwnserShip/PropertyOwnerHorizontal/assignOwnerHor";

const DashboardItems = () => {
  const location = useLocation();
  const userData = useSelector((state) => state.user.data);
  return (
    <>
      {
        location.pathname === "/add_society" ? (
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
        ) : location.pathname === "/add_kunji_staff" ? (
          <AddKunjiStaff />
        ) : location.pathname === "/list_kunji_staff" ? (
          <StaffKunjiMember />
        ) : location.pathname === "/add_kunji_department" ? (
          <AddKunjiDepartment />
        ) : location.pathname === "/society_visitor_list" ? (
          <VisitorList />
        ) : location.pathname === "/servant_visitor_list" ? (
          <ServantApproval />
        ) : location.pathname === "/gate_pass_approval" ? (
          <GatePassApproval />
        ) : location.pathname === "/society_delivery_booking" ? (
          <DeliveryBooking />
        ) : location.pathname === "/society_panic_alert" ? (
          <PanicAlert />
        ) : location.pathname === "/society_charges_type" ? (
          <ChargesType />
        ) : location.pathname === "/society_generate_bill" ? (
          <GenerateBill />
        ) : location.pathname === "/society_notices" ? (
          <Notices />
        ) : location.pathname === "/terms_condition" ? (
          <TermsAndConditions />
        ) : location.pathname === "/society_profile" ? (
          <SocietyProfile />
        ) : location.pathname === "/property_ownership" ? (
          <PropertyOwnerShip />
        ) : location.pathname === "/assign_ownership" ? (
          <AssignOwnership />
        ) : location.pathname === "/complaints" ? (
          <Complaints />
        ) : location.pathname === "/view_bill" ? (
          <ViewBill />
        ) : location.pathname === "/assets" ? (
          <Assets />
        ) : location.pathname === "/society_listing_view" ? (
          <SocietyListingView />
        ) : location.pathname === "/view_property" ? (
          <ViewProperty />
        ) 
        : location.pathname === "/property_owner_hor" ? (
          <PropertyOwnerHorizontal />
        )
        : location.pathname === "/view_property_hor" ? (
          <ViewPropertyHor />
        )
        : location.pathname === "/assign_owner_hor" ? (
          <AssignOwneHor />
        ): (
          <Dashboard />
        )
        // : userData?.data?.roles[0].name === "Super Admin" ? (
        //   <Dashboard />
        // ) : userData?.data?.roles[0].name === "Society Admin" ? (
        //   <SocietyDashboard />
        // ) : (
        //   ""
        // )
      }
    </>
  );
};

export default DashboardItems;
