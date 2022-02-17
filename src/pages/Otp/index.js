import React from "react";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import AuthView from "../../components/AuthView/AuthView";
import Input from "../../components/Form/Input";

const OtpVerification = () => {
  const initialValues = {
    otp: "",
  };

  const validationSchema = Yup.object().shape({
    otp: Yup.string().required("Otp is required."),
  });

  const otpHandler = (values) => {
    console.log(values);
  };

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
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </AuthView>
  );
};

export default OtpVerification;
