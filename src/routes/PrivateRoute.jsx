import React from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getFromPersistance } from "../utils/functions";

const PrivateRoute = ({ component: ReactComponent }) => {
	// const state = useSelector((state) => state);
	const state = getFromPersistance("kunji_auth_data");

	if (state?.token) return <ReactComponent />;
	return <Navigate to="/login" />;
};

export default PrivateRoute;
