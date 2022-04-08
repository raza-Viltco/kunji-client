import React from "react";

import Button from "../../../../components/Button";

const AssetsForm = () => {
  return (
    <>
      <h3>Asset Management</h3>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
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
          Add Asset
        </Button>
      </div>
    </>
  );
};
export default AssetsForm;
