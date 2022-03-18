import { React, useState } from "react";
import { Formik, Form } from "formik";

import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { Society_profile } from "../../../constants/AssetsConstants";
import UpdatePassword from "./updatePassword";
import { BiEditAlt } from "react-icons/bi";
import profileContainer from "../../../container/Profile/ProfileContainer";

import { useThemeProps } from "@mui/system";
import "./profileForm.css";

const ProfileForm = ({
  initialValues,
  validationSchema,
  viewProfileData,
  viewProfileHandler,
}) => {
  const [enableField, setEnableField] = useState(true);
  const [saveButton, setSaveButton] = useState(false);
  const [editButton, setEditButton] = useState(true);
  const [cancelButton, setCancelButton] = useState(false);

  const handleEdit = () => {
    setSaveButton(true);
    setCancelButton(true);
    setEditButton(false);
    setEnableField(false);
  };

  const handleSave = () => {
    setSaveButton(false);
    setCancelButton(false);
    setEditButton(true);
    setEnableField(false);
  };

  const handleCancel = () => {
    setSaveButton(false);
    setCancelButton(false);
    setEditButton(true);
    setEnableField(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={viewProfileHandler}
      >
        {(props) => (
          <Form>
            <div className="row main-profile">
              <div className="col-md-8">
                <Card>
                  <h3>General Information</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <Input
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        type="text"
                        disabled={enableField}
                        // value={props.value.name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.errors.name}
                        helperText
                      />
                    </div>
                    <div className="col-md-12">
                      <Input
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        type="email"
                        // value={props.value.email}
                        // onChange={props.handleChange}
                        // onBlur={props.handleBlur}
                        // error={props.errors.email}
                        disabled={true}
                        helperText
                      />
                    </div>

                    <div className="col-md-12">
                      <Input
                        margin="normal"
                        fullWidth
                        id="number"
                        label="Contact Number"
                        name="number"
                        type="text"
                        // value={props.mobile}
                        // error={props.errors.mobile}
                        // onChange={props.handleChange}
                        // onBlur={props.handleBlur}
                        disabled={enableField}
                        helperText
                      />
                    </div>
                  </div>
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
              </div>
              <div className="col-md-4">
                <Card>
                  <div style={{ textAlign: "center" }}>
                    <img
                      className="society-profile-inner"
                      src={Society_profile}
                      alt=""
                      width="150px"
                      height="150px"
                    />
                    {/* <input type="file"></input> */}
                    <h3>Smith</h3>
                    <p>Description</p>
                  </div>
                </Card>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="col-md-8">
        <UpdatePassword />
      </div>
    </>
  );
};
export default profileContainer(ProfileForm);
