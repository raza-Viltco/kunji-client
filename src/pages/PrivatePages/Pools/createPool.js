import React from "react";

import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import TextArea from "../../../components/Form/textArea";
import Dropdown from "../../../components/Form/Dropdown";

const CreatePool = () => {
  return (
    <div
      className="col-sm-12 p-5"
      style={{ backgroundColor: "white", borderRadius: "10px" }}
    >
      <div className="row">
        <div className="col-sm-6">
          <div className="col-sm-12">
            <label className="px-2">
              <b>Your Question</b>
            </label>
            <TextArea
              className="bootstyle"
              rows="9"
              placeholder="Terms and Conditions"
              id="terms"
              name="terms"
            ></TextArea>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="col-sm-12">
            <label className="px-2">
              <b>Option 1</b>
            </label>
            <Input
              className="bootstyle"
              label="Notice Title"
              margin="normal"
              placeholder="Ali"
            />
          </div>
          <div className="col-sm-12 mt-2">
            <label className="px-2">
              <b>Option 2</b>
            </label>
            <Input
              className="bootstyle"
              label="Notice Title"
              margin="normal"
              placeholder="Ali"
            />
          </div>
          <div className="col-sm-12 mt-2">
            <label className="px-2">
              <b>Option 3</b>
            </label>
            <Input
              className="bootstyle"
              label="Notice Title"
              margin="normal"
              placeholder="Ali"
            />
          </div>

          <div className="col-sm-12 mt-2">
            <label className="px-2">
              <b>Validity</b>
            </label>
                <Dropdown
                  inputLabel="Country"
                  name="society"
                  className="bootstyle"
                >
                  <option>Validity</option>
                 
                </Dropdown>
                
              </div>

     
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="col-sm-12 mt-2">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  size="small"
                >
                  Create Poll
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePool;
