import React from "react";

import Input from "../../../../../components/Form/Input";
import Card from "../../../../../components/Card";
import Button from "../../../../../components/Button";
import "./registerFlat.css";

const RegisterFlat = () => {
  return (
    <>
      <Card>
        <h3 style={{ textAlign: "center" }}>Register Flat</h3>
        <div className="row">
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Building Name"
              name="buildingName"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Adress"
              name="adress"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Flat Name"
              name="flatName"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Floor Number"
              name="floorNumber"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              // label="Upload File"
              type="file"
              accept="image/*"
            />
          </div>
        </div>
        <div className="society_btn__wrapper">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // isLoading={stateLoading}
            size="small"
          >
            Register
          </Button>
        </div>
      </Card>
    </>
  );
};
export default RegisterFlat;
