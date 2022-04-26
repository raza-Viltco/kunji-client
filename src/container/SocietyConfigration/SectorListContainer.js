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
  // console.log(buildingArr, "buildingArr");
  return <AddSectorList buildingArr={buildingArr} />;
};

export default sectorListingContainer;
