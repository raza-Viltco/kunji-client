import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Visitor from "../pages/Visitor";
import VisitorDetail from "../pages/Visitor/Detail";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/" element={<PrivateRoute component={Home} />}>
          <Route index element={<PrivateRoute component={Dashboard} />} />
          <Route path="visitor" element={<PrivateRoute component={Visitor} />}>
            <Route
              path=":id"
              element={<PrivateRoute component={VisitorDetail} />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
