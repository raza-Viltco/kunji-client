import React from "react";

import Card from "../../../../../components/Card";
import Input from "../../../../../components/Form/Input";
import Dropdown from "../../../../../components/Form/Dropdown";
import Button from "../../../../../components/Button";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextArea from "../../../../../components/Form/textArea";

import "./notices.css";

const NoticeForm = () => {
  return (
    <Card>
      <h4>Notice</h4>
      <div className="row">
        <div className="col-md-12">
          <Input
            className="bootstyle"
            label="Notice Title"
            margin="normal"
            placeholder="Title"
          />
        </div>
        <div className="col-sm-12 mt-3">
          <TextArea
          
            placeholder="Terms and Conditions"
            id="terms"
            name="terms"
         
            
          ></TextArea>
        </div>
        <div className="col-md-12 mt-3">
          <Dropdown
            inputLabel="Recipent "
            className="bootstyle"
            name="recipent"
          ></Dropdown>
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
