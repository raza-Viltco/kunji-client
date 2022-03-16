import React from "react";
import * as Yup from "yup";

import UpdatePassword from "../../pages/PrivatePages/Profile/updatePassword";

const UpdatePasswordContainer = (UpdatePassword) => () => {
  const stateLoading = () => {};

  const validationSchema = Yup.object().shape({
    old_password: Yup.string()
      .required("Password is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}:;"'<>,.?/|\_₹])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password should be min 8 letter, with a symbol, upper and lower case letters and a number!"
      ),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password is required."),
  });
  const initialValues = {
    old_password: "",
    password: "",
    password_confirmation: "",
  };

  const updatePasswordHandler = () => {
    console.log("update password here");
  };
  return (
    <>
      <UpdatePassword
        initialValues={initialValues}
        validationSchema={validationSchema}
        updatePasswordHandler={updatePasswordHandler}
        //   stateLoading={stateLoading}
      />
    </>
  );
};
export default UpdatePasswordContainer;
