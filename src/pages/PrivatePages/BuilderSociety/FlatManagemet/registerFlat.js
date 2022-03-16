import React from "react";
import Input from "../../../../components/Form/Input";
import Card from "../../../../components/Card";
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
      </Card>
    </>
  );
};
export default RegisterFlat;
