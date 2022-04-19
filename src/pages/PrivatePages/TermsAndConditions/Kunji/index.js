import React from "react";

import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import TextArea from "../../../../components/Form/textArea";
import "./termsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <Card>
      <h3>Terms and Condition</h3>

      <TextArea
        rows="8"
        placeholder="Terms and Conditions"
        id="terms"
        name="terms"
      ></TextArea>

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
            Update
          </Button>
        </div>
      </div>

      <div className="society_btn__wrapper"></div>
    </Card>
  );
};
export default TermsAndConditions;
