import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  appartmentList,
  buildingData,
} from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const buildingListContainer = (BuildingList) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buildingData());
  }, []);

  const buildingArrData = useSelector(
    (state) => state.societyConfig.verticalData
  );
  const stateLoading = useSelector((state) => state.local.isLoading);

  console.log(buildingArrData);

  return (
    <BuildingList
      buildingArrData={buildingArrData}
      stateLoading={stateLoading}
    />
  );
};

export default buildingListContainer;
