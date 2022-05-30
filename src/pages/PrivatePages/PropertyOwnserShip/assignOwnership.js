import React from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import Dropdown from "../../../components/Form/Dropdown";
import AssignOwnershipListing from "./assignOwnerShipListing";
import assignOwnershipContainer from "../../../container/PropertyOwnership/PropertyOwnershipContainer";
import InputError from "../../../components/Form/InputError";
import { setMappingId } from "../../../redux/actions/SocietyConfiguration/SocietyConfiguration";
import {
  setAppartmentFloor,
  setAppartmentNumber,
} from "../../../redux/actions/AssignOwnership/Vertical/AssignOwnership";

import "./assignOwnership.css";

const AssignOwnership = ({
  initialValues,
  validationSchema,
  horizontalValidationSchema,
  stateLoading,
  handleAssignOwnership,
  buildingArr,
  appartmentNo,
  floorArr,
  ownerDetails,
  getLandlordData,
  nullKey,
}) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const societyType = userData?.data?.society?.society_type;

  const residentialStatus = [
    { id: 0, status: "I am not living" },
    { id: 1, status: "I am living" },
  ];

  return (
    <Card>
      <Formik
        initialValues={
          ownerDetails?.message === "This property is not linked with anyone"
            ? initialValues
            : getLandlordData
        }
        validationSchema={
          societyType === 0 ? validationSchema : horizontalValidationSchema
        }
        onSubmit={handleAssignOwnership}
        enableReinitialize
      >
        {(props) => (
          <Form>
            {console.log(props)}
            <h3>Assign Ownership</h3>
            <div className="row">
              <div className="col-md-6  mt-4">
                <Dropdown
                  inputLabel="sector_block_building"
                  name="sector_block_building"
                  id="sector_block_building"
                  value={props.values.sector_block_building}
                  onChange={(e) => {
                    props.handleChange(e);
                    dispatch(setMappingId(e.target.value));
                  }}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.sector_block_building &&
                    props?.touched?.sector_block_building
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>
                    {societyType === 0
                      ? "Select Building"
                      : "Select Sector/Block"}
                  </option>
                  {buildingArr?.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.sector_block_building}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.touched?.sector_block_building &&
                  props?.errors?.sector_block_building && (
                    <InputError>
                      {props?.errors?.sector_block_building}
                    </InputError>
                  )}
              </div>
              <div className="col-md-6  mt-4">
                <Dropdown
                  inputLabel="floor_streets"
                  name="floor_streets"
                  // id="floor_streets"
                  value={props.values.floor_streets}
                  onChange={(e) => {
                    props.handleChange(e);
                    dispatch(setAppartmentFloor(e.target.value));
                  }}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.floor_streets &&
                    props?.touched?.floor_streets
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>
                    {societyType === 0 ? "Select Floor No" : "Select Street"}
                  </option>
                  {floorArr?.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.street_floor}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.touched?.floor_streets &&
                  props?.errors?.floor_streets && (
                    <InputError>{props?.errors?.floor_streets}</InputError>
                  )}
              </div>

              <div className="col-md-6  mt-4">
                <Dropdown
                  inputLabel="plot_home_apartment"
                  name="plot_home_apartment"
                  // id="plot_home_apartment"
                  value={props.values.plot_home_apartment}
                  onChange={(e) => {
                    props.handleChange(e);
                    dispatch(setAppartmentNumber(e.target.value));
                  }}
                  // onBlur={props.handleBlur}
                  className={
                    props?.errors?.plot_home_apartment &&
                    props?.touched?.plot_home_apartment
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>
                    {societyType === 0
                      ? "Select Apartment No"
                      : "Select House No"}
                  </option>
                  {appartmentNo.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.plot_home_apartment}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.touched?.plot_home_apartment &&
                  props?.errors?.plot_home_apartment && (
                    <InputError>
                      {props?.errors?.plot_home_apartment}
                    </InputError>
                  )}
              </div>

              <div className="col-md-6  mt-4">
                <Input
                  margin="normal"
                  fullWidth
                  placeholder="Owner First Name"
                  name="owner_first_name"
                  id="owner_name"
                  type="text"
                  value={props.values.owner_first_name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.owner_first_name &&
                    props?.touched?.owner_first_name
                      ? "input-outline"
                      : "bootstyle"
                  }
                  disabled={getLandlordData?.owner_first_name ? true : false}
                />
                {props?.touched?.owner_first_name &&
                  props?.errors?.owner_first_name && (
                    <InputError>{props?.errors?.owner_first_name}</InputError>
                  )}
              </div>

              <div className="col-md-6  mt-4">
                <Input
                  margin="normal"
                  fullWidth
                  placeholder="Owner Last Name"
                  name="owner_last_name"
                  id="owner_name"
                  type="text"
                  value={props.values.owner_last_name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.owner_last_name &&
                    props?.touched?.owner_last_name
                      ? "input-outline"
                      : "bootstyle"
                  }
                  disabled={getLandlordData?.owner_last_name ? true : false}
                />
                {props?.touched?.owner_last_name &&
                  props?.errors?.owner_last_name && (
                    <InputError>{props?.errors?.owner_last_name}</InputError>
                  )}
              </div>

              <div className="col-md-6  mt-4">
                <Input
                  margin="normal"
                  fullWidth
                  placeholder="CNIC"
                  name="cnic"
                  id="cnic"
                  type="text"
                  value={props.values.cnic}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.cnic && props?.touched?.cnic
                      ? "input-outline"
                      : "bootstyle"
                  }
                  disabled={getLandlordData?.cnic ? true : false}
                />
                {props?.touched?.cnic && props?.errors?.cnic && (
                  <InputError>{props?.errors?.cnic}</InputError>
                )}
              </div>

              <div className="col-md-6  mt-4">
                <Input
                  margin="normal"
                  fullWidth
                  placeholder="Phone Number"
                  name="contact"
                  id="cnic"
                  type="text"
                  value={props.values.contact}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.contact && props?.touched?.contact
                      ? "input-outline"
                      : "bootstyle"
                  }
                  disabled={getLandlordData?.contact ? true : false}
                />
                {props?.touched?.contact && props?.errors?.contact && (
                  <InputError>{props?.errors?.contact}</InputError>
                )}
              </div>

              <div className="col-md-6  mt-4">
                <Input
                  margin="normal"
                  fullWidth
                  placeholder="Address"
                  name="address"
                  id="address"
                  type="text"
                  value={props.values.address}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.address && props?.touched?.address
                      ? "input-outline"
                      : "bootstyle"
                  }
                  disabled={getLandlordData?.address ? true : false}
                />
                {props?.touched?.address && props?.errors?.address && (
                  <InputError>{props?.errors?.address}</InputError>
                )}
              </div>
              <div className="col-sm-12">
                <div className="col-md-6  mt-4">
                  <Dropdown
                    inputLabel="Residential Status"
                    name="residential_status"
                    value={props.values.residential_status}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={
                      props?.errors?.residential_status &&
                      props?.touched?.residential_status
                        ? "input-outline"
                        : "bootstyle"
                    }
                    disabled={
                      getLandlordData?.residential_status ? true : false
                    }
                  >
                    <option>Select Residential Status</option>
                    {residentialStatus.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.status}
                        </option>
                      );
                    })}
                  </Dropdown>
                  {props?.touched?.residential_status &&
                    props?.errors?.residential_status && (
                      <InputError>
                        {props?.errors?.residential_status}
                      </InputError>
                    )}
                </div>
              </div>

              <div className="col-md-6  mt-2">
                <div className="col-sm-12 mt-3">
                  <label className="px-3">
                    <b>Documents</b>
                  </label>
                  {getLandlordData?.documents ? (
                    <div className="col-sm-12 pt-2 pb-2 propertystyle">
                      <ul>
                        {getLandlordData?.documents?.map((item) => {
                          return (
                            <li>
                              <a
                                className="textstyle"
                                href={item}
                                target="_blank"
                              >
                                <p className="px-2 m-0 parapropertystyle">
                                  {item}
                                </p>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    <>
                      <Input
                        margin="normal"
                        fullWidth
                        type="file"
                        multiple
                        placeholder="Attachment"
                        name="documents"
                        id="documents"
                        onChange={(e) => {
                          props.setFieldValue("documents", [
                            ...e.currentTarget.files,
                          ]);
                        }}
                        onBlur={props.handleBlur}
                        key={nullKey}
                        className={
                          props?.errors?.documents && props?.touched?.documents
                            ? "input-outline"
                            : "bootstyle"
                        }
                      />
                      {props?.touched?.documents &&
                        props?.errors?.documents && (
                          <InputError>{props?.errors?.documents}</InputError>
                        )}
                    </>
                  )}
                </div>
              </div>

              {/* ------------------------------------ */}

              <div className="col-md-6  mt-2">
                <div className="col-sm-12 mt-3">
                  <label className="px-3">
                    <b>CNIC Picture</b>
                  </label>
                  {getLandlordData?.cnic_image ? (
                    <div className="col-sm-12 pt-2 pb-2 propertystyle">
                      <ul>
                        {getLandlordData?.cnic_image?.map((item) => {
                          return (
                            <li>
                              <a
                                className="textstyle"
                                href={item}
                                target="_blank"
                              >
                                <p className="px-2 m-0 parapropertystyle">
                                  {item}
                                </p>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    <>
                      <Input
                        margin="normal"
                        fullWidth
                        type="file"
                        multiple
                        placeholder="Cnic Image"
                        name="cnic_image"
                        id="documents"
                        onChange={(e) =>
                          props.setFieldValue("cnic_image", [
                            ...e.currentTarget.files,
                          ])
                        }
                        onBlur={props.handleBlur}
                        key={nullKey}
                        className={
                          props?.errors?.cnic_image &&
                          props?.touched?.cnic_image
                            ? "input-outline"
                            : "bootstyle"
                        }
                      />
                      {props?.touched?.cnic_image &&
                        props?.errors?.cnic_image && (
                          <InputError>{props?.errors?.cnic_image}</InputError>
                        )}
                    </>
                  )}
                </div>
              </div>

              <div className="col-md-6  mt-2">
                <div className="col-sm-12 mt-3">
                  <label className="px-3">
                    <b>Property Picture</b>
                  </label>
                  {getLandlordData?.property_images ? (
                    <div className="col-sm-12 pt-2 pb-2 propertystyle">
                      <ul>
                        <li>
                          <a
                            className="textstyle"
                            href={getLandlordData?.property_images}
                            target="_blank"
                          >
                            <p className="px-2 m-0 parapropertystyle">
                              {getLandlordData?.property_images}
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <>
                      <Input
                        margin="normal"
                        fullWidth
                        type="file"
                        // multiple
                        placeholder="Property Image"
                        name="property_image"
                        onChange={(e) =>
                          props.setFieldValue(
                            "property_image",
                            e.target.files[0]
                          )
                        }
                        onBlur={props.handleBlur}
                        key={nullKey}
                        id="documents"
                        className={
                          props?.errors?.property_image &&
                          props?.touched?.property_image
                            ? "input-outline"
                            : "bootstyle"
                        }
                      />
                      {props?.touched?.property_image &&
                        props?.errors?.property_image && (
                          <InputError>
                            {props?.errors?.property_image}
                          </InputError>
                        )}
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="ownership-button-outer">
              <div className="society_btn__wrapper">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  isLoading={stateLoading}
                  size="small"
                  disabled={
                    ownerDetails?.message !==
                    "This property is not linked with anyone"
                      ? true
                      : false
                  }
                >
                  Assign
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <h3>Assign Ownership Listing</h3>
      <AssignOwnershipListing />
    </Card>
  );
};
export default assignOwnershipContainer(AssignOwnership);
