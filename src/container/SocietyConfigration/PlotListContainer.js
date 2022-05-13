import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { appartmentList } from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const plotListContainer = (AddPlotList) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appartmentList());
  }, []);

  const appartmentListData = useSelector(
    (state) => state.societyConfig.appartmentData
  );
  const appartmentListing = appartmentListData.data;
  const stateLoading = useSelector((state) => state.local.isLoading);

  return (
    <AddPlotList
      appartmentListing={appartmentListing}
      stateLoading={stateLoading}
    />
  );
};

export default plotListContainer;
