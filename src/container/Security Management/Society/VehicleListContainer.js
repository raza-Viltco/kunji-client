import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vehicleList } from "../../../redux/actions/SecurityManagement/Society/VehicleList";

const vehicleListContainer = (VehicleList) => () => {
  const dispatch = useDispatch();

  const stateLoading = useSelector((state) => state.local.isLoading);
  const vehicleListData = useSelector((state) => state.vehicleList.vehicleData);
  console.log(vehicleListData, "vehicleListData");
  useEffect(() => {
    dispatch(vehicleList());
  }, []);

  return (
    <VehicleList
      stateLoading={stateLoading}
      vehicleListData={vehicleListData}
    />
  );
};
export default vehicleListContainer;
