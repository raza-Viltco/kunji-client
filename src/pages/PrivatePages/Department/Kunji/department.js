import React from "react";

import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import "./department.css";

const DepartmentForm = () => {
  return (
    <>
      <h3> Department</h3>

      <div className="row">
        <div className="col-md-6">
          <Input label="Code" margin="normal" />
        </div>
        <div className="col-md-6">
          <Input label="Department Name" margin="normal" />
        </div>
        <div className="col-md-6">
          <Input label="Status" margin="normal" />
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
          Add Department
        </Button>
      </div>
    </>
  );
};
export default DepartmentForm;
