import React from "react";
import { Formik, Form } from "formik";

import AuthView from "../../../components/AuthView/AuthView";
import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";
import otpContainer from "../../../container/Auth/OtpContainer";

const OtpVerification = ({
  initialValues,
  validationSchema,
  otpHandler,
  stateLoading,
  resendOtpHandler,
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
            <p type="button" className="text-end  m-0" onClick={resendOtpHandler}>
              Resend Otp
            </p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2, borderRadius:20 }}
              isLoading={stateLoading}
              size="small"
            >
              Send
            </Button>
            <div className="form_bottom__line"></div>
          </Form>
        )}
      </Formik>
    </AuthView>
  );
};

export default otpContainer(OtpVerification);
