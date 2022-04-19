import React from "react";
import { Formik, Form } from "formik";

import Input from "../../../../../components/Form/Input";
import Button from "../../../../../components/Button";
import Dropdown from "../../../../../components/Form/Dropdown";
import userCreationContainer from "../../../../../container/KunjiRole/UserCreationContainer";
import InputError from "../../../../../components/Form/InputError";
import "./userCreation.css";

const UserCreationForm = ({
  departmentsDetail,
  rolesDetail,
  validationSchema,
  initialValues,
  userCreationHandler,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={userCreationHandler}
      >
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            <div className="user-creation-upper-style ">
              <h3 className="col-md-6">User Creation</h3>

              {/* <div className="society_btn__wrapper ">
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2,borderRadius: 20 }}
                  isLoading={stateLoading}
                  size="small"
                >
                  Import CSV
                </Button>
              </div> */}
            </div>

            <div className="row">
              <div className="col-md-6 mt-4">
                <Input
                  id="first_name"
                  name="first_name"
                  label="First Name"
                  // margin="normal"

                  placeholder="First Name"
                  value={props.values.first_name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.first_name && props?.touched?.first_name
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.first_name && props?.errors?.first_name && (
                  <InputError>{props?.errors?.first_name}</InputError>
                )}
              </div>
              <div className="col-md-6 mt-4">
                <Input
                  id="last_name"
                  name="last_name"
                  label="Last Name"
                  margin="normal"
                  placeholder="Last Name"
                  value={props.values.last_name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.last_name && props?.touched?.last_name
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.last_name && props?.errors?.last_name && (
                  <InputError>{props?.errors?.last_name}</InputError>
                )}
              </div>
              <div className="col-md-6 mt-4">
                <Input
                  id="email"
                  name="email"
                  label="Email"
                  margin="normal"
                  placeholder="Email"
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.email && props?.touched?.email
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.email && props?.errors?.email && (
                  <InputError>{props?.errors?.email}</InputError>
                )}
              </div>
              <div className="col-md-6 mt-4">
                <Input
                  id="password"
                  name="password"
                  label="Password"
                  margin="normal"
                  placeholder="Password"
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.password && props?.touched?.password
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.password && props?.errors?.password && (
                  <InputError>{props?.errors?.password}</InputError>
                )}
              </div>
              <div className="col-md-6 mt-4">
                <Input
                  id="cnic"
                  name="cnic"
                  label="CNIC"
                  margin="normal"
                  placeholder="Cnic"
                  value={props.values.cnic}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
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
              <div className="col-md-6 mt-4">
                <Input
                  id="mobile"
                  cnic="mobile"
                  label="Mobile"
                  margin="normal"
                  placeholder="Mobile"
                  value={props.values.mobile}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.mobile && props?.touched?.mobile
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.mobile && props?.errors?.mobile && (
                  <InputError>{props?.errors?.mobile}</InputError>
                )}
              </div>
              <div className="col-md-6 mt-4">
                <Dropdown
                  id="department_id"
                  inputLabel="Department"
                  name="department_id"
                  value={props.values.department_id}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.department_id &&
                    props?.touched?.department_id
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Department</option>
                  {departmentsDetail?.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.touched?.department_id &&
                  props?.errors?.department_id && (
                    <InputError>{props?.errors?.department_id}</InputError>
                  )}
              </div>
              <div className="col-md-6 mt-4">
                <Dropdown
                  id="role_id"
                  inputLabel="Roles"
                  name="role_id"
                  value={props.values.role_id}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.role_id && props?.touched?.role_id
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Roles</option>
                  {rolesDetail?.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.touched?.role_id && props?.errors?.role_id && (
                  <InputError>{props?.errors?.role_id}</InputError>
                )}
              </div>
            </div>
            <div className="lower-button-style">
            <div className="society_btn__wrapper">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,borderRadius: 20 }}
                // isLoading={stateLoading}
                size="small"
              >
                Add User
              </Button>
            </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default userCreationContainer(UserCreationForm);
