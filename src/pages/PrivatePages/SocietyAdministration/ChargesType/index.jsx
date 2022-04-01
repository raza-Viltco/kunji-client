import React from "react";

import Card from "../../../../components/Card";
import ChargesTypeForm from "./chargesType";
import ChargesList from "./chargesList";

const ChargesType = () => {
  return (
    <Card>
      <ChargesTypeForm />
      <ChargesList />
    </Card>
  );
};
export default ChargesType;
