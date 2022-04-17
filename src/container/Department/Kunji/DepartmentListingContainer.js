import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  departmentListing,
  departmentStatus,
} from "../../../redux/actions/Department/Kunji/department";

const departmentListingContainer = (DepartmentList) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(departmentListing());
  }, []);

  const alldepartmentList = useSelector((state) => state.userDepart.data);
  const departmentList = alldepartmentList.data;
  console.log(departmentList, "depart");

  const handleDepartmentStatus = (e, dptId, status) => {
    console.log("status",  status,  dptId);
    dispatch(departmentStatus({dptId, status}));
  };

  return (
    <DepartmentList
      departmentList={departmentList}
      handleDepartmentStatus={handleDepartmentStatus}
    />
  );
};
export default departmentListingContainer;
