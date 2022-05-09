import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  buildingData,
  floorData,
} from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";
import {
  assignAppartmentData,
  assignOwnership,
  ownerData,
} from "../../redux/actions/AssignOwnership/Vertical/AssignOwnership";

const assignOwnershipContainer = (AssignOwnership) => () => {
  const dispatch = useDispatch();
  const buildingArr = useSelector((state) => state.societyConfig.verticalData);
  const floorArr = useSelector((state) => state.societyConfig.floorData);
  const mappingId = useSelector((state) => state.societyConfig.mappingId);

  const appartmentNo = useSelector((state) => state.assignOwnership.data);

  const appartmentFloor = useSelector(
    (state) => state.assignOwnership.setAppartmentFloor
  );

  const appartmentId = useSelector(
    (state) => state.assignOwnership.setAppartmentNumber
  );

  const ownerDetails = useSelector(
    (state) => state?.assignOwnership?.setOwnerData
  );

  useEffect(() => {
    dispatch(buildingData());
  }, []);

  useEffect(() => {
    if (mappingId) {
      dispatch(floorData(mappingId));
    }
  }, [mappingId]);

  useEffect(() => {
    if (appartmentFloor) {
      dispatch(assignAppartmentData(appartmentFloor));
    }
  }, [appartmentFloor]);

  useEffect(() => {
    if (mappingId && appartmentFloor && appartmentId) {
      dispatch(ownerData({ mappingId, appartmentFloor, appartmentId }));
    }
  }, [mappingId, appartmentFloor, appartmentId]);

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
    sector_block_building: Yup.string().required("Building is required"),
    floor_streets: Yup.string().required("Floor is required"),
    plot_home_apartment: Yup.string().required("Appartment is required"),
    owner_name: Yup.string().required("Owner name is required"),
    cnic: Yup.string().required("Cnic is requires"),
    address: Yup.string().required("Adress is required"),
    documents: Yup.string().required("Document is required"),
  });
  const handleAssignOwnership = (values, formikActions) => {
    console.log("asignOwnership");
    dispatch(assignOwnership({ values, formikActions }));
  };

  return (
    <AssignOwnership
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleAssignOwnership={handleAssignOwnership}
      buildingArr={buildingArr}
      appartmentNo={appartmentNo}
      floorArr={floorArr}
      ownerDetails={ownerDetails}
    />
  );
};
export default assignOwnershipContainer;
