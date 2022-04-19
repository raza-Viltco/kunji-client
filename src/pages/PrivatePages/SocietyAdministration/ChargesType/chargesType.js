import React from "react";

import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import "./chargesType.css";

const ChargesTypeForm = () => {
  return (
    <>
      <h3>Society Charges</h3>
      <div className="row">
        <div className="col-md-6">
          <Input className="bootstyle" label="Charges Code" margin="normal"  />
        </div>
        <div className="col-md-6">
          <Input className="bootstyle" label="Charges Title" margin="normal" />
        </div>
        <div className="col-md-6 mt-3">
          <Input className="bootstyle" label="Charges" margin="normal" />
        </div>
      </div>

      <div className="row">
      <div className="col-sm-9"></div>
      <div className="col-sm-3">
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
      </div>
      
    </>
  );
};
export default ChargesTypeForm;
