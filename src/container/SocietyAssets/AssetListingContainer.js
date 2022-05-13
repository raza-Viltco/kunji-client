import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { assetListing, editAsset } from "../../redux/actions/Asset/AddAsset";

const assetListingContainer = (AssetListing) => () => {
  const dispatch = useDispatch();
  const assetList = useSelector((state) => state.asset.assetListing);
  const stateLoading = useSelector((state) => state.local.isLoading);
  const editId = useSelector((state) => state.asset.assetId);
  const editData = useSelector((state) => state.asset.editAsset);

  console.log(editId);
  console.log(editData);

  const initialValues = {
    code: "",
    name: "",
    location: "",
    quantity: "",
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string().required("Code is required."),
    name: Yup.string().required("Asset name is required."),
    location: Yup.string().required("Location is required."),
    quantity: Yup.number().required("Quantity is required."),
  });

  const updateAssetHandler = (values) => {
    console.log(values);
  };

  useEffect(() => {
    dispatch(assetListing());
  }, []);

  useEffect(() => {
    if (editId) {
      dispatch(editAsset(editId));
    }
  }, [editId]);

  return (
    <AssetListing
      assetListing={assetList}
      stateLoading={stateLoading}
      initialValues={initialValues}
      validationSchema={validationSchema}
      editData={editData}
      updateAssetHandler={updateAssetHandler}
    />
  );
};

export default assetListingContainer;
