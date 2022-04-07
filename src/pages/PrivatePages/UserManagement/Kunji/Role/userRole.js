import React from "react";

import Input from "../../../../../components/Form/Input";
import Button from "../../../../../components/Button";
import RadioButtons from "../../../../../components/Form/RadioButton";
import "./role.css";
import RadioButton from "../../../../../components/Form/RadioButton";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const UserRole = () => {
  return (
    <>
      <h3>Roles Defining</h3>

      <div className="row">
        <div className="col-md-6">
          <div className="col-md-12 padding-left-role mb-2 mt-3">
            <label>
              <b className="text-color-role">Role Name</b>
            </label>
          </div>
          <Input
            label="Role Name"
            placeholder="Enter Role Name"
            margin="normal"
          />
        </div>

        <div className="col-md-6 "></div>

        <div className="col-md-2 padding-left-role m-auto">
          <div className="col-md-12 mt-4 Role-status ">
            <h5 className="text-color-role">
              <b>Role Status</b>
            </h5>
          </div>
        </div>

        <div className="col-md-4 ">
          <div className="col-md-12 mt-4 Role-status">
            <FormControlLabel
              value="horizontal"
              control={<Radio size="small" />}
              label="Horizontal"
            />
            <FormControlLabel
              value="verticle"
              control={<Radio size="small" />}
              label="Verticle"
            />
          </div>
        </div>

        <div className="col-md-6 role-radio-outer"></div>
      </div>

      <div className="row">
        <div className="col-sm-10"></div>
        <div className="col-sm-2">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 20 }}
            // isLoading={stateLoading}
            size="small"
          >
            Create Role
          </Button>
        </div>
      </div>
    </>
  );
};
export default UserRole;
