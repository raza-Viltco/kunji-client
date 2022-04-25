import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { servantApprovalList,servantApproval } from "../../../redux/actions/SecurityManagement/Society/servantApproval";

const servantApprovalContainer = (ServantApprovalList) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(servantApprovalList());
  }, []);
  const servantData = useSelector((state) => state.servantApproval.data);
  console.log(servantData, "servantApprovalList");

  const handleApproveServant = (servantId, status) => {
    if (status === 0 || 2) {
      dispatch(servantApproval({ servantId, status: 1 }));
    }
  };

  const handleRejetServant = (servantId, status) => {
    if (status === 0 || 1) {
      dispatch(servantApproval({ servantId, status: 1 }));
    }
  };

  return (
    <ServantApprovalList
      servantData={servantData}
      handleApproveServant={handleApproveServant}
      handleRejetServant={handleRejetServant}
    />
  );
};
export default servantApprovalContainer;
