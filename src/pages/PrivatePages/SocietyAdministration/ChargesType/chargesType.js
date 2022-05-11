import React from "react";
import { Formik, Form } from "formik";

import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import addChargesContainer from "../../../../container/SocietyAdministration/AddChargesContainer";
import InputError from "../../../../components/Form/InputError";
import "./chargesType.css";

const ChargesTypeForm = ({
  initialValues,
  validationSchema,
  handleAddCharges,
}) => {
  return (
    <>
      <h3>Society Charges</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddCharges}
      >
        {(props) => (
          <Form>
            {/* {console.log(props, "props")} */}
            <div className="row">
              <div className="col-md-6">
                <Input
                  label="Charges Code"
                  margin="normal"
                  placeholder="Charges Code"
                  name="charges_code"
                  id="charges_code"
                  value={props?.values?.charges_code}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.charges_code && props?.touched?.charges_code
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.errors?.charges_code &&
                  props?.touched?.charges_code && (
                    <InputError>{props?.errors?.charges_code}</InputError>
                  )}
              </div>
              <div className="col-md-6">
                <Input
                  label="Charges Title"
                  margin="normal"
                  placeholder="Charges Title"
                  name="charges_title"
                  value={props?.values?.charges_title}
                  onChange={props.handleChange}
                  onblur={props.handleChange}
                  className={
                    props?.errors?.charges_title &&
                    props?.touched?.charges_title
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.errors?.charges_title &&
                  props?.touched?.charges_title && (
                    <InputError>{props?.errors?.charges_title}</InputError>
                  )}
              </div>
              <div className="col-md-6 mt-3">
                <Input
                  label="Charges"
                  margin="normal"
                  placeholder="Charges"
                  name="charges"
                  value={props?.values?.charges}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.touched?.charges && props?.errors?.charges
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.charges && props?.errors?.charges && (
                  <InputError>{props?.errors?.charges}</InputError>
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
                  Add Charges
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default addChargesContainer(ChargesTypeForm);
