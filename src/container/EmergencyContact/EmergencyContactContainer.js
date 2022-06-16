import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContacts } from "../../redux/actions/EmergencyContacts/EmergencyContacts";

const emergencyContactContainer = (EmergencyContact) => () => {
  const dispatch = useDispatch();

  const initialValues = {
    emergency_contact: ["", "", ""],
  };

  const handleCreateContacts = (values, formikActions) => {
    console.log("clickeed");
    dispatch(createContacts({ values, formikActions }));
  };

  return (
    <EmergencyContact
      initialValues={initialValues}
      handleCreateContacts={handleCreateContacts}
    />
  );
};

export default emergencyContactContainer;
