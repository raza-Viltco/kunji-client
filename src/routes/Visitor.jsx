import React from "react";
import { Route } from "react-router-dom";

import Visitor from "../pages/Visitor";
import VisitorDetail from "../pages/Visitor/Detail";

const VisitorRoutes = () => {
	return (
		<Route path="visitor" element={<Visitor />}>
			<Route path="detail" element={<VisitorDetail />} />
		</Route>
	);
};

export default VisitorRoutes;
