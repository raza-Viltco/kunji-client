import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { login } from "../../redux/actions/user";

const loginContainer = Login => () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const state = useSelector((state) => state.user.data);
	const stateLoading = useSelector((state) => state.local.isLoading);

	const initialValues = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required."),
		password: Yup.string().required("Password is required."),
	});

	const loginHandler = (values, { resetForm }) => {
		console.log(values);
		dispatch(login(values));
		// resetForm(initialValues);
	};

	useEffect(() => {
		if (state?.data?.token) {
			navigate("/");
		}
	}, [navigate, state]);

	return (
		<Login
			initialValues={initialValues}
			validationSchema={validationSchema}
			loginHandler={loginHandler}
			stateLoading={stateLoading}
		/>
	);
};

export default loginContainer;
