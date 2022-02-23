import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../redux/actions/user";

const registerContainer = (Register) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    mobile: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required."),
    password: Yup.string().required("Password is required."),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    mobile: Yup.string().required("Contact is required."),
  });

  const registerHandler = (values, actions) => {
    console.log(values);
    dispatch(register({ values, formikActions: actions }));
    actions.setSubmitting(false);
  };

  return (
    <Register
      initialValues={initialValues}
      validationSchema={validationSchema}
      registerHandler={registerHandler}
      stateLoading={stateLoading}
    />
  );
};

export default registerContainer;
