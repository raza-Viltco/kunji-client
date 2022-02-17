import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../components/Form/Input";
import AuthView from "../../components/AuthView/AuthView";
import { register } from "../../redux/actions/user";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.data);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required."),
    password: Yup.string().required("Password is required."),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    mobile: Yup.string().required("Contact is required."),
  });

  const registerHandler = (values, { resetForm }) => {
    console.log(values);
    dispatch(register(values));
    resetForm(values);
  };

  useEffect(() => {
    if (state?.data?.token) {
      navigate("/otp_verification");
    }
  }, [state]);

  return (
    <AuthView heading="Sign Up" subject="Enter your email & mobile no.">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={registerHandler}
      >
        {(props) => (
          <Form>
            <Input
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              type="text"
              value={props.values.name}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              error={props.errors.name}
              helperText
            />
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
            <Input
              margin="normal"
              fullWidth
              name="password_confirmation"
              label="Confirm Password"
              type="password"
              id="password_confirmation"
              value={props.values.password_confirmation}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              error={props.errors.password_confirmation}
              helperText
            />
            <Input
              margin="normal"
              fullWidth
              name="mobile"
              label="Contact"
              type="text"
              id="mobile"
              value={props.values.mobile}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              error={props.errors.mobile}
              helperText
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <div className="form_bottom__line"></div>
            <Link to="/login">
              <p className="text-center m-0 form_signup__link">
                Already have an account? Sign in
              </p>
            </Link>
          </Form>
        )}
      </Formik>
    </AuthView>
  );
};

export default Register;
