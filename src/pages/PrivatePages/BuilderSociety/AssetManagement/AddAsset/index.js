import React from "react";
import { Formik, Form } from "formik";

import Input from "../../../../../components/Form/Input";
import Card from "../../../../../components/Card";
import Button from "../../../../../components/Button";
import societyAssetContainer from "../../../../../container/SocietyAssets/SocietyAssetContainer";
import "./registerAsset.css";

const RegisterAsset = ({
  initialValues,
  validationSchema,
  stateLoading,
  addAssetHandler,
}) => {
  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addAssetHandler}
      >
        {(props) => (
          <Form>
            <h3 style={{ textAlign: "center" }}>Add Asset</h3>

            <div className="row">
              <div className="col-md-12">
                <Input
                  margin="normal"
                  fullWidth
                  label="Name"
                  name="name"
                  type="text"
                  value={props.values.name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.name}
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
export default societyAssetContainer(RegisterAsset);
