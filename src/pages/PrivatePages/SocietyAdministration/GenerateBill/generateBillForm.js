import React from "react";
import { Formik, Form } from "formik";

import Dropdown from "../../../../components/Form/Dropdown";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import generateBillContainer from "../../../../container/SocietyAdministration/GenerateBillContainer";
import InputError from "../../../../components/Form/InputError";
import "./generateBill.css";

const GenerateBillForm = ({
  initialValues,
  validationSchema,
  selectResidentData,
  selectChargesData,
  handleGenerateBill,
}) => {
  return (
    <>
      <h3>Generate Society Bill</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleGenerateBill}
      >
        {(props) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Dropdown
                  inputLabel="Select Resident "
                  name="resident_id"
                  value={props?.values?.resident_id}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.charges_code && props?.touched?.charges_code
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Resident</option>
                  {selectResidentData.map((item, index) => {
                    return (
                      <option value={item?.resedent?.id} key={index}>
                        {item?.resedent?.name}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.errors?.resident_id && props?.touched?.resident_id && (
                  <InputError>{props?.errors?.resident_id}</InputError>
                )}
              </div>
              <div className="col-md-6">
                <Dropdown
                  inputLabel="Select Charges "
                  name="selected_charges_id"
                  value={props?.values?.selected_charges_id}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.selected_charges_id &&
                    props?.touched?.selected_charges_id
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Charges</option>
                  {selectChargesData.map((item, index) => {
                    return (
                      <option value={item?.id} key={index}>
                        {item?.charges_title + " " + item?.charges_code}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.errors?.selected_charges_id &&
                  props?.touched?.selected_charges_id && (
                    <InputError>
                      {props?.errors?.selected_charges_id}
                    </InputError>
                  )}
              </div>
              <div className="col-md-6 mt-3">
                <Input
                  margin="normal"
                  placeholder="Date"
                  type="date"
                  name="due_date"
                  value={props?.values?.due_date}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.due_date && props?.touched?.due_date
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.errors?.due_date && props?.touched?.due_date && (
                  <InputError>{props?.errors?.due_date}</InputError>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-9"></div>
              <div className="col-sm-3">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  size="small"
                >
                 Generate Bill
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default generateBillContainer(GenerateBillForm);
