import React from "react";

import Card from "../../../../../components/Card";
import RoleListing from "./roleListing";
import UserRole from "./userRole";

const KunjiRole = () => {
  return (
    <Card>
      <UserRole />
      <RoleListing />
    </Card>
  );
};
export default KunjiRole;
