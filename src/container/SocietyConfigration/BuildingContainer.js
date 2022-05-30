import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { addBuilding } from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const buildingContainer = (DefineBuilding) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    building_code: "",
    building_name: "",
    floor_streets: "",
  };

  const validationSchema = Yup.object().shape({
    building_code: Yup.string().required("Building code is required!"),
    building_name: Yup.string().required("Building name is required!").matches(
      /^[aA-zZ\s]+$/,
      "Only alphabets are allowed for building name "
    ),
    floor_streets: Yup.string().required("Floor number is required!"),
  });

  const handleAddBuilding = (values, formikActions) => {
    console.log(values);
    dispatch(addBuilding({ values, formikActions }));
  };

  return (
    <DefineBuilding
      initialValues={initialValues}
      validationSchema={validationSchema}
      stateLoading={stateLoading}
      handleAddBuilding={handleAddBuilding}
    />
  );
};

export default buildingContainer;
