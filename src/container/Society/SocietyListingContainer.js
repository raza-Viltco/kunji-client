import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { societyList } from "../../redux/actions/Society/SocietyListing";

const societyListingContainer = (SocietyListing) => () => {
  const dispatch = useDispatch();
  const societiesList = useSelector(
    (state) => state.societyListing.societyList
  );

  useEffect(() => {
    dispatch(societyList());
  }, []);

  

  return <SocietyListing societiesList={societiesList} />;
};

export default societyListingContainer;
