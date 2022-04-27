import React from "react";

import closeCaseContainer from "../../../../../container/Security Management/Society/CloseCaseContainer";
import CaseCard from "../../../../../components/Cases/CaseCard";
import { Profile_Img } from "../../../../../constants/AssetsConstants";

const CloseCases = ({ closeComplaints }) => {
  return (
    <div className="col-sm-12">
      <div className="col-sm-12 px-2 py-1">
        <h5>
          <b>Closed Cases</b>
        </h5>
      </div>
      <div className="col-sm-12 heightadjust">
        <div className="row">
          {closeComplaints?.map((item, index) => {
            return (
              <CaseCard
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                src={
                  item.user.profile_picture
                    ? item.user.profile_picture
                    : Profile_Img
                }
                date={item.created_at.split("T")[0]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default closeCaseContainer(CloseCases);
