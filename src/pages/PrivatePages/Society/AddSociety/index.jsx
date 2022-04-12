import React from "react";
import { Formik, Form } from "formik";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";

import Input from "../../../../components/Form/Input";
import Dropdown from "../../../../components/Form/Dropdown";
import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import RadioButton from "../../../../components/Form/RadioButton";
import addSocietyContainer from "../../../../container/Society/AddSocietyContainer";
import { setCityId } from "../../../../redux/actions/Society/AddSociety";
import InputError from "../../../../components/Form/InputError";
import "./AddSociety.css";

const AddSociety = ({
  initialValues,
  validationSchema,
  countryData,
  cityData,
  stateLoading,
  addSocietyHandler,
}) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addSocietyHandler}
      >
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            {/* {console.log(props)} */}
            <h4 className="text-center m-0">Add Society</h4>
            <div className="row">
              <div className="col-md-6  mt-4">
                <Input
                  placeholder="name"
                  name="society.name"
                  type="text"
                  value={props.values.society.name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.society?.name &&
                    props?.touched?.society?.name
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.society?.name &&
                  props?.errors?.society?.name && (
                    <InputError>{props?.errors?.society?.name}</InputError>
                  )}
              </div>
              <div className="col-md-6  mt-4">
                <Dropdown
                  inputLabel="Country"
                  name="society.country_id"
                  value={props.values.society.country_id}
                  onChange={(e) => {
                    props.handleChange(e);
                    dispatch(setCityId(e.target.value));
                  }}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.society?.country_id &&
                    props?.touched?.society?.country_id
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Country</option>
                  {countryData.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.touched?.society?.country_id &&
                  props?.errors?.society?.country_id && (
                    <InputError>
                      {props?.errors?.society?.country_id}
                    </InputError>
                  )}
              </div>

              <div className="col-md-6  mt-4">
                <Dropdown
                  inputLabel="City"
                  name="society.city_id"
                  value={props.values.society.city_id}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.society?.city_id &&
                    props?.touched?.society?.city_id
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select City</option>
                  {cityData.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.touched?.society?.city_id &&
                  props?.errors?.society?.city_id && (
                    <InputError>{props?.errors?.society?.city_id}</InputError>
                  )}
              </div>
              <div className="col-md-6  mt-4">
                <Input
                  margin="normal"
                  fullWidth
                  placeholder="Zipcode"
                  name="society.zip_code"
                  type="text"
                  value={props.values.society.zip_code}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.society?.zip_code &&
                    props?.touched?.society?.zip_code
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.society?.zip_code &&
                  props?.errors?.society?.zip_code && (
                    <InputError>{props?.errors?.society?.zip_code}</InputError>
                  )}
              </div>

              <div className="col-md-6  mt-4">
                <div className="col-sm-12 mt-3">
                  <Input
                    margin="normal"
                    fullWidth
                    type="file"
                    multiple
                    name="documents"
                    onChange={(e) =>
                      props.setFieldValue("documents", [
                        ...e.currentTarget.files,
                      ])
                    }
                    onBlur={props.handleBlur}
                    className={
                      props?.errors?.society?.documents &&
                      props?.touched?.society?.documents
                        ? "input-outline"
                        : "bootstyle"
                    }
                  />
                  {props?.touched?.society?.documents &&
                    props?.errors?.society?.documents && (
                      <InputError>
                        {props?.errors?.society?.documents}
                      </InputError>
                    )}
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="col-md-12 mt-5 ">
                  <RadioButton label="Type" row flexAlign>
                    <FormControlLabel
                      value={1}
                      control={<Radio size="small" />}
                      label="Horizontal"
                      name="society.society_type"
                      onChange={props.handleChange}
                    />
                    <FormControlLabel
                      value={0}
                      control={<Radio size="small" />}
                      label="Vertical"
                      name="society.society_type"
                      onChange={props.handleChange}
                    />
                  </RadioButton>
                </div>
              </div>
            </div>
            <hr />
            {/* <h4 className="text-center">Assign Admin</h4> */}
            <div className="row">
              <div className="col-md-6 mt-4">
                <Input
                  margin="normal"
                  fullWidth
                  placeholder="Admin Name"
                  type="text"
                  name="society_admin_user.full_name"
                  value={props.values.society_admin_user.full_name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.society_admin_user?.full_name &&
                    props?.touched?.society_admin_user?.full_name
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.society_admin_user?.full_name &&
                  props?.errors?.society_admin_user?.full_name && (
                    <InputError>
                      {props?.errors?.society_admin_user?.full_name}
                    </InputError>
                  )}
              </div>
              <div className="col-md-6 mt-4">
                <Input
                  margin="normal"
                  fullWidth
                  placeholder="Email"
                  name="society_admin_user.email"
                  type="email"
                  value={props.values.society_admin_user.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.society_admin_user?.email &&
                    props?.touched?.society_admin_user?.email
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.society_admin_user?.email &&
                  props?.errors?.society_admin_user?.email && (
                    <InputError>
                      {props?.errors?.society_admin_user?.email}
                    </InputError>
                  )}
              </div>
              <div className="col-md-6 mt-4">
                <Input
                  margin="normal"
                  fullWidth
                  name="society_admin_user.mobile"
                  placeholder="Contact"
                  type="text"
                  value={props.values.society_admin_user.mobile}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.society_admin_user?.mobile &&
                    props?.touched?.society_admin_user?.mobile
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.society_admin_user?.mobile &&
                  props?.errors?.society_admin_user?.mobile && (
                    <InputError>
                      {props?.errors?.society_admin_user?.mobile}
                    </InputError>
                  )}
              </div>
              <div className="col-md-6 mt-4">
                <Input
                  margin="normal"
                  fullWidth
                  placeholder="Address"
                  type="text"
                  name="society_admin_user.address"
                  value={props.values.society_admin_user.address}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.society_admin_user?.address &&
                    props?.touched?.society_admin_user?.address
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.society_admin_user?.address &&
                  props?.errors?.society_admin_user?.address && (
                    <InputError>
                      {props?.errors?.society_admin_user?.address}
                    </InputError>
                  )}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-10"></div>
              <div className="col-sm-2">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  isLoading={stateLoading}
                  size="normal"
                >
                  Add
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default addSocietyContainer(AddSociety);
