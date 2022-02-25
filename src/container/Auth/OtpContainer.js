import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  registerOtp,
  forgotPasswordOtp,
  resendRegisterOtp,
} from "../../redux/actions/Auth/otp";
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

  const otpHandler = (values) => {
    if (params.register === ":register") {
      dispatch(registerOtp(values));
    } else {
      values.email = getFromPersistance("forgot_email");
      dispatch(forgotPasswordOtp(values));
    }
  };

  const resendOtpHandler = () => {
    dispatch(resendRegisterOtp());
  };

  return (
    <OtpVerification
      initialValues={initialValues}
      validationSchema={validationSchema}
      stateLoading={stateLoading}
      otpHandler={otpHandler}
      resendOtpHandler={resendOtpHandler}
    />
  );
};

export default otpContainer;
