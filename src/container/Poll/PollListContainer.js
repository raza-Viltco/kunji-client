import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { pollList } from "../../redux/actions/Poll/Poll";

const pollListContainer = (PoolList) => () => {
  const dispatch = useDispatch();

  const stateLoading = useSelector((state) => state.local.isLoading);
  const pollListData = useSelector((state) => state.poll.pollList);

  useEffect(() => {
    dispatch(pollList());
  }, []);

  return <PoolList stateLoading={stateLoading} pollListData={pollListData} />;
};
export default pollListContainer;
