import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { appartmentList } from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const buildingListContainer = (BuildingList) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appartmentList());
  }, []);

  const buildingArr = useSelector((state) => state.societyConfig.verticalData);
  const stateLoading = useSelector((state) => state.local.isLoading);

  return <BuildingList buildingArr={buildingArr} stateLoading={stateLoading} />;
};

export default buildingListContainer;
