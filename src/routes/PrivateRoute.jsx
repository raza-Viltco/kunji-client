import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

import { getFromPersistance } from "../utils/functions";

const PrivateRoute = (props) => {
  const state = getFromPersistance("kunji_auth_data");
  // const state = useSelector((state) => state.user.data);
  console.log(state?.data?.token);

  if (state?.data?.token) {
    return (<Route {...props}>{props.children}</Route>);
  }
  return <Redirect to="/login" />;
};

export default PrivateRoute;
