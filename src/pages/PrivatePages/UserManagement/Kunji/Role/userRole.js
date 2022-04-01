import React from "react";

import Input from "../../../../../components/Form/Input";
import Button from "../../../../../components/Button";
import RadioButtons from "../../../../../components/Form/RadioButton";
import "./role.css";

const UserRole = () => {
    
  return (
    <>
      <h3>Roles Defining</h3>

      <div className="row">
        <div className="col-md-6">
          <Input label="Role Name" margin="normal" />
        </div>

        <div className="col-md-6 role-radio-outer">
          <h5>Role Status</h5>
          <div className="role-radio-inner">
            <p>Active</p>
            <RadioButtons />
          </div>
          <div className="society-radio-inner">
            <p>Inactive</p>
            <RadioButtons />
          </div>
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
          Create Role
        </Button>
      </div>
    </>
  );
};
export default UserRole;
