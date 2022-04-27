import {React,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  buildingData,

} from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const sectorListingContainer = (AddSectorList) => () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(buildingData());
  }, []);
  const buildingArr = useSelector((state) => state.societyConfig.verticalData);
  const stateLoading = useSelector((state) => state.local.isLoading);
  return <AddSectorList buildingArr={buildingArr} stateLoading={stateLoading} />;
};

export default sectorListingContainer;
