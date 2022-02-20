import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import AuthView from "../../components/AuthView/AuthView";
import forgotPasswordContainer from "../../container/Auth/ForgotPasswordContainer";

const ForgotPassword = ({
  initialValues,
  validationSchema,
  forgotPasswordHandler,
  stateLoading,
}) => {
  return (
    <AuthView heading="Forgot Password" subject="Enter your email">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={forgotPasswordHandler}
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
              onBlur={props.handleBlur}
              error={props.errors.email}
              helperText
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              isLoading={stateLoading}
            >
              Send
            </Button>
            <div className="form_bottom__line"></div>
            <Link to="/login">
              <p className="text-center m-0 form_signup__link">
                Remember your password? Login
              </p>
            </Link>
          </Form>
        )}
      </Formik>
    </AuthView>
  );
};

export default forgotPasswordContainer(ForgotPassword);
