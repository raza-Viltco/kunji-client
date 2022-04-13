import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

import Button from "../../../../components/Button";
import RadioButton from "../../../../components/Form/RadioButton";
import Card from "../../../../components/Card";
import "./societyListingView.css";

const SocietyListingView = () => {
  return (
    <Card>
      <div className="view-society-outer">
        <h3>Society Listing view</h3>
        <div className="col-md-12 society-view-inner-flex pt-3">
          <div className="col-md-6 ">
            <p className="head-font-style">Society Name</p>
            <p>DHA</p>
          </div>

          <div className="col-md-6">
            <p className="head-font-style">Country</p>
            <p>Pakistan</p>
          </div>
        </div>

        <div className="col-md-12 society-view-inner-flex pt-3">
          <div className="col-md-6 ">
            <p className="head-font-style">City</p>
            <p>Lahore</p>
          </div>

          <div className="col-md-6">
            <p className="head-font-style">Zip Code</p>
            <p>5478</p>
          </div>
        </div>

        <div className="col-md-12 society-view-inner-flex pt-3">
          <div className="col-md-6 ">
            <p className="head-font-style">Document Files</p>
            <p>Lahore</p>
          </div>

          <div className="col-md-6">
            <p className="head-font-style">Society Type</p>
            <p>Vertical</p>
          </div>
        </div>
        <h3 className="pt-3">Society Admins</h3>
        <div className="col-md-12 society-view-inner-flex pt-3">
          <div className="col-md-6 ">
            <p className="head-font-style">Admin Name</p>
            <p>Arslan Hanif</p>
          </div>

          <div className="col-md-6">
            <p className="head-font-style">Email</p>
            <p>arslam12@gmail.com</p>
          </div>
        </div>

        <div className="col-md-12 society-view-inner-flex pt-3">
          <div className="col-md-6 ">
            <p className="head-font-style">Contact Number</p>
            <p>03345678912</p>
          </div>

          <div className="col-md-6">
            <p className="head-font-style">Adress</p>
            <p>DHA Lahore</p>
          </div>
        </div>

        <div className="col-md-12 society-view-inner-flex pt-3">
          <div className="col-md-6 ">
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
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-sm-2">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  size="normal"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default SocietyListingView;
