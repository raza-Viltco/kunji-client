import React from "react";
import { Formik, Form } from "formik";

import Input from "../../../../../components/Form/Input";
import Button from "../../../../../components/Button";
import userRoleContainer from "../../../../../container/KunjiRole/UserRoleContainer";
import InputError from "../../../../../components/Form/InputError";
import { getFromPersistance } from "../../../../../utils/functions";
import "./role.css";

const UserRole = ({
  initialValues,
  validationSchema,
  stateLoading,
  addRoleHandler,
}) => {
  const roleData = getFromPersistance("role_id");
  return (
    <>
      <h3>Roles Defining</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addRoleHandler}
      >
        {(props) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <div className="col-md-12 padding-left-role mb-2 mt-3">
                  <label>
                    <b className="text-color-role">Role Name</b>
                  </label>
                </div>
                <Input
                  label="Role Name"
                  placeholder="Enter Role Name"
                  name="name"
                  value={props.values.name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.name && props?.touched?.name
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.name && props?.errors?.name && (
                  <InputError>{props?.errors?.name}</InputError>
                )}
              </div>

              <div className="col-md-6 "></div>

              {/* <div className="col-md-2 padding-left-role m-auto">
          <div className="col-md-12 mt-4 Role-status ">
            <h5 className="text-color-role">
              <b>Role Status</b>
            </h5>
          </div>
        </div>

        <div className="col-md-4 ">
          <div className="col-md-12 mt-4 Role-status">
            <FormControlLabel
              value="horizontal"
              control={<Radio size="small" />}
              label="Horizontal"
            />
            <FormControlLabel
              value="verticle"
              control={<Radio size="small" />}
              label="Verticle"
            />
          </div>
        </div> */}

              <div className="col-md-6 role-radio-outer"></div>
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
                  disabled={roleData !== null ? true : false}
                  size="small"
                >
                  Create Role
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default userRoleContainer(UserRole);
