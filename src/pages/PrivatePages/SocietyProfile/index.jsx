import React from "react";

import Card from "../../../components/Card";
import Input from "../../../components/Form/Input";
import "./societyProfile.css";

const SocietyProfile = () => {
  return (
    <Card>
      <h4>Society Profile</h4>
      <div className="row">
        <div className="col-md-6  mt-4">
          <Input
            className="bootstyle"
            margin="normal"
            fullWidth
            placeholder="Society Name"
            name="society_name"
            id="society_name"
            type="text"
          />
        </div>
        <div className="col-md-6  mt-4">
          <Input
            className="bootstyle"
            margin="normal"
            fullWidth
            placeholder="Country"
            name="country"
            id="country"
            type="text"
          />
        </div>
        <div className="col-md-6  mt-4">
          <Input
            className="bootstyle"
            margin="normal"
            fullWidth
            placeholder="City"
            name="city"
            id="city"
            type="text"
          />
        </div>
        <div className="col-md-6  mt-4">
          <Input
            className="bootstyle"
            margin="normal"
            fullWidth
            placeholder="Zip Code"
            name="zip_code"
            id="zip_code"
            type="text"
          />
        </div>
        <div className="col-md-6  mt-4">
          <Input
            className="bootstyle"
            margin="normal"
            fullWidth
            placeholder="Society type"
            name="zip_code"
            id="zip_code"
            type="text"
          />
        </div>
      </div>
    </Card>
  );
};
export default SocietyProfile;
