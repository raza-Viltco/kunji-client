import { React, useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  servantApprovalList,
  servantApproval,
  servantList,
} from "../../../redux/actions/SecurityManagement/Society/servantApproval";

const servantApprovalContainer = (ServantApprovalList) => () => {
  const dispatch = useDispatch();



  const servantData = useSelector((state) => state.servantApproval.data);
  const servantApprovalData = useSelector(
    (state) => state.servantApproval.approval_data
  );
  const stateLoading = useSelector((state) => state.local.isLoading);

  const servantDataList = useSelector(
    (state) => state.servantApproval.servantData
  );
  console.log(servantDataList, "servantDataList");
  const [show, setShow] = useState(false);

  const handleApproveServant = (servantId, status) => {
    if (status === 0 || 2) {
      dispatch(servantApproval({ servantId, status: 1 }));
    }
  };

  const handleRejetServant = (servantId, status) => {
    if (status === 0 || 1) {
      dispatch(servantApproval({ servantId, status: 2 }));
    }
  };

  const handleServantList = (id) => {
    dispatch(servantList(id));
  };

  const handleModalClose = () => setShow(false);


  useEffect(() => {
    dispatch(servantApprovalList());
  }, [servantApprovalData]);

  useEffect(() => {
    if (servantDataList) {
      setShow(true);
    }
  }, [servantDataList]);

  return (
    <ServantApprovalList
    servantDataList={servantDataList}
      servantData={servantData}
      show={show}
      handleServantList={handleServantList}
      handleModalClose={handleModalClose}
      handleApproveServant={handleApproveServant}
      handleRejetServant={handleRejetServant}
      stateLoading={stateLoading}
    />
  );
};
export default servantApprovalContainer;
