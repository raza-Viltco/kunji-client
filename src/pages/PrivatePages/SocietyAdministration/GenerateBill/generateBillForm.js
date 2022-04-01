import React from "react";

import Dropdown from "../../../../components/Form/Dropdown";
import Button from "../../../../components/Button";
import "./generateBill.css";

const GenerateBillForm = () => {
  return (
    <>
      <h3>Generate Society Bill</h3>
      <div className="row">
        <div className="col-md-6">
          <Dropdown inputLabel="Select Resident " name="resident"></Dropdown>
        </div>
        <div className="col-md-6">
          <Dropdown inputLabel="Select Charges " name="charges"></Dropdown>
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
          Add Charges
        </Button>
      </div>
    </>
  );
};
export default GenerateBillForm;
