import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { login } from "../../redux/actions/user";

const loginContainer = (Login) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required."),
    password: Yup.string().required("Password is required."),
  });

  const loginHandler = (values, actions) => {
    dispatch(login({values, formikActions: actions}));
    actions.setSubmitting(false);
  };

  return (
    <Login
      initialValues={initialValues}
      validationSchema={validationSchema}
      loginHandler={loginHandler}
      stateLoading={stateLoading}
    />
  );
};

export default loginContainer;
