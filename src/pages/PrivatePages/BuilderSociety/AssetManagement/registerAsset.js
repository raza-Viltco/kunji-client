import React from "react";
import Input from "../../../../components/Form/Input";
import Card from "../../../../components/Card";

import "./registerAsset.css";

const RegisterAsset = () => {
  return (
    <>
      <Card>
        <h3 style={{ textAlign: "center" }}>Register Asset</h3>
        <div className="row">
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label=" Name"
              name="Name"
              type="text"
              helperText
            />
          </div>
          <div className="col-md-4">
            <Input
              margin="normal"
              fullWidth
              label="Adress"
              name="adress"
              type="text"
              helperText
            />
          </div>
        </div>
      </Card>
    </>
  );
};
export default RegisterAsset;
