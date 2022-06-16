import React, { useEffect } from "react";

import Card from "../../../components/Card";
import societyProfileContainer from "../../../container/Society/SocietyProfileContainer";
import "./societyProfile.css";

const SocietyProfile = ({ profileData, societyContacts }) => {
  return (
    <Card>
      <h4>Society Profile</h4>
      <div className="row">
        <div className="col-md-6  mt-4">
          <label>
            <h5>Society Name</h5>
          </label>
          <p className="text-color">{profileData?.name}</p>
        </div>
        <div className="col-md-6  mt-4">
          <label>
            <h5>Country</h5>
          </label>
          <p className="text-color">{profileData?.country_id}</p>
        </div>
        <div className="col-md-6  mt-4">
          <label>
            <h5>City</h5>
          </label>
          <p className="text-color">{profileData?.city_id}</p>
        </div>
        <div className="col-md-6  mt-4">
          <label>
            <h5>Zip Code</h5>
          </label>
          <p className="text-color">{profileData?.zip_code}</p>
        </div>
        <div className="col-md-6  mt-4">
          <label>
            <h5>Society Type</h5>
          </label>
          <p className="text-color">
            {profileData?.society_type === 1 ? "Horizontal" : "Vertical"}
          </p>
        </div>

        <div className="col-md-6  mt-4">
          <h5>Society Contacts</h5>
          {societyContacts === null || societyContacts === undefined ? (
            "N/A"
          ) : (
            <div>
              {societyContacts?.map((item) => {
                return <>{item},</>;
              })}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
export default societyProfileContainer(SocietyProfile);
