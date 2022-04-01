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
          <Input label="Charges Code" margin="normal" />
        </div>
        <div className="col-md-6">
          <Input label="Charges Title" margin="normal" />
        </div>
        <div className="col-md-6">
          <Input label="Charges" margin="normal" />
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
export default ChargesTypeForm;
