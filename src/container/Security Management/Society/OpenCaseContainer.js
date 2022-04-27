import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { complaintsCases } from "../../../redux/actions/SecurityManagement/Society/Complaints";

const openCaseContainer = (OpenCases) => () => {
  const dispatch = useDispatch();
  const openComplaints = useSelector((state) => state?.cases?.allCases?.open);

  useEffect(() => {
    dispatch(complaintsCases());
  }, []);

  return <OpenCases openComplaints={openComplaints} />;
};

export default openCaseContainer;
