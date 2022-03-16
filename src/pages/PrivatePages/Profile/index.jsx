import React from "react";
import ProfileForm from "./profileForm";
import UserProfile from "./userProfile";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <div className="row main-profile">
        <div className="col-md-8">
          <ProfileForm />
        </div>
        <div className="col-md-4">
          <UserProfile />
        </div>
      </div>
    </>
  );
};
export default Profile;
