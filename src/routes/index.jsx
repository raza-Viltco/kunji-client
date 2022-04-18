import React from "react";
import { Switch, Redirect } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { localhistory } from "../redux/store";
import Auth from "../pages/PublicPages/Auth";
import Register from "../pages/PublicPages/Register";
import ForgotPassword from "../pages/PublicPages/ForgotPassword";
import OtpVerification from "../pages/PublicPages/Otp";
import ForgotPasswordOtp from "../pages/PublicPages/ForgotPasswordOtp";
import RecoverPassword from "../pages/PublicPages/RecoverPassword";
import Home from "../pages/PrivatePages/Home";
import AddSociety from "../pages/PrivatePages/Society/AddSociety";
import SocietyListing from "../pages/PrivatePages/Society/SocietyListing";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/PrivatePages/Profile";
import BuilderRegisterUser from "../pages/PrivatePages/BuilderSociety/RegisterUser";
import RegisterStaff from "../pages/PrivatePages/BuilderSociety/StaffManagement/registerStaff";
import StaffListing from "../pages/PrivatePages/BuilderSociety/StaffManagement/staffListing";
import RegisterFlat from "../pages/PrivatePages/BuilderSociety/FlatManagemet/RegistFlat";
import FlatListing from "../pages/PrivatePages/BuilderSociety/FlatManagemet/FlatListing";
import RegisterAsset from "../pages/PrivatePages/BuilderSociety/AssetManagement/AddAsset";
import AssetListing from "../pages/PrivatePages/BuilderSociety/AssetManagement/AssetListing";
import FacilitiesListing from "../pages/PrivatePages/BuilderSociety/FacilitiesManagement/FacilitiesListing";
import AddSector from "../pages/PrivatePages/SocietyConfigration/HorizontalSociety/addSector";
import AddStreet from "../pages/PrivatePages/SocietyConfigration/HorizontalSociety/addStreet";
import AddPlots from "../pages/PrivatePages/SocietyConfigration/HorizontalSociety/addPlots";
import AddApartment from "../pages/PrivatePages/SocietyConfigration/VerticalSociety/addApartment";
import DefineBuilding from "../pages/PrivatePages/SocietyConfigration/VerticalSociety/defineBuilding";
import KunjiRole from "../pages/PrivatePages/UserManagement/Kunji/Role";
import UserKunjiCreation from "../pages/PrivatePages/UserManagement/Kunji/UserCreation";
import UserKunjiApproval from "../pages/PrivatePages/UserManagement/Kunji/UserApproval";
import AddKunjiStaff from "../pages/PrivatePages/StaffManagement/Kunji/AddStaff";
import StaffKunjiMember from "../pages/PrivatePages/StaffManagement/Kunji/StaffMember";
import AddKunjiDepartment from "../pages/PrivatePages/Department/Kunji";
import VisitorList from "../pages/PrivatePages/SecurityManagement/Society/VisitorList";
import ServantApproval from "../pages/PrivatePages/SecurityManagement/Society/ServantApproval";
import GatePassApproval from "../pages/PrivatePages/SecurityManagement/Society/GatePassApproval";
import DeliveryBooking from "../pages/PrivatePages/SecurityManagement/Society/DeliveryBooking/deliveryBooking";
import PanicAlert from "../pages/PrivatePages/SecurityManagement/Society/PanicAlert";
import ChargesType from "../pages/PrivatePages/SocietyAdministration/ChargesType";
import GenerateBill from "../pages/PrivatePages/SocietyAdministration/GenerateBill";
import Notices from "../pages/PrivatePages/Notices/Society/Notices";
import TermsAndConditions from "../pages/PrivatePages/TermsAndConditions/Kunji";
import PropertyOwnerShip from "../pages/PrivatePages/PropertyOwnserShip";
import AssignOwnership from "../pages/PrivatePages/PropertyOwnserShip/assignOwnership";
import Complaints from "../pages/PrivatePages/SecurityManagement/Society/Complaints";
import ViewBill from "../pages/PrivatePages/SocietyAdministration/ViewBill";
import Assets from "../pages/PrivatePages/Assets/Society";
import SocietyListingView from "../pages/PrivatePages/Society/SocietyListingView";
import ViewProperty from "../pages/PrivatePages/PropertyOwnserShip/viewProperty";
import SocietyProfile from "../pages/PrivatePages/SocietyProfile";

