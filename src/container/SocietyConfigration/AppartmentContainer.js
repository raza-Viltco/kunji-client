import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  buildingData,
  floorData,
  verticalMapping,
} from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const appartmentContainer = (AddApartment) => () => {
  const dispatch = useDispatch();
  const buildingArr = useSelector((state) => state.societyConfig.verticalData);
  const floorArr = useSelector((state) => state.societyConfig.floorData);
  const mappingId = useSelector((state) => state.societyConfig.mappingId);

  const initialValues = {
    building: "",
    floor: "",
    plot: "",
    parking: "",
  };

  const validationSchema = Yup.object().shape({
    building: Yup.string().required("Building is required!"),
    floor: Yup.string().required("Floor number is required!"),
    plot: Yup.string().required("Appartment number is required!"),
    parking: Yup.string().required("Allocated parking is required!"),
  });

  const verticalMappingHandler = (values, formikActions) => {
    console.log(values);
    dispatch(verticalMapping({ values, formikActions }));
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
    <AddApartment
      initialValues={initialValues}
      validationSchema={validationSchema}
      buildingArr={buildingArr}
      floorArr={floorArr}
      verticalMappingHandler={verticalMappingHandler}
    />
  );
};

export default appartmentContainer;
