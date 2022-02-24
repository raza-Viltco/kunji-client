import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { getFromPersistance } from "../../utils/functions";
import { recoverPassword } from "../../redux/actions/Auth/password";

const recoverPasswordContainer = (RecoverPassword) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    password: "",
    password_confirmation: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required."),
    password_confirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const recoverPasswordHandler = (values) => {
    console.log(values);
    values.token = getFromPersistance("recovery_token");
    dispatch(recoverPassword(values));
  };

  return (
    <RecoverPassword
      initialValues={initialValues}
      validationSchema={validationSchema}
      recoverPasswordHandler={recoverPasswordHandler}
      stateLoading={stateLoading}
    />
  );
};

export default recoverPasswordContainer;
