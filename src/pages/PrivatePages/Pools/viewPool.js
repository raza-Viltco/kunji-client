import React from "react";

import viewPollContainer from "../../../container/Poll/ViewPollContainer";
import "./viewpool.css";

const ViewPool = ({ viewPollData }) => {
  const pollVotes = viewPollData.get_poll_question;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 m-auto">
          <div className="col-sm-12 mt-4 text-center cardstyle pt-1">
            <h5 className="pt-4 pb-2">
              <b>{viewPollData?.question}</b>
            </h5>

            {pollVotes?.map((user) => (
              <div className="row pt-2 pb-3">
                <div className="col-sm-6">
                  <p className="textcolor">{user.options}</p>
                </div>
                <div className="col-sm-6">
                  <p className="textcolor">{user.votes_count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-sm-6 pt-5 ">
          <div className="col-sm-12 text-center cardstyle pt-1">
            <h5 className="pt-4 pb-4">
              <b>Total votes</b>
            </h5>
            <h6 className="pt-4 pb-4 textcolor">{viewPollData.total_votes}</h6>
          </div>
          <div className="col-sm-12 text-center cardstyle mt-4 pt-1">
            <h5 className="pt-4 pb-4">
              <b>Days Left</b>
            </h5>
            <h6 className="pt-4 pb-4 textcolor">
              {viewPollData.days_left}&nbsp;Days
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default viewPollContainer(ViewPool);
