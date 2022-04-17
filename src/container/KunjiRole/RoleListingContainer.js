import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  kunjiRoleListing,
  assignPermission,
} from "../../redux/actions/KunjiRole/AddRole";

const roleListingContainer = (RoleListing) => () => {
  const dispatch = useDispatch();
  const permissionList = useSelector(
    (state) => state.kunjiRole.kunjiRoleListing
  );
  const local = useSelector((state) => state.kunjiRole.kunjiRole);
  const stateLoading = useSelector((state) => state.local.isLoading);
  const [permissions, setPermissions] = useState([]);

  const handleCheck = (e) => {
    if (e.target.checked === true) {
      setPermissions([...permissions, e.target.value]);
    } else {
      setPermissions(permissions.filter((item) => item !== e.target.value));
    }
  };

  const handlePermissions = () => {
    dispatch(assignPermission(permissions));
  };

  // console.log(permissions);
  console.log(local?.data?.id);

  useEffect(() => {
    dispatch(kunjiRoleListing());
  }, []);

  return (
    <RoleListing
      permissionList={permissionList}
      handleCheck={handleCheck}
      handlePermissions={handlePermissions}
      stateLoading={stateLoading}
    />
  );
};

export default roleListingContainer;
