import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  buildingData,
  floorData,
} from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";
import { assignAppartmentData } from "../../redux/actions/AssignOwnership/Vertical/AssignOwnership";

const assignOwnerHorContainer = (AssignOwneHor) => () => {
  const dispatch = useDispatch();
  const buildingArr = useSelector((state) => state.societyConfig.verticalData);
  const floorArr = useSelector((state) => state.societyConfig.floorData);
  const mappingId = useSelector((state) => state.societyConfig.mappingId);

  const appartmentNo = useSelector((state) => state.assignOwnership.data);

  useEffect(() => {
    dispatch(buildingData());
  }, []);

  useEffect(() => {
    if (mappingId) {
      dispatch(floorData(mappingId));
    }
  }, [mappingId]);

  useEffect(() => {
    dispatch(assignAppartmentData());
  }, []);

  const initialValues = {
    sector_block_building: "",
    floor_streets: "",
    plot_home_apartment: "",
    owner_name: "",
    cnic: "",
    address: "",
    documents: "",
  };

  const validationSchema = Yup.object().shape({
    sector_block_building: Yup.string().required("Sector/Block is required"),
    floor_streets: Yup.string().required("Street is required"),
    plot_home_apartment: Yup.string().required("House is required"),
    owner_name: Yup.string().required("Owner name is required"),
    cnic: Yup.string().required("Cnic is requires"),
    address: Yup.string().required("Adress is required"),
    documents: Yup.string().required("Document is required"),
  });
  const handleAssignOwnership = () => {
    console.log("asignOwnership");
  };

  return (
    <AssignOwneHor
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleAssignOwnership={handleAssignOwnership}
      buildingArr={buildingArr}
      appartmentNo={appartmentNo}
      floorArr={floorArr}
    />
  );
};
export default assignOwnerHorContainer;
