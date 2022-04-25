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
  const initialState = useSelector((state) => state.kunjiRole.permissionId);
  const [permissions, setPermissions] = useState(initialState);

  // const filterItems = () => {
  //   let arr = [];
  //   const keys = Object.keys(permissionList);
  //   keys.forEach((key, index) => {
  //     permissionList[key].forEach((item) => {
  //       arr.push(item.id);
  //       // console.log(item.id)
  //     });
  //   });
  //   setPermissions(arr);
  // };

  const handleCheck = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);
    let permissionID = Number(e.target.value);
    if (e.target.checked === false) {
      setPermissions(permissions.filter((item) => item !== permissionID));
    } else {
      setPermissions([...permissions, permissionID]);
    }
  };

  console.log(permissions);

  // const handleCheck = (e) => {
  //   console.log(e.target.value);
  //   // console.log(e.target.checked)
  //   if (e.target.checked === true) {
  //     setPermissions([...permissions, e.target.value]);
  //   } else {
  //     setPermissions(permissions.filter((item) => item !== e.target.value));
  //   }
  // };

  // console.log(permissions);

  const handlePermissions = () => {
    dispatch(assignPermission(permissions));
  };
  // console.log(newPer)
  // console.log(local?.data?.id);

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
