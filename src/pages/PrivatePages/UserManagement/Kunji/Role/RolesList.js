import React from "react";
import Switch from "@mui/material/Switch";

import "./RoleList.css";

const RoleList = () => {
  return (
    <>
      <h3>Defined Roles</h3>
      <div className="card-background col-md-4">
        <div className=" define-roles-inner-flex manager-block-style">
          <div className="col-md-3">
            <p>Manager</p>
          </div>
          <div className="col-md-3 roles-permission-inner">
            <p>Select All</p>
            <Switch />
          </div>
        </div>

        <div className=" define-roles-inner-flex">
          <div className="col-md-3">
            <p>User Creation</p>
          </div>
          <div className="col-md-3 roles-permission-inner">
            <Switch />
          </div>
        </div>

        <div className=" define-roles-inner-flex">
          <div className="col-md-3">
            <p>Approval</p>
          </div>
          <div className="col-md-3 roles-permission-inner">
            <Switch />
          </div>
        </div>

        <div className=" define-roles-inner-flex">
          <div className="col-md-3">
            <p>View Listing</p>
          </div>
          <div className="col-md-3 roles-permission-inner">
            <Switch />
          </div>
        </div>

        <div className=" define-roles-inner-flex">
          <div className="col-md-3">
            <p>Soft Delete</p>
          </div>
          <div className="col-md-3 roles-permission-inner">
            <Switch />
          </div>
        </div>

      </div>
    </>
  );
};
export default RoleList;
