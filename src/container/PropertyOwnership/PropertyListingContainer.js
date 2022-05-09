import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { propertyList } from "../../redux/actions/AssignOwnership/Vertical/AssignOwnership";

const propertyListContainer = (PropertyList) => () => {
  const dispatch = useDispatch();

  const propertyListData = useSelector(
    (state) => state.assignOwnership.propertyList
  );
  console.log(propertyListData, "propertyListData");
  const stateLoading = useSelector((state) => state.local.isLoading);

  useEffect(() => {
    dispatch(propertyList());
  }, []);

  return (
    <PropertyList
      propertyListData={propertyListData}
      stateLoading={stateLoading}
    />
  );
};
export default propertyListContainer;
