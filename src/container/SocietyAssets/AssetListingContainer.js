import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { assetListing } from "../../redux/actions/Asset/AddAsset";

const assetListingContainer = (AssetListing) => () => {
  const dispatch = useDispatch();
  const assetList = useSelector((state) => state.asset.assetListing);

  useEffect(() => {
    dispatch(assetListing());
  }, []);

  return <AssetListing assetListing={assetList} />;
};

export default assetListingContainer;
