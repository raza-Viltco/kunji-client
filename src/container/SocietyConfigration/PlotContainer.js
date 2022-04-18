import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  buildingData,
  floorData,
  areaMapping,
} from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const plotContainer = (AddPlots) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);
  const buildingArr = useSelector((state) => state.societyConfig.verticalData);
  const floorArr = useSelector((state) => state.societyConfig.floorData);
  const mappingId = useSelector((state) => state.societyConfig.mappingId);

  const initialValues = {
    building: "",
    floor: "",
    plot: "",
  };

  const validationSchema = Yup.object().shape({
    building: Yup.string().required("Sector or Block number is required!"),
    floor: Yup.string().required("Street is required!"),
    plot: Yup.string().required("Plot or House number is required!"),
  });

  const areaMappingHandler = (values, formikActions) => {
    console.log(values);
    dispatch(areaMapping({values, formikActions}));
  };

  useEffect(() => {
    dispatch(buildingData());
  }, []);

  useEffect(() => {
    if (mappingId) {
      dispatch(floorData(mappingId));
    }
  }, [mappingId]);

  return (
    <AddPlots
      initialValues={initialValues}
      buildingArr={buildingArr}
      floorArr={floorArr}
      validationSchema={validationSchema}
      stateLoading={stateLoading}
      areaMappingHandler={areaMappingHandler}
    />
  );
};

export default plotContainer;
