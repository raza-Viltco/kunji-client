import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";
import AuthView from "../../../components/AuthView/AuthView";
import forgotPasswordContainer from "../../../container/Auth/ForgotPasswordContainer";
import InputError from "../../../components/Form/InputError";

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
              // error={props.errors.email}
              helperText
              className={props.errors.email && props.touched.email?
                "input-outline" :"bootstyle"
                }
            />
                    {props.touched.email && props.errors.email && (
              <InputError>{props.errors.email}</InputError>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius:20 }}
              isLoading={stateLoading}
              size="small"
            >
              Send
            </Button>
            <div className="form_bottom__line"></div>
            <div className="form_signup__link">
              <Link to="/login">
                <p className="text-center m-0 ">
                  Remember your password? Login
                </p>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </AuthView>
  );
};

export default forgotPasswordContainer(ForgotPassword);
