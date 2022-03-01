import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { getFromPersistance } from "../utils/functions";

const PublicRoute = (props) => {
  // const state = useSelector((state) => state.user.data);
  const state = getFromPersistance("kunji_auth_data");

  if (!state?.data?.token) {
    return (
      <Route {...props} exact={props.exact ? true : false}>
        {props.children}
      </Route>
    );
  }
  return <Redirect to="/" />;
};

export default PublicRoute;
