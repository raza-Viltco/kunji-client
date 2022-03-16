import React from "react";
import "./userProfile.css";
import { Society_profile } from "../../../constants/AssetsConstants";
import Card from "../../../components/Card";
import UpdatePassword from "./updatePassword";

const UserProfile = () => {
  return (
    <>
      <Card>
        <div style={{ textAlign: "center" }}>
          <img
            className="society-profile-inner"
            src={Society_profile}
            alt=""
            width="150px"
            height="150px"
          />
          <h3>Smith</h3>
          <p>Description</p>
        </div>
      </Card>
      <div>
        <UpdatePassword />
      </div>
    </>
  );
};
export default UserProfile;
