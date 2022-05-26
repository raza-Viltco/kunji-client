import React from "react";

import Card from "../../../components/Card";
import Button from "../../../components/Button";
import viewOwnershipContainer from "../../../container/PropertyOwnership/ViewOwnershipContainer";
import "./viewProperty.css";

const ViewProperty = ({ viewOwnershipData }) => {
  return (
    <Card>
      <div className="view-property-card">
        <h4>Flat Details</h4>
        <div className="col-md-6 view-property-flex">
          <div className="head-property">
            <p>Location</p>
            {/* <p>Area</p> */}
            <p>City</p>
            <p>Status</p>
          </div>
          <div>
            <p>
              {viewOwnershipData?.mapping_level_one_name +
                " " +
                viewOwnershipData?.mapping_level_two_name +
                " " +
                viewOwnershipData?.mapping_level_three_name}
            </p>
            {/* <p>5 Marla</p> */}
            <p>{viewOwnershipData?.city_name_from_society?.city?.name}</p>
            <p>{viewOwnershipData?.city_name_from_society?.status}</p>
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
            <p>{viewOwnershipData?.owner_detail?.name}</p>
            <p>{viewOwnershipData?.owner_detail?.cnic}</p>
            <p>{viewOwnershipData?.owner_detail?.mobile}</p>
            <p>{viewOwnershipData?.owner_detail?.email}</p>
          </div>
        </div>
      </div>

      {/* ------teanant details-------- */}
      <div className="view-property-card">
        <h3>Tenant Details</h3>
        <div className="col-md-6 view-property-flex">
          <div className="head-property">
            <p>Name</p>
            <p>CNIC</p>
            <p>Mobile No</p>
            <p>Email</p>
          </div>
          <div>
            <p>{viewOwnershipData?.tanent_detail?.name}</p>
            <p>{viewOwnershipData?.tanent_detail?.cnic}</p>
            <p>{viewOwnershipData?.tanent_detail?.mobile}</p>
            <p>{viewOwnershipData?.tanent_detail?.email}</p>
          </div>
        </div>
      </div>

      {/* <div className="view-prop-btn-outer">
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
      </div> */}
    </Card>
  );
};
export default viewOwnershipContainer(ViewProperty);
