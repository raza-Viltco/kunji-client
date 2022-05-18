import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { visitorList } from "../../../redux/actions/SecurityManagement/Society/VisitorList";

const visitorListContainer = (VisitorsList) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(visitorList());
  }, []);
  const stateLoading = useSelector((state) => state.local.isLoading);
  const visitorListData = useSelector((state) => state.visitorList.visitorData);
  // console.log(visitorListData, "visitorListData");

  return (
    <VisitorsList
      visitorListData={visitorListData}
      stateLoading={stateLoading}
    />
  );
};
export default visitorListContainer;
