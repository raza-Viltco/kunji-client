import React from "react";

import Card from "../../../../../components/Card";
import RoleList from "./RolesList";
import RoleListing from "./roleListing";
import UserRole from "./userRole";

const KunjiRole = () => {
  return (
    <Card>
      <UserRole />
      {/* <RoleListing /> */}
      <RoleList/>
    </Card>
  );
};
export default KunjiRole;
