import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { facilitiesListing } from "../../redux/actions/Facilities/FacilitiesListing";

const facilitiesListingContainer = (FacilitiesListing) => () => {
  const dispatch = useDispatch();
  const facilityList = useSelector((state) => state.facility.facilitiesListing);

  useEffect(() => {
    dispatch(facilitiesListing());
  }, []);

  return <FacilitiesListing facilityList={facilityList}/>;
};

export default facilitiesListingContainer;
