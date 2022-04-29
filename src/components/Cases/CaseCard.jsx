import React from "react";

const CaseCard = ({ title, src, description, id, date, onClick }) => {
  return (
    <div className="col-sm-6 px-4 pt-3" onClick={onClick}>
      <div className="cardborder px-2 pt-2">
        <div className="row">
          <div className="col-sm-2 mt-1 ">
            <div className="col-sm-12 ">
              <img src={src} className="imagecardstyle" />
            </div>
          </div>
          <div className="col-sm-6 ">
            <div className="col-sm-12">
              <p className="fontname2">
                <b>{title}</b>
              </p>
              <h6 className="fontname1">{description}</h6>
            </div>
          </div>
          <div className="col-sm-4 styleright text-end">
            <p className="fontname ">
              <b>Case No.{id}</b>
            </p>
            <h6 className="fontname3 ">{date}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
