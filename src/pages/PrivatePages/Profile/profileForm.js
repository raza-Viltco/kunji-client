import { React, useState } from "react";
import "./profileForm.css";
import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
const ProfileForm = () => {
  const [saveButton, setSaveButton] = useState(false);
  const [editButton, setEditButton] = useState(true);
  const [cancelButton, setCancelButton] = useState(false);

  const handleEdit = () => {
    setSaveButton(true);
    setCancelButton(true);
    setEditButton(false);
  };

  const handleSave = () => {
    setSaveButton(false);
    setCancelButton(false);
    setEditButton(true);
  };

  const handleCancel = () => {
    setSaveButton(false);
    setCancelButton(false);
    setEditButton(true);
  };
  return (
    <>
       <Card>
        <h3>General Information</h3>
        <div className="row">
          <div className="col-md-6">
            <Input
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-6">
            <Input
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              helperText
            />
          </div>
          <div className="col-md-6">
            <Input
              margin="normal"
              fullWidth
              id="number"
              label="Contact Number"
              name="number"
              type="text"
              helperText
            />
          </div>
        </div>
        {/* <div className="row pt-5">
          <div className="col-md-8">
            <Input
              margin="normal"
              fullWidth
              id="address"
              label="Address"
              name="address"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              id="number"
              label="Number"
              name="number"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              id="city"
              label="City"
              name="city"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              id="zip"
              label="Zip"
              name="zip"
              type="text"
              helperText
            />
          </div>
        </div> */}

        <div className="form-button-outer">
          <div className="">
            {editButton && (
              <Button
                type="button"
                fullWidth
                variant="contained"
                size="small"
                click={handleEdit}
              >
                Edit
              </Button>
            )}
            <div className="d-flex">
              {saveButton && (
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  size="small"
                  click={handleSave}
                >
                  Save
                </Button>
              )}
              &nbsp;
              {cancelButton && (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="small"
                  click={handleCancel}
                >
                  Cancel
                </Button>
              )}
            </div>
          </div>
        </div>
        </Card>
    </>
  );
};
export default ProfileForm;
