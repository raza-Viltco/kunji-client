import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  approvalListing,
  userApproval,
} from "../../redux/actions/KunjiRole/UserApproval";

const userApprovalContainer = (UserApprovalListing) => () => {
  const dispatch = useDispatch();

  const approval = useSelector((state) => state.userApproval.data);
  const userApprovalData = useSelector((state) => state.userApproval.user);
  const stateLoading = useSelector((state) => state.local.isLoading);

  // console.log("userApprvalListing", approval);

  const userApprovalHandler = (aprId, status) => {
    // console.log(aprId, status, "data");
    if (status === 0 || 2) {
      dispatch(userApproval({ aprId, status: 1 }));
    }
  };
  const userRejectionHandler = (aprId, status) => {
    // console.log(aprId, status, "data");
    if (status === 0 || 1) {
      dispatch(userApproval({ aprId, status: 2 }));
    }
  };

  // useEffect(() => {
  //   dispatch(approvalListing());
  // }, []);

  useEffect(() => {
    dispatch(approvalListing());
  }, [userApprovalData]);

  return (
    <UserApprovalListing
      approval={approval}
      stateLoading={stateLoading}
      userApprovalHandler={userApprovalHandler}
      userRejectionHandler={userRejectionHandler}
    />
  );
};
export default userApprovalContainer;
