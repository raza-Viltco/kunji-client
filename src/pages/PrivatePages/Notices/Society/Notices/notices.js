import React from "react";

import Card from "../../../../../components/Card";
import Input from "../../../../../components/Form/Input";
import Dropdown from "../../../../../components/Form/Dropdown";
import Button from "../../../../../components/Button";
// import TextareaAutosize from "@mui/material/TextareaAutosize";

import "./notices.css";

const NoticeForm = () => {
  return (
    <Card>
      <h3>Notice</h3>
      <div className="row">
        <div className="col-md-6">
          <Input className="bootstyle" label="Notice Title" margin="normal" />
        </div>
        <div className="col-md-6">
          <Input className="bootstyle" label="Notice Detail" margin="normal" multiline rows="4" />
          {/* <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            variant="filled"
            style={{ width: 300 }}
          /> */}
        </div>
        <div className="col-md-6 mt-3">
          <Dropdown inputLabel="Recipent " className="bootstyle" name="recipent"></Dropdown>
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
          Send Notice
        </Button>
      </div>
      </div>


    </Card>
  );
};
export default NoticeForm;
