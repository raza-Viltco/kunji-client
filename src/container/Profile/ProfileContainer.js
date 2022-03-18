import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { viewProfile } from "../../redux/actions/Profile/profile";

const profileContainer = (ProfileForm) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);
  //   const viewProfileData = useSelector((state) => state.profile.viewProfileData);

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

  //   const viewProfileHandler = (values) => {
  //     console.log(values);
  //   };

  useEffect(() => {
    dispatch(viewProfile());
    // console.log(viewProfile);
  }, []);

  return (
    <>
      <ProfileForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        // viewProfileData={viewProfileData}
        // viewProfileHandler={viewProfileHandler}
        stateLoading={stateLoading}
      />
    </>
  );
};

export default profileContainer;
