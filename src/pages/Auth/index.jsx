import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { ToastContainer } from "react-toastify";

import Button from "../../components/Button";
import Input from "../../components/Form/Input";
import AuthView from "../../components/AuthView/AuthView";
import loginContainer from "../../container/Auth/LoginContainer";
import "./Auth.css";

const Auth = ({
	initialValues,
	validationSchema,
	loginHandler,
	stateLoading,
}) => (
	<AuthView heading="Sign In" subject="Enter your email & password">
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={loginHandler}
		>
			{(props) => (
				<Form>
					{/* {console.log(props)} */}
					<Input
						margin="normal"
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						type="email"
						value={props.values.email}
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						// eslint-disable-next-line react/jsx-no-duplicate-props
						onBlur={props.handleBlur}
						error={props.errors.email}
						helperText
					/>
					<Input
						margin="normal"
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						value={props.values.password}
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						error={props.errors.password}
						helperText
					/>
					<Link to="/forgot_password">
						<p className="text-end m-0 forgot_text__link">
							forgot password!
						</p>
					</Link>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						isLoading={stateLoading}
					>
						Sign In
					</Button>
					<div className="form_bottom__line"></div>
					<Link to="/register">
						<p className="text-center m-0 form_signup__link">
							Do you have account? Sign UP
						</p>
					</Link>
					<ToastContainer position="top-center" />
				</Form>
			)}
		</Formik>
	</AuthView>
);

export default loginContainer(Auth);
