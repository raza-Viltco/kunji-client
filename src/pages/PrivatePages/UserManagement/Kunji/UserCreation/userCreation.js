import React from "react";

import Input from "../../../../../components/Form/Input";
import Button from "../../../../../components/Button";
import Dropdown from "../../../../../components/Form/Dropdown";
import "./userCreation.css";

const UserCreationForm = () => {
  return (
    <>
      <div className="user-creation-upper-style">
        <h3>User Creation</h3>
        <div className="society_btn__wrapper">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // isLoading={stateLoading}
            size="small"
          >
            Import CSV
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mt-4">
          <Input label="Name" margin="normal" placeholder="Name" />
        </div>
        <div className="col-md-6 mt-4">
          <Input label="Email" margin="normal" placeholder="Email" />
        </div>
        <div className="col-md-6 mt-4">
          <Input label="Password" margin="normal" placeholder="Password" />
        </div>
        <div className="col-md-6 mt-4">
          <Input label="CNIC" margin="normal" placeholder="Cnic"  />
        </div>
        <div className="col-md-6 mt-4">
          <Input label="Mobile" margin="normal" placeholder="Mobile" />
        </div>
        <div className="col-md-6 mt-4">
          <Dropdown
            inputLabel="Department"
            name="society.country_id"
          ></Dropdown>
        </div>
        <div className="col-md-6 mt-4">
          <Dropdown inputLabel="Roles" name="society.country_id"></Dropdown>
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
          Add User
        </Button>
      </div>
    </>
  );
};
export default UserCreationForm;
