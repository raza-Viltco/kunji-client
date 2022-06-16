import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { contactsList } from "../../redux/actions/EmergencyContacts/EmergencyContacts";
import { societyProfile } from "../../redux/actions/Society/SocietyProfile";

const societyProfileContainer = (SocietyProfile) => () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.societyProfile.profileData);
  const emergencyContactsList = useSelector(
    (state) => state.emergencyContacts.contactsList
  );

  const societyContacts = emergencyContactsList.contacts;

  useEffect(() => {
    dispatch(societyProfile());
  }, []);

  useEffect(() => {
    dispatch(contactsList());
  }, []);

  return (
    <SocietyProfile
      profileData={profileData}
      societyContacts={societyContacts}
    />
  );
};

export default societyProfileContainer;
