import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  assetListing,
  editAsset,
  updateAsset,
  removeAsset,
  setNullAsset
} from "../../redux/actions/Asset/AddAsset";

const assetListingContainer = (AssetListing) => () => {
  const dispatch = useDispatch();
  const assetList = useSelector((state) => state.asset.assetListing);
  const stateLoading = useSelector((state) => state.local.isLoading);
  // const editId = useSelector((state) => state.asset.assetId);
  const editData = useSelector((state) => state.asset.editAsset);
  const updatedAsset = useSelector((state) => state.asset.updateAsset);
  const [show, setShow] = useState(false);

  // const initialValues = {
  //   code: "",
  //   name: "",
  //   location: "",
  //   quantity: "",
  // };

  const validationSchema = Yup.object().shape({
    code: Yup.string().required("Code is required."),
    name: Yup.string().required("Asset name is required."),
    location: Yup.string().required("Location is required."),
    quantity: Yup.number().required("Quantity is required."),
  });

  const handleModalClose = () => { 
    setShow(false) 
    dispatch(setNullAsset(null))
  };

  const handleAssetModal = (id) => {
    dispatch(editAsset(id));
  };

  const handleAssetRemove = (id) => {
    dispatch(removeAsset(id));
  };

  const updateAssetHandler = (values, customParam) => {
    dispatch(updateAsset({ values, customParam }));
  };

  console.log(editData)

  useEffect(() => {
    dispatch(assetListing());
  }, [updatedAsset]);

  useEffect(() => {
    if (!!editData) {
      setShow(true);
    }
  }, [editData]);

  return (
    <AssetListing
      assetListing={assetList}
      stateLoading={stateLoading}
      // initialValues={initialValues}
      validationSchema={validationSchema}
      editData={editData}
      show={show}
      handleAssetModal={handleAssetModal}
      handleModalClose={handleModalClose}
      handleAssetRemove={handleAssetRemove}
      updateAssetHandler={updateAssetHandler}
    />
  );
};

export default assetListingContainer;
