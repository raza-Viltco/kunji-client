import React from "react";
import { Formik, Form } from "formik";

import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import Dropdown from "../../../components/Form/Dropdown";
import AssignOwnershipListing from "./assignOwnerShipListing";
import assignOwnershipContainer from "../../../container/PropertyOwnership/PropertyOwnershipContainer";
import InputError from "../../../components/Form/InputError";
import "./assignOwnership.css";

const AssignOwnership = ({
  initialValues,
  validationSchema,
  handleAssignOwnership,
}) => {
  return (
    <Card>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(props) => (
          <Form>
            <h3>Assign Ownership</h3>
            <div className="row">
              <div className="col-md-6  mt-4">
                <Dropdown
                  inputLabel="building"
                  name="building"
                  id="building"
                  className={
                    props?.errors?.building && props?.touched?.building
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Building</option>
                  {/* {countryData.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    );
                  })} */}
                </Dropdown>
                {props?.touched?.building && props?.errors?.building && (
                  <InputError>{props?.errors?.building}</InputError>
                )}
              </div>
              <div className="col-md-6  mt-4">
                <Dropdown
                  inputLabel="floor"
                  name="floor"
                  id="floor"
                  className={
                    props?.errors?.floor && props?.touched?.floor
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Floor No</option>
                  {/* {countryData.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    );
                  })} */}
                </Dropdown>
                {props?.touched?.floor && props?.errors?.floor && (
                  <InputError>{props?.errors?.floor}</InputError>
                )}
              </div>
              <div className="col-md-6  mt-4">
                <Dropdown
                  inputLabel="appartment"
                  name="appartment"
                  id="appartment"
                  className={
                    props?.errors?.appartment && props?.touched?.appartment
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Appartment No</option>
                  {/* {countryData.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    );
                  })} */}
                </Dropdown>
                {props?.touched?.appartment && props?.errors?.appartment && (
                  <InputError>{props?.errors?.appartment}</InputError>
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
      <AssignOwnershipListing />
    </Card>
  );
};
export default assignOwnershipContainer(AssignOwnership);
