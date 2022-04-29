import React from "react";

import "./viewpool.css";

const ViewPool = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 m-auto">
          <div className="col-sm-12 mt-4 text-center cardstyle pt-1">
            <h5 className="pt-4 pb-2">
              <b>What New Services Would You Like To See?</b>
            </h5>
            <div className="row pt-2 pb-3">
              <div className="col-sm-6">
                <p className="textcolor">New Vike Rocks</p>
              </div>
              <div className="col-sm-6">
                <p className="textcolor">20%</p>
              </div>
            </div>
            <div className="row pt-2 pb-3">
              <div className="col-sm-6">
                <p className="textcolor">New Vike Rocks</p>
              </div>
              <div className="col-sm-6">
                <p className="textcolor">20%</p>
              </div>
            </div>
            <div className="row pt-2 pb-3">
              <div className="col-sm-6">
                <p className="textcolor">New Vike Rocks</p>
              </div>
              <div className="col-sm-6">
                <p className="textcolor">20%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 pt-5 ">
          <div className="col-sm-12 text-center cardstyle pt-1">
            <h5 className="pt-4 pb-4">
              <b>Total votes</b>
            </h5>
            <h6 className="pt-4 pb-4 textcolor">432</h6>
          </div>
          <div className="col-sm-12 text-center cardstyle mt-4 pt-1">
            <h5 className="pt-4 pb-4">
              <b>Total votes</b>
            </h5>
            <h6 className="pt-4 pb-4 textcolor">432</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewPool;
