import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik, Form } from "formik";

import Button from "../../../../components/Button";
import RadioButton from "../../../../components/Form/RadioButton";
import Card from "../../../../components/Card";
import viewSoietyContainer from "../../../../container/Society/ViewSocietyContainer";
import "./societyListingView.css";

const SocietyListingView = ({
  viewSocietyData,
  initialValues,
  validationSchema,
  handleStatusChange,
}) => {
  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleStatusChange}
      >
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            <div className="view-society-outer">
              <h3>Society Listing view</h3>
              <div className="col-md-12 society-view-inner-flex pt-3">
                <div className="col-md-6 ">
                  <p className="head-font-style">Society Name</p>
                  <p>{viewSocietyData?.name}</p>
                </div>

                <div className="col-md-6">
                  <p className="head-font-style">Country</p>
                  <p>{viewSocietyData?.country?.name}</p>
                </div>
              </div>

              <div className="col-md-12 society-view-inner-flex pt-3">
                <div className="col-md-6 ">
                  <p className="head-font-style">City</p>
                  <p>{viewSocietyData?.city?.name}</p>
                </div>

                <div className="col-md-6">
                  <p className="head-font-style">Zip Code</p>
                  <p>{viewSocietyData?.zip_code}</p>
                </div>
              </div>

              <div className="col-md-12 society-view-inner-flex pt-3">
                {/* <div className="col-md-6 ">
            <p className="head-font-style">Document Files</p>
            <p>Lahore</p>
          </div> */}

                <div className="col-md-6">
                  <p className="head-font-style">Society Type</p>
                  <p>
                    {viewSocietyData?.society_type === 0
                      ? "Vertical"
                      : "Horizontal"}
                  </p>
                </div>

                <div className="col-md-6">
                  <p className="head-font-style">Current Status</p>
                  <p>
                    {viewSocietyData?.status === 0 ? "In Active" : "Active"}
                  </p>
                </div>
              </div>
              {/* <h3 className="pt-3">Society Admins</h3>
        <div className="col-md-12 society-view-inner-flex pt-3">
          <div className="col-md-6 ">
            <p className="head-font-style">Admin Name</p>
            <p>Arslan Hanif</p>
          </div>

          <div className="col-md-6">
            <p className="head-font-style">Email</p>
            <p>arslam12@gmail.com</p>
          </div>
        </div> */}

              {/* <div className="col-md-12 society-view-inner-flex pt-3">
          <div className="col-md-6 ">
            <p className="head-font-style">Contact Number</p>
            <p>03345678912</p>
          </div>

          <div className="col-md-6">
            <p className="head-font-style">Adress</p>
            <p>DHA Lahore</p>
          </div>
        </div> */}

              <div className="col-md-12 society-view-inner-flex pt-3">
                {/* <div className="col-md-6 ">
            <div className="col-md-12  ">
              <RadioButton label="Type" row>
                <FormControlLabel
                  value={1}
                  control={<Radio size="small" />}
                  label="Horizontal"
                  name="society.society_type"
                />
                <FormControlLabel
                  value={0}
                  control={<Radio size="small" />}
                  label="Vertical"
                  name="society.society_type"
                />
              </RadioButton>
            </div>
          </div> */}

                <div className="col-md-6 ">
                  <div className="col-md-12 mt-5 ">
                    <RadioButton label="Change Status" row>
                      <FormControlLabel
                        value={1}
                        control={<Radio size="small" />}
                        label="Active"
                        name="status"
                        onChange={props.handleChange}
                      />
                      <FormControlLabel
                        value={0}
                        control={<Radio size="small" />}
                        label="In Active"
                        name="status"
                        onChange={props.handleChange}
                      />
                    </RadioButton>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-2">
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                        // isLoading={stateLoading}
                        size="normal"
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
export default viewSoietyContainer(SocietyListingView);
