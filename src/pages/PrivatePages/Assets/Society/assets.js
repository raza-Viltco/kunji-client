import React from "react";
import { Form, Formik } from "formik";

import Button from "../../../../components/Button";
import Input from "../../../../components/Form/Input";
import InputError from "../../../../components/Form/InputError";
import societyAssetContainer from "../../../../container/SocietyAssets/SocietyAssetContainer";

const AssetsForm = ({
  initialValues,
  validationSchema,
  stateLoading,
  addAssetHandler,
}) => {
  return (
    <>
      <h4>Asset Management</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addAssetHandler}
      >
        {(props) => (
          <Form>
            {console.log(props)}
            <div className="row">
              <div className="col-md-6 mt-3">
                <Input
                  placeholder="Code"
                  name="code"
                  type="text"
                  value={props.values.code}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props.errors.code && props.touched.code
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props.touched.code && props.errors.code && (
                  <InputError>{props.errors.code}</InputError>
                )}
              </div>
              <div className="col-md-6 mt-3">
                <Input
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={props.values.name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props.errors.name && props.touched.name
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props.touched.name && props.errors.name && (
                  <InputError>{props.errors.name}</InputError>
                )}
              </div>
              <div className="col-md-6 mt-3">
                <Input
                  placeholder="Quantity"
                  name="quantity"
                  type="text"
                  value={props.values.quantity}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props.errors.quantity && props.touched.quantity
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props.touched.quantity && props.errors.quantity && (
                  <InputError>{props.errors.quantity}</InputError>
                )}
              </div>
              <div className="col-md-6 mt-3">
                <Input
                  placeholder="Location"
                  name="location"
                  type="text"
                  value={props.values.location}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props.errors.location && props.touched.location
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props.touched.location && props.errors.location && (
                  <InputError>{props.errors.location}</InputError>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9"></div>
              <div className="col-sm-3 mt-2">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  isLoading={stateLoading}
                  size="small"
                >
                  Add Asset
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default societyAssetContainer(AssetsForm);
