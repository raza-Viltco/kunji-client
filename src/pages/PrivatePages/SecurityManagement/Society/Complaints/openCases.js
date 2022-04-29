import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import openCaseContainer from "../../../../../container/Security Management/Society/OpenCaseContainer";
import CaseCard from "../../../../../components/Cases/CaseCard";
import { setCaseId } from "../../../../../redux/actions/SecurityManagement/Society/Complaints";
import { Profile_Img } from "../../../../../constants/AssetsConstants";
import { dateFormat } from "../../../../../utils/functions";

const OpenCases = ({ openComplaints }) => {
  const history = useHistory();
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
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
                date={dateFormat(item.created_at)}
                onClick={() => {
                  history.push(`/caseDetail/${item.id}`);
                  dispatch(setCaseId(item.id));
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default openCaseContainer(OpenCases);
