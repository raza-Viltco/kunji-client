import React from "react";

import Card from "../../../../components/Card";
import ChargesTypeForm from "./chargesType";
import ChargesList from "./chargesList";
import { checkForPermission } from "../../../../utils/functions";

const ChargesType = () => {
  return (
    <Card>
      {checkForPermission("Society Administration", "Add Society Charges") && (
        <ChargesTypeForm />
      )}
      {checkForPermission("Society Administration", "Charges List") && (
        <ChargesList />
      )}
    </Card>
  );
};
export default ChargesType;
