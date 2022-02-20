import React from "react";
import { Formik, Form } from "formik";

import AuthView from "../../components/AuthView/AuthView";
import Input from "../../components/Form/Input";
import Button from "../../components/Button";
import otpContainer from "../../container/Auth/OtpContainer";

const OtpVerification = ({
  initialValues,
  validationSchema,
  otpHandler,
  stateLoading,
}) => {
  return (
    <AuthView heading="OTP Verification" subject="Enter the otp">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={otpHandler}
      >
        {(props) => (
          <Form>
            <Input
              margin="normal"
              fullWidth
              name="otp"
              label="Otp Code"
              type="text"
              id="otp"
              value={props.values.otp}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              error={props.errors.otp}
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
          </Form>
        )}
      </Formik>
    </AuthView>
  );
};

export default otpContainer(OtpVerification);
