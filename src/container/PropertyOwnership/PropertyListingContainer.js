import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approveProperty,
  ownershipList,
  propertyList,
} from "../../redux/actions/AssignOwnership/Vertical/AssignOwnership";

const propertyListContainer = (PropertyList) => () => {
  const dispatch = useDispatch();

  const assignListData = useSelector(
    (state) => state.assignOwnership.propertyList
  );
  const stateLoading = useSelector((state) => state.local.isLoading);

  const ownershipListData = useSelector(
    (state) => state.assignOwnership.ownershipData
  );

  const approvePropertyData = useSelector(
    (state) => state.assignOwnership.approveProperty
  );
  useEffect(() => {
    dispatch(propertyList());
  }, []);

  useEffect(() => {
    dispatch(ownershipList());
  }, [approvePropertyData]);

  const handleAccept = (id) => {
    dispatch(approveProperty({ id, status: 1 }));
  };
  
  const handleReject = (id) => {
    dispatch(approveProperty({ id, status: 0 }));
  };

  return (
    <PropertyList
      handleAccept={handleAccept}
      handleReject={handleReject}
      assignListData={assignListData}
      stateLoading={stateLoading}
      ownershipListData={ownershipListData}
    />
  );
};
export default propertyListContainer;
