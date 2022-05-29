import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  departmentListing,
  departmentStatus,
} from "../../../redux/actions/Department/Kunji/department";

const departmentListingContainer = (DepartmentList) => () => {
  const dispatch = useDispatch();

  const stateLoading = useSelector((state) => state.local.isLoading);
  const alldepartmentList = useSelector((state) => state.userDepart.data);
  const depStatus = useSelector((state) => state.userDepart.depStatus);


  const handleDepartmentStatus = (dptId, status) => {
    if (status === 1) {
      dispatch(departmentStatus({ dptId, status: 0 }));
    } else {
      dispatch(departmentStatus({ dptId, status: 1 }));
    }
  };

  useEffect(() => {
    dispatch(departmentListing());
  }, [depStatus]);

  return (
    <DepartmentList
      alldepartmentList={alldepartmentList}
      handleDepartmentStatus={handleDepartmentStatus}
      stateLoading={stateLoading}
    />
  );
};
export default departmentListingContainer;
