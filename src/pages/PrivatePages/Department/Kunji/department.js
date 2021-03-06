import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Formik, Form } from "formik";

import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import InputError from "../../../../components/Form/InputError";
import departmentContainer from "../../../../container/Department/Kunji/DepartmentContainer";
import "./department.css";

const DepartmentForm = ({
  initialValues,
  validationSchema,
  addDepartmentHandler,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addDepartmentHandler}
      >
        {(props) => (
          <Form>
            <h3> Department</h3>

            <div className="row">
              <div className="col-md-6">
                <Input
                  id="code"
                  name="code"
                  label="Code"
                  margin="normal"
                  placeholder="Code"
                  value={props.values.code}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.code && props?.touched?.code
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.code && props?.errors?.code && (
                  <InputError>{props?.errors?.code}</InputError>
                )}
              </div>
              <div className="col-md-6">
                <Input
                  id="departName"
                  name="departName"
                  label="Department Name"
                  margin="normal"
                  placeholder="Department name"
                  value={props.values.departName}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.departName && props?.touched?.departName
                      ? "input-outline"
                      : "bootstyle"
                  }
                />

                {props?.touched?.departName && props?.errors?.departName && (
                  <InputError>{props?.errors?.departName}</InputError>
                )}
              </div>

              {/* <div className="col-md-6 ">
                <div className="col-md-12 mt-5 ">
                  <RadioButton label="Status" row flexAlign>
                    <FormControlLabel
                      value={1}
                      control={<Radio size="small" />}
                      label="active"
                      name="status"
                      onChange={props.handleChange}
                    />
                    <FormControlLabel
                      value={0}
                      control={<Radio size="small" />}
                      label="inactive"
                      name="status"
                      onChange={props.handleChange}
                    />
                  </RadioButton>
                </div>
              </div> */}
            </div>

            <div className="department-button-outer">
              <div className="society_btn__wrapper ">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  // isLoading={stateLoading}
                  size="small"
                >
                  Add Department
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default departmentContainer(DepartmentForm);
