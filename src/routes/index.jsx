import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { localhistory } from "../redux/store";
import Auth from "../pages/Auth";
// import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import OtpVerification from "../pages/Otp";
import ForgotPasswordOtp from "../pages/ForgotPasswordOtp";
import RecoverPassword from "../pages/RecoverPassword";
// import Visitor from "../pages/Visitor";
// import VisitorDetail from "../pages/Visitor/Detail";
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
      <Redirect to="/login" />
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
