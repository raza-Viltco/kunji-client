import React from "react";

import Input from "../../../../components/Form/Input";
import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import "./AddSociety.css";

const AddSociety = () => {
  return (
    <Card>
      <h4 className="text-center">Add Society</h4>
      <div className="row">
        <div className="col-md-4">
          <Input
            margin="normal"
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            type="text"
          />
        </div>
        <div className="col-md-4">
          <Input
            margin="normal"
            fullWidth
            id="name"
            label="Latitude"
            name="name"
            type="text"
          />
        </div>
        <div className="col-md-4">
          <Input
            margin="normal"
            fullWidth
            id="name"
            label="Longitude"
            name="name"
            type="text"
          />
        </div>
        <div className="col-md-4">
          <Input
            margin="normal"
            fullWidth
            id="name"
            label="Country"
            name="name"
            type="text"
          />
        </div>
        <div className="col-md-4">
          <Input
            margin="normal"
            fullWidth
            id="name"
            label="City"
            name="name"
            type="text"
          />
        </div>
        <div className="col-md-4">
          <Input
            margin="normal"
            fullWidth
            id="name"
            label="Zipcode"
            name="name"
            type="text"
          />
        </div>
      </div>
      <hr />
      <h4 className="text-center">Assign Admin</h4>
      <div className="row">
        <div className="col-md-4">
          <Input
            margin="normal"
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            type="text"
          />
        </div>
        <div className="col-md-4">
          <Input
            margin="normal"
            fullWidth
            id="name"
            label="Address"
            name="name"
            type="text"
          />
        </div>
        <div className="col-md-4">
          <Input
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
          />
        </div>
        <div className="col-md-4">
          <Input
            margin="normal"
            fullWidth
            name="mobile"
            label="Contact"
            type="text"
            id="mobile"
          />
        </div>
      </div>
      <div className="society_btn__wrapper">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, borderRadius: "1rem" }}
          // isLoading={stateLoading}
          size="small"
        >
          Sign Up
        </Button>
      </div>
    </Card>
  );
};

export default AddSociety;
