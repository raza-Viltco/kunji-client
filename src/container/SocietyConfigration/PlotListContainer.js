import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { appartmentList } from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const plotListContainer = (AddPlotList) => () => {
  const dispatch = useDispatch();

  const appartmentListData = useSelector(
    (state) => state.societyConfig.appartmentData
  );
  // const appartmentListing = appartmentListData.data;
  const stateLoading = useSelector((state) => state.local.isLoading);
  console.log(appartmentListData)

  useEffect(() => {
    dispatch(appartmentList());
  }, []);

  return (
    <AddPlotList
      appartmentListing={appartmentListData}
      stateLoading={stateLoading}
    />
  );
};

export default plotListContainer;
