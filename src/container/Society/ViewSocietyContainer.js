import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  societyStatus,
  viewSociety,
} from "../../redux/actions/Society/ViewSociety";
import { useParams } from "react-router-dom";

const viewSoietyContainer = (SocietyListingView) => () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { viewId } = params;
  //   console.log(viewId, "viewid");
  const viewSocietyData = useSelector(
    (state) => state.viewSociety.viewSocietyData
  );
  // console.log(viewSocietyData, "viewSocietyData");

  const initialValues = {
    status: "",
  };

  const validationSchema = Yup.object().shape({
    status: Yup.string().required("status is required!"),
  });

  const handleStatusChange = (values) => {
    // console.log("status change button is clicked");
    // console.log(values, "values");
    // console.log(society_id, "societyId");
    values.society_id = viewId;
    console.log(values);
    dispatch(societyStatus(values));
  };

  useEffect(() => {
    dispatch(viewSociety(viewId));
  }, [viewId]);

  return (
    <SocietyListingView
      initialValues={initialValues}
      validationSchema={validationSchema}
      viewSocietyData={viewSocietyData}
      handleStatusChange={handleStatusChange}
    />
  );
};
export default viewSoietyContainer;
