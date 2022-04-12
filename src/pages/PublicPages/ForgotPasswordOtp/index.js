import React from "react";
import { Formik, Form } from "formik";

import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";
import AuthView from "../../../components/AuthView/AuthView";
import otpContainer from "../../../container/Auth/OtpContainer";
import InputError from "../../../components/Form/InputError";

const ForgotPasswordOtp = ({
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
              placeholder="Enter Email"
              value={props.values.otp}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              // error={props.errors.otp}
              // helperText
              className={
                props.errors.otp && props.touched.otp
                  ? "input-outline"
                  : "bootstyle"
              }
            />
            {props.touched.otp && Boolean(props.errors.otp) && (
              <InputError>{props.errors.otp}</InputError>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
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

export default otpContainer(ForgotPasswordOtp);
