import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { complaintsCases } from "../../../redux/actions/SecurityManagement/Society/Complaints";

const closeCaseContainer = (CloseCases) => () => {
  const dispatch = useDispatch();
  const closeComplaints = useSelector((state) => state?.cases?.allCases?.close);
  console.log(closeComplaints);

  useEffect(() => {
    dispatch(complaintsCases());
  }, []);

  return <CloseCases closeComplaints={closeComplaints} />;
};

export default closeCaseContainer;
