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
// import Role from "../pages/PrivatePages/Roles";
import FacilitiesListing from "../pages/PrivatePages/BuilderSociety/FacilitiesManagement/FacilitiesListing";
import AddUser from "../pages/PrivatePages/UserManagement/AddUser";
import UserListing from "../pages/PrivatePages/UserManagement/UserListing";
import AddSector from "../pages/PrivatePages/SocietyConfigration/HorizontalSociety/addSector";
import AddStreet from "../pages/PrivatePages/SocietyConfigration/HorizontalSociety/addStreet";
import AddPlots from "../pages/PrivatePages/SocietyConfigration/HorizontalSociety/addPlots";

const AppRouter = () => (
  <ConnectedRouter history={localhistory}>
    <Switch>
      <PublicRoute path="/login" exact>
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

      {/* <PrivateRoute path="/user_roles">
        <Role/>
      </PrivateRoute> */}

      <PrivateRoute path="/add_user">
        <AddUser />
      </PrivateRoute>
      <PrivateRoute path="/user_listing">
        <UserListing />
      </PrivateRoute>

      <PrivateRoute path="/add_sector">
        <AddSector/>
      </PrivateRoute>
      <PrivateRoute path="/add_street">
        <AddStreet />
      </PrivateRoute>
      <PrivateRoute path="/add_plots">
        <AddPlots />
      </PrivateRoute>

      <Redirect to="/login" exact />
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
