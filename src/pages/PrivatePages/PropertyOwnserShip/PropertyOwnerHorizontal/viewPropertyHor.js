import React from "react";

import Card from "../../../../components/Card";
import Button from "../../../../components/Button";

const ViewPropertyHor = () => {
  return (
    <Card>
      <div className="view-property-card">
        <h4>House Details</h4>
        <div className="col-md-6 view-property-flex">
          <div className="head-property">
            <p>Location</p>
            <p>Area</p>
            <p>City</p>
            <p>Status</p>
          </div>
          <div>
            <p>252-A DHA</p>
            <p>5 Marla</p>
            <p>Lahore</p>
            <p>Rented</p>
          </div>
        </div>
      </div>

      {/* -----owner details--------- */}
      <div className="view-property-card">
        <h3>Owner Details</h3>
        <div className="col-md-6 view-property-flex">
          <div className="head-property">
            <p>Name</p>
            <p>CNIC</p>
            <p>Mobile No</p>
            <p>Email</p>
          </div>
          <div>
            <p>Ahmed</p>
            <p>344556-3242443242-2</p>
            <p>034354545422</p>
            <p>ahmed12@gmail.com</p>
          </div>
        </div>
      </div>

      {/* ------teanant details-------- */}
      <div className="view-property-card">
        <h3>Teanant Details</h3>
        <div className="col-md-6 view-property-flex">
          <div className="head-property">
            <p>Name</p>
            <p>CNIC</p>
            <p>Mobile No</p>
            <p>Email</p>
          </div>
          <div>
            <p>teanant</p>
            <p>344556-3242443242-2</p>
            <p>034354545422</p>
            <p>abc12@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="view-prop-btn-outer">
        <div className="society_btn__wrapper">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 20 }}
            // isLoading={stateLoading}
            size="small"
          >
            Done
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default ViewPropertyHor;
