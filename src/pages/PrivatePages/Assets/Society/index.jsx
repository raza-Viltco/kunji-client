import React from "react";

import Card from "../../../../components/Card";
import AssetsForm from "./assets";
import AssetListing from "./assetListing";

const Assets = () => {
  return (
    <Card>
      <AssetsForm />
      <AssetListing />
    </Card>
  );
};
export default Assets;
