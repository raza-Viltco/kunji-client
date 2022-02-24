import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

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
      enableReinitialize={true}
    >
      {(props) => (
        <Form>
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
          <div className="forgot_text__link">
            <Link to="/forgot_password">
              <p className="text-end m-0 ">forgot password!</p>
            </Link>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, borderRadius: "1rem" }}
            isLoading={stateLoading}
            size="small"
          >
            Sign In
          </Button>
          <div className="form_bottom__line"></div>
          <div className="form_signup__link">
            <Link to="/register">
              <p className="text-center m-0 ">Do you have account? Sign UP</p>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  </AuthView>
);

export default loginContainer(Auth);
