import React from "react";
import "./dashboardCards.css";
import { Icon1 } from "../../../constants/AssetsConstants";
import { Icon2 } from "../../../constants/AssetsConstants";
import { Icon3 } from "../../../constants/AssetsConstants";
import { Icon4 } from "../../../constants/AssetsConstants";

const DashboardCards = () => {
  return (
    <>
      <div className="row pt-2">
        <div className="col-sm-3">
          <div className="col-sm-12 " id="background-color-cards">
            <div className="row">
              <div className="col-sm-3 text-center">
                <img src={Icon1} className="img-fluid image-set" />
              </div>
              <div className="col-sm-9 m-auto">
                <div className="col-sm-12 m-auto pt-3 pl-0">
                  <h5 className="text-color-card">Society</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-sm-12 align-card">
              <h1>5</h1>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="col-sm-12 " id="background-color-cards">
            <div className="row">
              <div className="col-sm-3 text-center">
                <img src={Icon2} className="img-fluid image-set" />
              </div>
              <div className="col-sm-9 m-auto">
                <div className="col-sm-12 m-auto pt-3 pl-0">
                  <h5 className="text-color-card">Visitors</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-sm-12 align-card">
              <h1>60</h1>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="col-sm-12 " id="background-color-cards">
            <div className="row">
              <div className="col-sm-3 text-center">
                <img src={Icon3} className="img-fluid image-set" />
              </div>
              <div className="col-sm-9 m-auto">
                <div className="col-sm-12 m-auto pt-3 pl-0">
                  <h5 className="text-color-card">Members</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-sm-12 align-card">
              <h1>600</h1>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="col-sm-12 " id="background-color-cards">
            <div className="row">
              <div className="col-sm-3 text-center">
                <img src={Icon4} className="img-fluid image-set" />
              </div>
              <div className="col-sm-9 m-auto">
                <div className="col-sm-12 m-auto pt-3 pl-0">
                  <h5 className="text-color-card">Tenants</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-sm-12 align-card">
              <h1>50</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardCards;
