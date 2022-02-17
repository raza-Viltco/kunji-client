import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";

import Input from "../../components/Form/Input";
import { login } from "../../redux/actions/user";
import AuthView from "../../components/AuthView/AuthView";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.data);

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
    resetForm(initialValues);
  };

  useEffect(() => {
    if (state?.data?.token) {
      navigate("/");
    }
  }, [state]);

  return (
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
              <p className="text-end m-0 forgot_text__link">forgot password!</p>
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
};

export default Auth;
