import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { userDepartment } from "../../redux/actions/KunjiRole/UserCreation";

const viewRoleContainer = (ViewRole) => () => {
  const dispatch = useDispatch();
  const userCreationData = useSelector((state) => state.userDepartment.data);

  const rolesDetail = userCreationData?.data?.roles;

  useEffect(() => {
    dispatch(userDepartment());
  }, []);

  return <ViewRole rolesDetail={rolesDetail} />;
};

export default viewRoleContainer;
