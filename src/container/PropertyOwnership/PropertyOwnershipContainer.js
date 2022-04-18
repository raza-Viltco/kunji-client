import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const assignOwnershipContainer = (AssignOwnership) => () => {
  const dispatch = useDispatch();

  const initialValues = {
    building: "",
    floor: "",
    appartment: "",
    owner_name: "",
    cnic: "",
    address: "",
    documents:"",
  };

  const validationSchema = Yup.object().shape({
    building: Yup.string().required("Building is required"),
    floor: Yup.string().required("Floor is required"),
    appartment: Yup.string().required("Appartment is required"),
    owner_name: Yup.string().required("Owner name is required"),
    cnic: Yup.string().required("Cnic is requires"),
    address: Yup.string().required("Adress is required"),
    documents:Yup.string().required("Document is required")
  });
  const handleAssignOwnership = () => {
    console.log("asignOwnership");
  };

  return (
    <AssignOwnership
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleAssignOwnership={handleAssignOwnership}
    />
  );
};
export default assignOwnershipContainer;
