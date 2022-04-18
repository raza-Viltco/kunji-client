import {React,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { approvalListing } from "../../redux/actions/KunjiRole/UserApproval";

const userApprovalContainer = (UserApprovalListing) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(approvalListing());
  }, []);

  const approval = useSelector((state) => state.userApproval.data);
  // const approvalData = approval[0]?.user;
  console.log("userApprvalListing", approval);

  return( <UserApprovalListing
    approval={approval}
    />
  );
};
export default userApprovalContainer;
