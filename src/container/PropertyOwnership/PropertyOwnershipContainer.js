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
    sector_block_building: ownerDetails?.data?.mapping_level_one,
    floor_streets: ownerDetails?.data?.mapping_level_two,
    plot_home_apartment: ownerDetails?.data?.mapping_level_three,
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
      sector_block_building: ownerDetails?.mapping_level_one,
      floor_streets: ownerDetails?.mapping_level_two,
      plot_home_apartment: ownerDetails?.mapping_level_three,
      owner_first_name: ownerDetails?.landlord?.first_name,
      owner_last_name: ownerDetails?.landlord?.last_name,
      cnic: ownerDetails?.landlord?.cnic,
      contact: ownerDetails?.landlord?.mobile,
      address: ownerDetails?.other_address,
      residential_status: ownerDetails?.residential_status,
      documents: ownerDetails?.documents,
      cnic_image: ownerDetails?.cnic_image,
      property_images: ownerDetails?.property_image,
    };
    return data;
  };

  const validationSchema = Yup.object().shape({
    sector_block_building: Yup.string().required("Building is required"),
    floor_streets: Yup.string().required("Floor is required"),
    plot_home_apartment: Yup.string().required("Appartment is required"),
    owner_first_name: Yup.string()
      .required("First name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for first name "),
    owner_last_name: Yup.string()
      .required("Last name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for last name "),
    cnic: Yup.string().required("Cnic is required"),
    contact: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Contact number is not valid"
      ),
    address: Yup.string().required("Address is required"),
    residential_status: Yup.string().required("Residential status is required"),
    // documents: Yup.string().required("Document is required"),
  });

  const horizontalValidationSchema = Yup.object().shape({
    sector_block_building: Yup.string().required("Sector/Block is required"),
    floor_streets: Yup.string().required("Street is required"),
    plot_home_apartment: Yup.string().required("House no is required"),
    owner_first_name: Yup.string()
      .required("First name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for first name "),
    owner_last_name: Yup.string()
      .required("Last name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for last name "),
    cnic: Yup.string().required("Cnic is required"),
    contact: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Contact number is not valid"
      ),
    address: Yup.string().required("Address is required"),
    residential_status: Yup.string().required("Residential status is required"),
    // documents: Yup.string().required("Document is required"),
  });

  const handleAssignOwnership = (values, formikActions) => {
    console.log(values);
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
  }, [mappingId && appartmentFloor && appartmentId]);

  useEffect(() => {
    if (ownerDetails) {
      getLandlordData();
      // console.log(getLandlordData());
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
