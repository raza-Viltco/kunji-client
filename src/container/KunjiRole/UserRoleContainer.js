import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {addKunjiRole} from "../../redux/actions/KunjiRole/AddRole"

const userRoleContainer = (UserRole) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Role name is required!").matches(
      /^[aA-zZ\s]+$/,
      "Only alphabets are allowed for role name "
    ),
  });

  const addRoleHandler = (values, formikActions) => {
    dispatch(addKunjiRole({values, formikActions}))
  };

  return (
    <UserRole
      initialValues={initialValues}
      validationSchema={validationSchema}
      stateLoading={stateLoading}
      addRoleHandler={addRoleHandler}
    />
  );
};

export default userRoleContainer;
