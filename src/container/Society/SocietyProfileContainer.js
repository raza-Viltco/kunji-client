import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { societyProfile } from "../../redux/actions/Society/SocietyProfile";

const societyProfileContainer = (SocietyProfile) => () => {
  const dispatch = useDispatch();
  const profileData = useSelector(state => state.societyProfile.profileData)

  console.log(profileData)

  useEffect(() => {
    dispatch(societyProfile());
  }, []);

  return <SocietyProfile profileData={profileData} />;
};

export default societyProfileContainer;
