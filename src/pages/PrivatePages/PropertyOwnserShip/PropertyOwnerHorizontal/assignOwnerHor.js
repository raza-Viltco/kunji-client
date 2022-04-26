import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";


import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import Input from "../../../../components/Form/Input";
import Dropdown from "../../../../components/Form/Dropdown";
import AssignOwnerHorListing from "./assignOwnerHorList";
import InputError from "../../../../components/Form/InputError";
import assignOwnerHorContainer from "../../../../container/PropertyOwnership/PropertyOwnerHorContainer"
import { setMappingId } from "../../../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const AssignOwneHor = ({
  initialValues,
  validationSchema,
  handleAssignOwnership,
  buildingArr,
  appartmentNo,
  floorArr
}) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(props) => (
          <Form>
            <h3>Assign Ownership</h3>
            <div className="row">
              <div className="col-md-6  mt-4">
                <Dropdown
                  inputLabel="sector_block_building"
                  name="sector_block_building"
                  id="sector_block_building"
                     onChange={(e) => {
                    props.handleChange(e);
                    dispatch(setMappingId(e.target.value));
                  }}
                  className={
                    props?.errors?.sector_block_building &&
                    props?.touched?.sector_block_building
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Sector/Block</option>
                  {buildingArr?.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.sector_block_building}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.touched?.sector_block_building && props?.errors?.sector_block_building && (
                  <InputError>{props?.errors?.sector_block_building}</InputError>
                )}
              </div>
              <div className="col-md-6  mt-4">
                <Dropdown
                  inputLabel="floor_streets"
                  name="floor_streets"
                  id="floor_streets"
                  className={
                    props?.errors?.floor_streets &&
                    props?.touched?.floor_streets
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Street</option>
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
                  id="plot_home_apartment"
                  className={
                    props?.errors?.plot_home_apartment &&
                    props?.touched?.plot_home_apartment
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select House No</option>
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
                  placeholder="Owner Name"
                  name="owner_name"
                  id="owner_name"
                  type="text"
                  className={
                    props?.errors?.owner_name && props?.touched?.owner_name
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.owner_name && props?.errors?.owner_name && (
                  <InputError>{props?.errors?.owner_name}</InputError>
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
                  className={
                    props?.errors?.cnic && props?.touched?.cnic
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.cnic && props?.errors?.cnic && (
                  <InputError>{props?.errors?.cnic}</InputError>
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
                  className={
                    props?.errors?.address && props?.touched?.address
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.address && props?.errors?.address && (
                  <InputError>{props?.errors?.address}</InputError>
                )}
              </div>
              <div className="col-md-6  mt-2">
                <div className="col-sm-12 mt-3">
                  <Input
                    margin="normal"
                    fullWidth
                    type="file"
                    multiple
                    placeholder="Attachment"
                    name="documents"
                    id="documents"
                    className={
                      props?.errors?.documents && props?.touched?.documents
                        ? "input-outline"
                        : "bootstyle"
                    }
                  />
                  {props?.touched?.documents && props?.errors?.documents && (
                    <InputError>{props?.errors?.documents}</InputError>
                  )}
                </div>
              </div>
            </div>

            <div className=" ownership-button-outer">
              <div className="society_btn__wrapper">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  // isLoading={stateLoading}
                  size="small"
                >
                  Assign
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <AssignOwnerHorListing />
    </Card>
  );
};
export default assignOwnerHorContainer(AssignOwneHor);
