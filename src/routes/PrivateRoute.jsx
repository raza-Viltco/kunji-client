import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = (props) => {
    console.log(props)

	return props.children ? (
		<Route {...props}>{props.children}</Route>
	) : (
		<Route {...props} />
	);
};

export default PrivateRoute;
