import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { societyDashboard } from "../../redux/actions/SocietyDashboard/SocietyDashboard";

const societyDashboardContainer = (SocietyDashboard) => () => {
  const dispatch = useDispatch();
  const dashboardDetails = useSelector(
    (state) => state.societyDashboard.societyData
  );
  console.log(dashboardDetails, "dashboardDetails");

  useEffect(() => {
    dispatch(societyDashboard());
  }, []);

  return <SocietyDashboard dashboardDetails={dashboardDetails} />;
};

export default societyDashboardContainer;
