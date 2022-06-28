import React from "react";

import Card from "../../../../components/Card";
import GenerateBillForm from "./generateBillForm";
import BillListing from "./billListing";
import { checkForPermission } from "../../../../utils/functions";

const GenerateBill = () => {
  return (
    <Card>
      {checkForPermission("Society Administration", "Generate Bill") && (
        <GenerateBillForm />
      )}
      {checkForPermission(
        "Society Administration",
        "Generate Society Bills"
      ) && <BillListing />}
    </Card>
  );
};
export default GenerateBill;
