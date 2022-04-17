import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { buildingData } from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const plotContainer = (AddPlots) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buildingData());
  }, []);

  return <AddPlots />;
};

export default plotContainer;
