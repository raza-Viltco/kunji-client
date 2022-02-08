import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Visitor from "../pages/Visitor";
import VisitorDetail from "../pages/Visitor/Detail";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Auth />} />
				<Route path="/" element={<Home />}>
					<Route index element={<Dashboard />} />
					<Route path="visitor" element={<Visitor />}>
						<Route path=":id" element={<VisitorDetail />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
