import React from "react";

import Card from "../../../../../components/Card";
import Input from "../../../../../components/Form/Input";
import Button from "../../../../../components/Button";
import Dropdown from "../../../../../components/Form/Dropdown";
import "./addStaff.css"

const AddKunjiStaff=()=>{
    
    return(
        <Card>
        <div className="add-staff-upper-style">
          <h3>Add Staff Member</h3>
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
          <div className="col-md-6">
            <Input label="Name" margin="normal" />
          </div>
          <div className="col-md-6">
            <Input label="Email" margin="normal"  />
          </div>
          <div className="col-md-6">
            <Input label="Password" margin="normal"  />
          </div>
          <div className="col-md-6">
            <Input label="CNIC" margin="normal"  />
          </div>
          <div className="col-md-6">
            <Input label="Mobile" margin="normal"  />
          </div>
          <div className="col-md-6">
            <Dropdown
              inputLabel="Department"
              name="society.country_id"
            ></Dropdown>
          </div>
          <div className="col-md-6">
          <Dropdown
              inputLabel="Roles"
              name="society.country_id"
            ></Dropdown>
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
              Add Member
            </Button>
          </div>
      </Card>
    );
}
export default AddKunjiStaff;