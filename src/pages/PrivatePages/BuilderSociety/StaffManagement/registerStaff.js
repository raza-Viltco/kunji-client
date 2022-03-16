import React from "react";
import "./registerStaff.css";
import Input from "../../../../components/Form/Input";
import Dropdown from "../../../../components/Form/Dropdown";
import Card from "../../../../components/Card";

const RegisterStaff = () => {
  return (
    <>
      <Card>
        <h3 style={{ textAlign: "center" }}>Register Staff</h3>
        <div className="row">
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Name"
              name="name"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Designation"
              name="designation"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Number"
              name="number"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Email"
              name="email"
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
          <div className="col-md-4">
            <Dropdown inputLabel="Roles" name="roles"></Dropdown>
          </div>
        </div>
      </Card>
    </>
  );
};
export default RegisterStaff;
