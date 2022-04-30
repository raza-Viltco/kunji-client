import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { viewPoll } from "../../redux/actions/Poll/Poll";

const viewPollContainer = (ViewPool) => () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { poll_id } = params;

  const viewPollData = useSelector((state) => state.poll.viewPoll);

  useEffect(() => {
    dispatch(viewPoll(poll_id));
  }, [poll_id]);

  return <ViewPool viewPollData={viewPollData} />;
};

export default viewPollContainer;
