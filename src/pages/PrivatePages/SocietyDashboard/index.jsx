import React from "react";
import { Link } from "react-router-dom";

import societyDashboardContainer from "../../../container/SocietyDashboard/SocietyDashboardContainer";
import "./societyDashboard.css";

const SocietyDashboard = ({ dashboardDetails }) => {
  return (
    <>
      <h1 className="text-center">Society Admin Dashboard</h1>
      <div className="col-md-12 society-dashboard-flex">
        <div className="col-md-3 dashboard-item-outer">
          <Link to="/user_kunji_approval">
            <div className="dashboard-card-style">
              <h3>Total Users</h3>
              <p>{dashboardDetails?.total_user}</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 dashboard-item-outer">
          <div className="dashboard-card-style">
            <h3>Total Landloards</h3>
            <p>{dashboardDetails?.total_landloards}</p>
          </div>
        </div>
        <div className="col-md-3 dashboard-item-outer">
          <div className="dashboard-card-style">
            <h3>Total Tenants</h3>
            <p>{dashboardDetails?.total_tenant}</p>
          </div>
        </div>
        <div className="col-md-3 dashboard-item-outer">
          <Link to="/society_visitor_list">
            <div className="dashboard-card-style">
              <h3>Total Visitors</h3>
              <p>{dashboardDetails?.total_visitor}</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="col-md-12 society-dashboard-flex">
        <div className="col-md-3 dashboard-item-outer">
          <Link to="/servant_visitor_list">
            <div className="dashboard-card-style">
              <h3>Total Servants</h3>
              <p>{dashboardDetails?.total_servent}</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 dashboard-item-outer">
          <Link to="/complaints">
            <div className="dashboard-card-style">
              <h3>Total Complaints</h3>
              <p>{dashboardDetails?.total_cmplaints}</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 dashboard-item-outer">
          <Link to="/add_kunji_department">
            <div className="dashboard-card-style">
              <h3>Total Departments</h3>
              <p>{dashboardDetails?.total_departent}</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 dashboard-item-outer">
          <Link to="/staff_member_list">
            <div className="dashboard-card-style">
              <h3>Total Staff</h3>
              <p>{dashboardDetails?.total_staff}</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="col-md-12 society-dashboard-flex-bottom">
        <div className="col-md-3 dashboard-item-outer">
          <Link to="/view_bill">
            <div className="dashboard-card-style">
              <h3>Total Bills</h3>
              <p>{dashboardDetails?.total_bill}</p>
            </div>
          </Link>
        </div>
        <div className="col-md-3 dashboard-item-outer">
          <Link to="/assets">
            <div className="dashboard-card-style">
              <h3>Total Assests</h3>
              <p>{dashboardDetails?.total_assets}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default societyDashboardContainer(SocietyDashboard);
