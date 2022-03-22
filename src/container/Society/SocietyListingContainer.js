import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  societyList,
  editSocietyList,
  setSocietyEditId,
} from "../../redux/actions/Society/SocietyListing";

const societyListingContainer = (SocietyListing) => () => {
  const dispatch = useDispatch();
  const societiesList = useSelector(
    (state) => state.societyListing.societyList
  );
  const editId = useSelector((state) => state.societyListing.societyEditId);
  const editData = useSelector((state) => state.societyListing.societyEditList);
  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    dispatch(setSocietyEditId(id));
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (editId) {
      dispatch(editSocietyList(editId));
    }
  }, [editId]);

  useEffect(() => {
    dispatch(societyList());
  }, []);

  // console.log(editData);
  return (
    <SocietyListing
      open={open}
      societiesList={societiesList}
      editData={editData}
      handleClickOpen={handleClickOpen}
      handleClickClose={handleClickClose}
    />
  );
};

export default societyListingContainer;
