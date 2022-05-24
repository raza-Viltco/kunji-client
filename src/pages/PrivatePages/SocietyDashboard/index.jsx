import React from "react";

import "./societyDashboard.css";

const SocietyDashboard = () => {
  return (
    <>
      <h1 className="text-center">Society Admin Dashboard</h1>
      <div className="col-md-12 society-dashboard-flex">
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Users</h3>
            <p>1222</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Landloards</h3>
            <p>123</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Tenants</h3>
            <p>45</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Visitors</h3>
            <p>56</p>
          </div>
        </div>
      </div>

      <div className="col-md-12 society-dashboard-flex">
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Servants</h3>
            <p>56</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Complaints</h3>
            <p>67</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Departments</h3>
            <p>89</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Staff</h3>
            <p>96</p>
          </div>
        </div>
      </div>

      <div className="col-md-12 society-dashboard-flex-bottom">
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Bills</h3>
            <p>67</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="dashboard-card-style">
            <h3>Total Assests</h3>
            <p>78</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SocietyDashboard;
