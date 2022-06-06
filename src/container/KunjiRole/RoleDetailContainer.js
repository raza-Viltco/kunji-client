import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  kunjiRoleListing,
  editRole,
  assignPermission,
} from "../../redux/actions/KunjiRole/AddRole";

const roleDetailContainer = (RoleDetail) => () => {
  const dispatch = useDispatch();
  const { roleId } = useParams();
  const stateLoading = useSelector((state) => state.local.isLoading);
  const permissionList = useSelector(
    (state) => state.kunjiRole.kunjiRoleListing
  );
  const editRoleId = useSelector((state) => state.kunjiRole.editRole);
  const [updatePermissions, setUpdatePermissions] = useState([]);
  const [roleEdit, setroleEdit] = useState(false);

  const handleCheckPermissions = (e) => {
    // console.log(e.target.value);
    let permissionID = Number(e.target.value);
    if (e.target.checked === false) {
      setUpdatePermissions(
        updatePermissions.filter((item) => item !== permissionID)
      );
    } else {
      setUpdatePermissions([...updatePermissions, permissionID]);
    }
  };

  console.log(updatePermissions);

  const handleUpdatePermissions = () => {
    dispatch(assignPermission({ updatePermissions, roleId }));
  };

  useEffect(() => {
    dispatch(kunjiRoleListing());
  }, []);

  useEffect(() => {
    if (roleId) {
      dispatch(editRole(roleId));
    }
  }, [roleId]);

  useEffect(() => {
    if (!!editRoleId && !!editRoleId.length > 0) {
      setUpdatePermissions(editRoleId);
      setroleEdit(true);
    }
  }, [editRoleId]);

  return (
    <RoleDetail
      permissionList={permissionList}
      updatePermissions={updatePermissions}
      roleEdit={roleEdit}
      stateLoading={stateLoading}
      handleCheckPermissions={handleCheckPermissions}
      handleUpdatePermissions={handleUpdatePermissions}
    />
  );
};

export default roleDetailContainer;
