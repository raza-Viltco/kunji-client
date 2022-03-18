import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { updatePassword } from "../../redux/actions/Auth/password";

const updatePasswordContainer = (UpdatePassword) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    old_password: "",
    password: "",
    password_confirmation: "",
  };

  const validationSchema = Yup.object().shape({
    old_password: Yup.string().required("Password is required"),
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

  const updatePasswordHandler = (values) => {
    console.log(values);
    dispatch(updatePassword(values));
  };

  return (
    <>
      <UpdatePassword
        initialValues={initialValues}
        validationSchema={validationSchema}
        updatePasswordHandler={updatePasswordHandler}
        stateLoading={stateLoading}
      />
    </>
  );
};
export default updatePasswordContainer;
