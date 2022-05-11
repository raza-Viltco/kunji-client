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
  const stateLoading = useSelector((state) => state.local.isLoading);
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

  console.log(ownerDetails);

  const initialValues = {
    sector_block_building: "",
    floor_streets: "",
    plot_home_apartment: "",
    owner_first_name: "",
    owner_last_name: "",
    cnic: "",
    contact: "",
    address: "",
    residential_status: "",
    documents: [],
    cnic_image: [],
    property_image: "",
  };

  const getLandlordData = () => {
    let data = {
      owner_first_name: ownerDetails?.landlord?.first_name,
      owner_last_name: ownerDetails?.landlord?.last_name,
      cnic: ownerDetails?.landlord?.cnic,
      contact: ownerDetails?.landlord?.mobile,
      address: ownerDetails?.landlord?.address,
      residential_status: ownerDetails?.residential_status,
      // documents: [],
      // cnic_image: [],
      property_images: ownerDetails?.property_image,
    };
    return data;
  };

  console.log(getLandlordData());

  const validationSchema = Yup.object().shape({
    sector_block_building: Yup.string().required("Building is required"),
    floor_streets: Yup.string().required("Floor is required"),
    plot_home_apartment: Yup.string().required("Appartment is required"),
    owner_first_name: Yup.string().required("First name is required"),
    owner_last_name: Yup.string().required("Last name is required"),
    cnic: Yup.string().required("Cnic is required"),
    contact: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    residential_status: Yup.string().required("Residential status is required"),
    // documents: Yup.string().required("Document is required"),
  });

  const horizontalValidationSchema = Yup.object().shape({
    sector_block_building: Yup.string().required("Sector/Block is required"),
    floor_streets: Yup.string().required("Street is required"),
    plot_home_apartment: Yup.string().required("House no is required"),
    owner_first_name: Yup.string().required("First name is required"),
    owner_last_name: Yup.string().required("Last name is required"),
    cnic: Yup.string().required("Cnic is required"),
    contact: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    residential_status: Yup.string().required("Residential status is required"),
    // documents: Yup.string().required("Document is required"),
  });

  const handleAssignOwnership = (values, formikActions) => {
    dispatch(assignOwnership({ values, formikActions }));
  };

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

  useEffect(() => {
    if (ownerDetails) {
      getLandlordData();
    }
  }, [ownerDetails]);

  return (
    <AssignOwnership
      initialValues={initialValues}
      validationSchema={validationSchema}
      horizontalValidationSchema={horizontalValidationSchema}
      stateLoading={stateLoading}
      buildingArr={buildingArr}
      appartmentNo={appartmentNo}
      floorArr={floorArr}
      ownerDetails={ownerDetails}
      handleAssignOwnership={handleAssignOwnership}
      getLandlordData={getLandlordData()}
    />
  );
};
export default assignOwnershipContainer;
