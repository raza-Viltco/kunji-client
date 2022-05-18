import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { staffList } from "../../redux/actions/KunjiRole/UserCreation";

const staffListingContainer = (StaffMemberListing) => () => {
  const dispatch = useDispatch();

  const stateLoading = useSelector((state) => state.local.isLoading);
  const staffListData = useSelector((state) => state.userDepartment.staffData);

  useEffect(() => {
    dispatch(staffList());
  }, []);

  return (
    <StaffMemberListing
      stateLoading={stateLoading}
      staffListData={staffListData}
    />
  );
};

export default staffListingContainer;
