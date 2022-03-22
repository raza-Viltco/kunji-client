import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  viewProfile,
  profileUpdate,
} from "../../redux/actions/Profile/profile";

const profileContainer = (ProfileForm) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);
  const viewProfileData = useSelector((state) => state.profile.profileData);
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
    setEnableField(true);
  };

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    profile_picture: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is reqired"),
    email: Yup.string().required("email is required"),
    mobile: Yup.string().required("mobile number is required"),
    profile_picture: Yup.string().required("image is required"),
  });

  const viewProfileHandler = (values, customParam) => {
    console.log(values, customParam);
    dispatch(profileUpdate({ values, customParam }));
  };

  useEffect(() => {
    dispatch(viewProfile());
  }, []);

  return (
    <ProfileForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      viewProfileData={viewProfileData}
      stateLoading={stateLoading}
      enableField={enableField}
      saveButton={saveButton}
      editButton={editButton}
      cancelButton={cancelButton}
      handleSave={handleSave}
      handleEdit={handleEdit}
      handleCancel={handleCancel}
      viewProfileHandler={viewProfileHandler}
    />
  );
};

export default profileContainer;
