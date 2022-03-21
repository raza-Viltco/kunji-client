import React from "react";
import Checkbox from "@mui/material/Checkbox";

import Card from "../../../components/Card";
import Dropdown from "../../../components/Form/Dropdown";
import Button from "../../../components/Button";
import "./roles.css";

const Role = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Card>
      <h3 className="roles_heading_style">Roles </h3>
      <div className="col-md-12">
        <Dropdown inputLabel="Roles" name="roles"></Dropdown>
      </div>
      <h3 className="permissions_heading_style">Permissions</h3>
      <div className="col-md-12 permissions_outer">
        <div className="permissions_inner">
          <Checkbox {...label} /> <p>Register Society</p>
        </div>

        <div className="permissions_inner">
          <Checkbox {...label} /> <p>Edit Society</p>
        </div>

        <div className="permissions_inner">
          <Checkbox {...label} /> <p>Change Society Status</p>
        </div>

        <div className="permissions_inner">
          <Checkbox {...label} /> <p>View User List</p>
        </div>

        <div className="permissions_inner">
          <Checkbox {...label} /> <p>Add Society Assets</p>
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
          Submit
        </Button>
      </div>
    </Card>
  );
};

export default Role;
