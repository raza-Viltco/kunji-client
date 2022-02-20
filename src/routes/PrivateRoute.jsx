import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

import { getFromPersistance } from "../utils/functions";

const PrivateRoute = (props) => {
  const state = getFromPersistance("kunji_auth_data");

  if (state?.data?.token) return <Route {...props}>{props.children}</Route>;
  return <Redirect to="/login" />;
};

export default PrivateRoute;
