import React from "react";
import OpenCases from "./openCases";
import CloseCases from "./closeCases";
import "./Openclose.css";

function Complaints() {
  return (
    <div className="col-sm-12 backgroundcover pt-3 pb-2 ">
      <div className="col-sm-12 px-4 py-3">
        <h4>
          <b>Complaints</b>
        </h4>
      </div>
      <div className="col-sm-12 py-2 px-3">
        <OpenCases />
      </div>
      <div className="col-sm-12 py-2 px-3">
        <CloseCases />
      </div>
    </div>
  );
}

export default Complaints;
