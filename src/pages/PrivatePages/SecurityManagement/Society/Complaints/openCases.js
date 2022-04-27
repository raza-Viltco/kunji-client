import React from "react";
import { useHistory } from "react-router-dom";

import openCaseContainer from "../../../../../container/Security Management/Society/OpenCaseContainer";
import CaseCard from "../../../../../components/Cases/CaseCard";
import { Profile_Img } from "../../../../../constants/AssetsConstants";

const OpenCases = ({ openComplaints }) => {
  const history = useHistory();
  return (
    <div className="col-sm-12 mb-3">
      <div className="col-sm-12 px-2 py-1">
        <h5>
          <b>Open Cases</b>
        </h5>
      </div>
      <div className="col-sm-12 heightadjust">
        <div className="row">
          {openComplaints?.map((item, index) => {
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
                onClick={() => history.push("/caseDetail/:id")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default openCaseContainer(OpenCases);
