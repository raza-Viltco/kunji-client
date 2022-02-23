import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { registerOtp, forgotPasswordOtp } from "../../redux/actions/otp";
import { getFromPersistance } from "../../utils/functions";

const otpContainer = (OtpVerification) => () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    otp: "",
  };

  const validationSchema = Yup.object().shape({
    otp: Yup.string().required("Otp is required."),
  });

  const otpHandler = (values, actions) => {
    console.log(values);
    if (params === ":register") {
      dispatch(registerOtp({ values, formikActions: actions }));
    } else {
      values.email = getFromPersistance("forgot_email");
      dispatch(forgotPasswordOtp({ values, formikActions: actions }));
    }
    actions.setSubmitting(false);
  };

  return (
    <OtpVerification
      initialValues={initialValues}
      validationSchema={validationSchema}
      otpHandler={otpHandler}
      stateLoading={stateLoading}
    />
  );
};

export default otpContainer;
