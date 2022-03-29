import React from "react";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import Dropdown from "../../../../components/Form/Dropdown";

const AddUser = () => {
  return (
    <>
      <Card>
        <h3 style={{ textAlign: "center" }}>Add New Member</h3>

        <div className="row">
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth2
              label=" Name"
              name="society.name"
              type="text"
              helperText
            />
          </div>

          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="CNIC"
              name="society.name"
              type="text"
              helperText
            />
          </div>

          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label=" Email"
              name="society.name"
              type="text"
              helperText
            />
          </div>

          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Mobile No"
              name="society.name"
              type="text"
              helperText
            />
          </div>

          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Password"
              name="society.name"
              type="text"
              helperText
            />
          </div>

          <div className="col-md-4">
            <Dropdown inputLabel="Roles" name="society.country_id"></Dropdown>
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
              Add
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};
export default AddUser;
