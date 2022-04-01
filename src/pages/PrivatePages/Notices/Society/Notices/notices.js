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
          <Input label="Notice Title" margin="normal" />
        </div>
        <div className="col-md-6">
          <Input label="Notice Detail" margin="normal" multiline rows="4" />
          {/* <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            variant="filled"
            style={{ width: 300 }}
          /> */}
        </div>
        <div className="col-md-6">
          <Dropdown inputLabel="Recipent " name="recipent"></Dropdown>
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
          Send Notice
        </Button>
      </div>
    </Card>
  );
};
export default NoticeForm;
