import React from "react";

import Button from "../../../../components/Button";

const AssetsForm = () => {
  return (
    <>
      <h4>Asset Management</h4>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
      </div>
      <div className="row">
        <div className="col-sm-9"></div>
        <div className="col-sm-3 mt-2">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, borderRadius:20 }}
          // isLoading={stateLoading}
          size="small"
        >
          Add Asset
        </Button>
        </div>
      </div>
    
    </>
  );
};
export default AssetsForm;
