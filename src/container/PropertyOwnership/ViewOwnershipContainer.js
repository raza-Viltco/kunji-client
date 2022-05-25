import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { viewOwnership } from "../../redux/actions/AssignOwnership/Vertical/AssignOwnership";

const viewOwnershipContainer = (ViewProperty) => () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { ownershipId } = params;

  const viewOwnershipData = useSelector(
    (state) => state.assignOwnership.viewOwnership
  );
  console.log(viewOwnershipData, "viewOwnershipData");

  useEffect(() => {
    dispatch(viewOwnership(ownershipId));
  }, []);

  return <ViewProperty viewOwnershipData={viewOwnershipData} />;
};
export default viewOwnershipContainer;
