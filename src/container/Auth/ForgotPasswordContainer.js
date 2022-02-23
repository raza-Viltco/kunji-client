import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { forgotPassword } from "../../redux/actions/password";

const forgotPasswordContainer = (ForgotPassword) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required."),
  });

  const forgotPasswordHandler = (values, actions) => {
    console.log(values);
    dispatch(forgotPassword({values, formikActions: actions}));
    actions.setSubmitting(false);
  };

  return (
    <ForgotPassword
      initialValues={initialValues}
      validationSchema={validationSchema}
      forgotPasswordHandler={forgotPasswordHandler}
      stateLoading={stateLoading}
    />
  );
};

export default forgotPasswordContainer;
