import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { plotList } from "../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const plotListContainer = (AddPlotList) => () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(plotList());
  // }, []);
  // const plotListData = useSelector((state) => state.societyConfig.plotData);
  // const plotListing = plotListData.data;
  // console.log(plotListing,"plotlisting")
  return <AddPlotList  />;
};

export default plotListContainer;
