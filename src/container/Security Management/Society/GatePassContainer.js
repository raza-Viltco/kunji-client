import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  gateApprovalList,
  gatePassApproval,
} from "../../../redux/actions/SecurityManagement/Society/GatePassApproval";

const gatePassContainer = (GatePassApprovalList) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);
  const gatePassData = useSelector(
    (state) => state.servantApproval.gatePassList
  );
  const gateApproved = useSelector(
    (state) => state.servantApproval.gatePassApproval
  );
  console.log(gateApproved);

  const handleApprovalAcceptance = (id, status) => {
    // console.log(id, status);
    if (status === 0 || 2) {
      dispatch(gatePassApproval({ id, status: 1 }));
    }
  };

  const handleApprovalRejection = (id, status) => {
    // console.log(id, status);
    if (status === 0 || 1) {
      dispatch(gatePassApproval({ id, status: 2 }));
    }
  };

  useEffect(() => {
    dispatch(gateApprovalList());
  }, [gateApproved]);

  return (
    <GatePassApprovalList
      stateLoading={stateLoading}
      gatePassData={gatePassData}
      handleApprovalRejection={handleApprovalRejection}
      handleApprovalAcceptance={handleApprovalAcceptance}
    />
  );
};

export default gatePassContainer;
