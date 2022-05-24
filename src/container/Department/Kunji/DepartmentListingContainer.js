import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  departmentListing,
  departmentStatus,
} from "../../../redux/actions/Department/Kunji/department";

const departmentListingContainer = (DepartmentList) => () => {
  const dispatch = useDispatch();

  const alldepartmentList = useSelector((state) => state.userDepart.data);
  const depStatus = useSelector((state) => state.userDepart.depStatus);
  // const departmentList = alldepartmentList.data;

  console.log(alldepartmentList);

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
    />
  );
};
export default departmentListingContainer;
