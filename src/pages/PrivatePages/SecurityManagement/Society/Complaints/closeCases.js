import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import closeCaseContainer from "../../../../../container/Security Management/Society/CloseCaseContainer";
import CaseCard from "../../../../../components/Cases/CaseCard";
import { setCaseId } from "../../../../../redux/actions/SecurityManagement/Society/Complaints";
import { Profile_Img } from "../../../../../constants/AssetsConstants";
import { dateFormat } from "../../../../../utils/functions";

const CloseCases = ({ closeComplaints }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="col-sm-12">
      <div className="col-sm-12 px-2 py-1">
        <h5>
          <b>Closed Cases</b>
        </h5>
      </div>
      <div className="col-sm-12 heightadjust">
        <div className="row">
          {closeComplaints?.length === 0 ? (
            <b className="text-center">No data found</b>
          ) : (
            closeComplaints?.map((item, index) => {
              return (
                <CaseCard
                  key={index}
                  id={item?.id}
                  title={item?.title}
                  description={item?.description}
                  src={
                    item?.user?.profile_picture
                      ? item?.user?.profile_picture
                      : Profile_Img
                  }
                  date={dateFormat(item?.created_at)}
                  onClick={() => {
                    history.push(`/caseDetail/${item?.id}`);
                    dispatch(setCaseId(item?.id));
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default closeCaseContainer(CloseCases);
