import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";

import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import { Profile_Img } from "../../../constants/AssetsConstants";
import UpdatePassword from "./updatePassword";
import { BiEditAlt } from "react-icons/bi";
import profileContainer from "../../../container/Profile/ProfileContainer";
import { setAppbarImg } from "../../../redux/actions/Profile/profile";

import "./profileForm.css";
import { borderRadius } from "@mui/system";

const ProfileForm = ({
  initialValues,
  validationSchema,
  viewProfileData,
  stateLoading,
  enableField,
  saveButton,
  editButton,
  cancelButton,
  handleSave,
  handleEdit,
  handleCancel,
  viewProfileHandler,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={viewProfileData || initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values) => viewProfileHandler(values, handleSave)}
      >
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            <div className="row main-profile">
              <div className="col-md-8">
                <Card>
                  <h3>General Information</h3>
                  <div className="row">
                    <div className="col-md-12  mt-2" >
                      <label className="padding-profile"><b>Name</b></label>
                      <Input
                        margin="normal"
                        fullWidth
                        id="name"
                        placeholder="Name"
                        name="name"
                        type="text"
                        className="bootstyle"
                      
                        disabled={enableField}
                        value={props.values.name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.errors.name}
                        helperText
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                    <label className="padding-profile"><b>Email</b></label>
                      <Input
                        className="bootstyle"
                        margin="normal"
                        fullWidth
                        id="email"
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={props.values.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.errors.email}
                        disabled={true}
                        helperText
                      />
                    </div>

                    <div className="col-md-12 mt-2">
                    <label className="padding-profile"><b>Phone</b></label>
                      <Input
                        className="bootstyle"
                        margin="normal"
                        fullWidth
                        id="number"
                        placeholder="Contact Number"
                        name="mobile"
                        type="text"
                        value={props.values.mobile}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        disabled={enableField}
                        error={props.errors.mobile}
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
                          sx={{borderRadius:20}}
                        >
                          Edit
                        </Button>
                      )}
                      <div className="d-flex">
                        {saveButton && (
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="small"
                            isLoading={stateLoading}
                            sx={{borderRadius:20}}
                          >
                            Save
                          </Button>
                        )}
                        &nbsp;
                        {cancelButton && (
                          <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            size="small"
                            click={handleCancel}
                            sx={{borderRadius:20}}
                          >
                            Cancel
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-md-4 text-center">
                <Card>
                  <div>
                    <img
                      className="society-profile-inner"
                      name="profile_picture"
                      src={
                        props?.values?.profile_picture
                          ? props?.values?.profile_picture
                          : Profile_Img
                      }
                      alt="profile_img"
                      width="150px"
                      height="150px"
                    />
                  </div>

                  <div>
                    <Input
                      margin="normal"
                      fullWidth
                      type="file"
                      name="profile_picture"
                      id="profile-picture"
                      hidden
                      onChange={(e) =>
                        props.setFieldValue(
                          "profile_picture",
                          URL.createObjectURL(e.target.files[0])
                        )
                      }
                      click={dispatch(
                        setAppbarImg(props.values.profile_picture)
                      )}
                      onBlur={props.handleBlur}
                    />
                    <label
                      type="button"
                      for="profile-picture"
                      className="profile-picture-icon"
                    >
                      <BiEditAlt size={40} />
                    </label>
                  </div>

                  <div>
                    <h3>{props.values.name}</h3>
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