const AppRouter = () => (
  <ConnectedRouter history={localhistory}>
    <Switch>
      <PublicRoute path="/manage/login" exact>
        <Auth />
      </PublicRoute>
      <PublicRoute path="/register">
        <Register />
      </PublicRoute>
      <PublicRoute path="/forgot_password">
        <ForgotPassword />
      </PublicRoute>
      <PublicRoute path="/otp_verification/:register">
        <OtpVerification />
      </PublicRoute>
      <PublicRoute path="/otp_verification/:forgot">
        <ForgotPasswordOtp />
      </PublicRoute>
      <PublicRoute path="/recover_password">
        <RecoverPassword />
      </PublicRoute>

      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
      <PrivateRoute path="/add_society">
        <AddSociety />
      </PrivateRoute>
      <PrivateRoute path="/society_list">
        <SocietyListing />
      </PrivateRoute>
      <PrivateRoute path="/add_asset">
        <RegisterAsset />
      </PrivateRoute>
      <PrivateRoute path="/asset_list">
        <AssetListing />
      </PrivateRoute>

      <PrivateRoute path="/builder_society_register">
        <BuilderRegisterUser />
      </PrivateRoute>
      <PrivateRoute path="/builder_staff_management">
        <RegisterStaff />
      </PrivateRoute>
      <PrivateRoute path="/staff_list">
        <StaffListing />
      </PrivateRoute>
      <PrivateRoute path="/register_flat">
        <RegisterFlat />
      </PrivateRoute>
      <PrivateRoute path="/flat_listing">
        <FlatListing />
      </PrivateRoute>
      <PrivateRoute path="/facility_listing">
        <FacilitiesListing />
      </PrivateRoute>

      <PrivateRoute path="/user_profile">
        <Profile />
      </PrivateRoute>

      <PrivateRoute path="/add_sector">
        <AddSector />
      </PrivateRoute>
      <PrivateRoute path="/add_street">
        <AddStreet />
      </PrivateRoute>
      <PrivateRoute path="/add_plots">
        <AddPlots />
      </PrivateRoute>

      <PrivateRoute path="/add_apartment">
        <AddApartment />
      </PrivateRoute>
      <PrivateRoute path="/define_building">
        <DefineBuilding />
      </PrivateRoute>

      <PrivateRoute path="/kunji_Role">
        <KunjiRole />
      </PrivateRoute>

      <PrivateRoute path="/user_kunji_creation">
        <UserKunjiCreation />
      </PrivateRoute>

      <PrivateRoute path="/user_kunji_approval">
        <UserKunjiApproval />
      </PrivateRoute>

      <PrivateRoute path="/add_kunji_staff">
        <AddKunjiStaff />
      </PrivateRoute>

      <PrivateRoute path="/list_kunji_staff">
        <StaffKunjiMember />
      </PrivateRoute>

      <PrivateRoute path="/add_kunji_department">
        <AddKunjiDepartment />
      </PrivateRoute>

      <PrivateRoute path="/society_visitor_list">
        <VisitorList />
      </PrivateRoute>

      <PrivateRoute path="/servant_visitor_list">
        <ServantApproval/>
      </PrivateRoute>

      <PrivateRoute path="/gate_pass_approval">
        <GatePassApproval/>
      </PrivateRoute>

      
      <PrivateRoute path="/society_delivery_booking">
        <DeliveryBooking/>
      </PrivateRoute>

      <PrivateRoute path="/society_panic_alert">
        <PanicAlert/>
      </PrivateRoute>

      <PrivateRoute path="/society_charges_type">
        <ChargesType/>
      </PrivateRoute>

      <PrivateRoute path="/society_generate_bill">
        <GenerateBill/>
      </PrivateRoute>

      <PrivateRoute path="/society_notices">
        <Notices/>
      </PrivateRoute>

      <PrivateRoute path="/terms_condition">
        <TermsAndConditions/>
      </PrivateRoute>

      <PrivateRoute path="/society_profile">
        <SocietyProfile/>
      </PrivateRoute>

      <PrivateRoute path="/property_ownership">
        <PropertyOwnerShip/>
      </PrivateRoute>

      <PrivateRoute path="/assign_ownership">
        <AssignOwnership/>
      </PrivateRoute>

      <PrivateRoute path="/complaints">
        <Complaints/>
      </PrivateRoute>

      <PrivateRoute path="/view_bill">
        <ViewBill/>
      </PrivateRoute>

      <PrivateRoute path="/assets">
        <Assets/>
      </PrivateRoute>

      <PrivateRoute path="/society_listing_view">
        <SocietyListingView/>
      </PrivateRoute>

      <PrivateRoute path="/view_property">
        <ViewProperty/>
      </PrivateRoute>

      <Redirect to="/login" exact />
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
