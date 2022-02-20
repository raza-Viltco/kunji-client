import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import Button from "../../components/Button"
import Input from "../../components/Form/Input";
import AuthView from "../../components/AuthView/AuthView";
import registerContainer from "../../container/Auth/RegisterContainer";

const Register = ({
  initialValues,
  validationSchema,
  registerHandler,
  stateLoading,
}) => {
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
              isLoading={stateLoading}
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

export default registerContainer(Register);
