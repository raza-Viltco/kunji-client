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
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

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
      <Redirect to="/login" exact />
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
