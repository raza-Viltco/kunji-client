import React from "react";
import Switch from "@mui/material/Switch";

import "./RoleList.css";

const RoleList = () => {
  return (
    <div className="col-sm-12">
      <h3>Defined Roles</h3>
      <div className="card-background col-md-4 ">
        <div className="row background-color-header">
          <div className="col-sm-6 m-auto pt-2">
            <h5>
              <b>Manager</b>
            </h5>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6 m-auto pt-2">
                <h6>
                  <b>Select All</b>
                </h6>
              </div>
              <div className="col-sm-6   text-end">
                <Switch />
              </div>
            </div>
          </div>
        </div>
        <div className="row background-color-header1">
          <div className="col-sm-6">
            <h5 className="pt-2">
              <b>User Creation</b>
            </h5>
          </div>
          <div className="col-sm-6 ">
            <div className="col-sm-12 text-end">
              <Switch />
            </div>
          </div>
        </div>
        <div className="row background-color-header1">
          <div className="col-sm-6">
            <h5 className="pt-2">
              <b>Approval</b>
            </h5>
          </div>
          <div className="col-sm-6 ">
            <div className="col-sm-12 text-end">
              <Switch />
            </div>
          </div>
        </div>
        <div className="row background-color-header1">
          <div className="col-sm-6">
            <h5 className="pt-2">
              <b>View Listing</b>
            </h5>
          </div>
          <div className="col-sm-6 ">
            <div className="col-sm-12 text-end">
              <Switch />
            </div>
          </div>
        </div>
        <div className="row background-color-header1">
          <div className="col-sm-6">
            <h5 className="pt-2">
              <b>Soft Delete</b>
            </h5>
          </div>
          <div className="col-sm-6 ">
            <div className="col-sm-12 text-end">
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RoleList;
