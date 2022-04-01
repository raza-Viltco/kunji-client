import React from "react";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "../../../../components/Form/Dropdown";
import "./addPlots.css";

const AddPlots = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "sector", headerName: "Sector/Block", width: 160 },
    { field: "street", headerName: " Street", width: 160 },
    { field: "plot", headerName: " Plot/ House No", width: 160 },
  ];

  const rows = [
    {
      street: "1001",
      sector: "Sector A",
      id: 1,
      plot: 1,
    },
    {
      street: "2001",
      sector: "Sector B",
      id: 2,
      plot: 99,
    },

    {
      street: "3001",
      sector: "Sector C",
      id: 3,
      plot: 200,
    },
    {
      street: "4001",
      sector: "Sector D",
      id: 4,
      plot: 57,
    },
  ];
  return (
    <Card>
      <div className="row">
        <div className="col-md-6">
          <Dropdown
            inputLabel="Select Sector/Block No"
            name="society.country_id"
          ></Dropdown>
        </div>
        <div className="col-md-6">
          <Dropdown inputLabel="Street" name="society.country_id"></Dropdown>
        </div>
        <div className="col-md-6">
          <Input label="Plot/House No" />
        </div>
      </div>
      <div className="society_btn__wrapper">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          // isLoading={stateLoading}
          size="small"
        >
         Add Plots
        </Button>
      </div>
      <div
        style={{
          height: 420,
          width: "100%",
          background: "white",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
    </Card>
  );
};
export default AddPlots;
