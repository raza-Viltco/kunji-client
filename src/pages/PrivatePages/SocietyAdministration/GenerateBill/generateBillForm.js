import React from "react";

import Dropdown from "../../../../components/Form/Dropdown";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import "./generateBill.css";

const GenerateBillForm = () => {
  return (
    <>
      <h3>Generate Society Bill</h3>
      <div className="row">
        <div className="col-md-6">
          <Dropdown inputLabel="Select Resident "  className="bootstyle" name="resident" ></Dropdown>
        </div>
        <div className="col-md-6">
          <Dropdown inputLabel="Select Charges "  className="bootstyle" name="charges"></Dropdown>
        </div>
        <div className="col-md-6 mt-3">
          <Input className="bootstyle" label="Charges" margin="normal" placeholder="Charges" type="date" />
        </div>
     
      </div>

      <div className="row">
      <div className="col-sm-9"></div>
      <div className="col-sm-3">
      <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, borderRadius: 20 }}
          // isLoading={stateLoading}
          size="small"
        >
          Add Charges
        </Button>
      </div>
      </div>
     
    </>
  );
};
export default GenerateBillForm;
