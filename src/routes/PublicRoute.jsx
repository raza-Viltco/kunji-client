import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = (props) => {
  return (
    <Route {...props} exact={props.exact ? true : false}>
      {props.children}
    </Route>
  );
};

export default PublicRoute;
