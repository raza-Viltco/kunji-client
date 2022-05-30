import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { horizontalBuilding } from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const sectorContainer = (AddSector) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    building_code: "",
    building_name: "",
    floor_streets: "",
  };

  const validationSchema = Yup.object().shape({
    building_code: Yup.string().required("Sector or Block number is required!"),
    building_name: Yup.string()
      .required("Sector name is required!")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for sector name "),
    floor_streets: Yup.string().required("Street number is required!"),
  });

  const handleHorizontalBuilding = (values, formikActions) => {
    dispatch(horizontalBuilding({ values, formikActions }));
  };

  return (
    <AddSector
      initialValues={initialValues}
      validationSchema={validationSchema}
      stateLoading={stateLoading}
      handleHorizontalBuilding={handleHorizontalBuilding}
    />
  );
};

export default sectorContainer;
