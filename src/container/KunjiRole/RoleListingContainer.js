import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { kunjiRoleListing } from "../../redux/actions/KunjiRole/AddRole";

const roleListingContainer = (RoleListing) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(kunjiRoleListing());
  }, []);

  return <RoleListing />;
};

export default roleListingContainer;
