import React from "react";

import societyDashboardContainer from "../../../container/SocietyDashboard/SocietyDashboardContainer";
import "./societyDashboard.css";

const SocietyDashboard = ({ dashboardDetails }) => {
  return (
    <>
      <h1 className="text-center">Society Admin Dashboard</h1>
      <div className="col-md-12 society-dashboard-flex">
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Users</h3>
            <p>{dashboardDetails?.total_user}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Landloards</h3>
            <p>{dashboardDetails?.total_landloards}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Tenants</h3>
            <p>{dashboardDetails?.total_tenant}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Visitors</h3>
            <p>{dashboardDetails?.total_visitor}</p>
          </div>
        </div>
      </div>

      <div className="col-md-12 society-dashboard-flex">
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Servants</h3>
            <p>{dashboardDetails?.total_servent}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Complaints</h3>
            <p>{dashboardDetails?.total_cmplaints}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Departments</h3>
            <p>{dashboardDetails?.total_departent}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Staff</h3>
            <p>{dashboardDetails?.total_staff}</p>
          </div>
        </div>
      </div>

      <div className="col-md-12 society-dashboard-flex-bottom">
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Bills</h3>
            <p>{dashboardDetails?.total_bill}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Assests</h3>
            <p>{dashboardDetails?.total_assets}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default societyDashboardContainer(SocietyDashboard);
