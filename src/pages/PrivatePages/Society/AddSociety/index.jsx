import React from "react";
import { Formik, Form } from "formik";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";

import Input from "../../../../components/Form/Input";
import Dropdown from "../../../../components/Form/Dropdown";
import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import addSocietyContainer from "../../../../container/Society/AddSocietyContainer";
import { setCityId } from "../../../../redux/actions/Society/AddSociety";
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
            {console.log(props)}
            <h4 className="text-center m-0">Add Society</h4>
            <div className="row">
              <div className="col-md-4 pt-2 ">
                <Input
                  margin="noraml"
                  fullWidth
                  label="Society Name"
                  name="society.name"
                  type="text"
                  value={props.values.society.name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props?.errors?.society?.name}
                  helperText
                />
              </div>
              <div className="col-md-4">
                <Dropdown
                  inputLabel="Country"
                  name="society.country_id"
                  value={props.values.society.country_id}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  onClick={dispatch(setCityId(props.values.society.country_id))}
                  error={props?.errors?.society?.country_id}
                >
                  {countryData.map((item, index) => {
                    return (
                      <MenuItem value={item.id} key={index}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Dropdown>
              </div>

              <div className="col-md-4">
                <Dropdown
                  inputLabel="City"
                  name="society.city_id"
                  value={props.values.society.city_id}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props?.errors?.society?.city_id}
                >
                  {cityData.map((item, index) => {
                    return (
                      <MenuItem value={item.id} key={index}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Dropdown>
              </div>
              <div className="col-md-4">
                <Input
                  margin="normal"
                  fullWidth
                  label="Zipcode"
                  name="society.zip_code"
                  type="text"
                  value={props.values.society.zip_code}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props?.errors?.society?.zip_code}
                  helperText
                />
              </div>
              <div className="col-md-4">
                <Input
                  margin="normal"
                  fullWidth
                  type="file"
                  name="documents"
                  onChange={(e) =>
                    props.setFieldValue("documents", [...e.currentTarget.files])
                  }
                  onBlur={props.handleBlur}
                />
              </div>
            </div>
            <hr />
            <h4 className="text-center">Assign Admin</h4>
            <div className="row">
              <div className="col-md-4">
                <Input
                  margin="normal"
                  fullWidth
                  label="Full Name"
                  type="text"
                  name="society_admin_user.full_name"
                  value={props.values.society_admin_user.full_name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props?.errors?.society_admin_user?.full_name}
                  helperText
                />
              </div>
              <div className="col-md-4">
                <Input
                  margin="normal"
                  fullWidth
                  label="Address"
                  type="text"
                  name="society_admin_user.address"
                  value={props.values.society_admin_user.address}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props?.errors?.society_admin_user?.address}
                  helperText
                />
              </div>
              <div className="col-md-4">
                <Input
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  name="society_admin_user.email"
                  type="email"
                  value={props.values.society_admin_user.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props?.errors?.society_admin_user?.email}
                  helperText
                />
              </div>
              <div className="col-md-4">
                <Input
                  margin="normal"
                  fullWidth
                  name="society_admin_user.mobile"
                  label="Contact"
                  type="text"
                  value={props.values.society_admin_user.mobile}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props?.errors?.society_admin_user?.mobile}
                  helperText
                />
              </div>
            </div>
            <div className="society_btn__wrapper">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                isLoading={stateLoading}
                size="small"
              >
                Add
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default addSocietyContainer(AddSociety);
