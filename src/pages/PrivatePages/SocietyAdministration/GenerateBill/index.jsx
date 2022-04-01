import React from "react";

import Card from "../../../../components/Card";
import GenerateBillForm from "./generateBillForm";
import BillListing from "./billListing";

const GenerateBill = () => {

  return (
    <Card>
    <GenerateBillForm/>
    <BillListing/>
    </Card>
  );
};
export default GenerateBill;
