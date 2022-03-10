import React from "react";
import "./userProfile.css";
import {
  Society_profile,
} from "../../../constants/AssetsConstants";
import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";

const UserProfile = () => {
  return (
    <>
      <div className="userProfile-background">
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
      <div className="userProfile-background mt-4">
        <Input
          margin="normal"
          fullWidth
          id="password"
          label="Old Password"
          name="password"
          type="text"
          helperText
        />
        <Input
          margin="normal"
          fullWidth
          id="password"
          label="New Password"
          name="password"
          type="text"
          helperText
        />
          <Input
          margin="normal"
          fullWidth
          id="password"
          label="Confirm Password"
          name="password"
          type="text"
          helperText
        />
        <div className="pt-3">
          <Button type="submit" fullWidth variant="contained" size="small">
            Update Password
          </Button>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
