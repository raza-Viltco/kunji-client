import React from "react";

const emergencyContactContainer = (EmergencyContact) => () => {
  const initialValues = {
    emergency_contact: ["", "", ""],
  };

  return <EmergencyContact initialValues={initialValues} />;
};

export default emergencyContactContainer;
