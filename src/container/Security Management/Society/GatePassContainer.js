import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { gateApprovalList } from "../../../redux/actions/SecurityManagement/Society/GatePassApproval";

const gatePassContainer = (GatePassApprovalList) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  useEffect(() => {
    dispatch(gateApprovalList());
  }, []);

  return <GatePassApprovalList stateLoading={stateLoading}/>;
};

export default gatePassContainer;
