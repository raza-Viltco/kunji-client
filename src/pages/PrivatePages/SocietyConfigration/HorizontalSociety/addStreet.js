import React from "react";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "../../../../components/Form/Dropdown";
import "./addStreet.css";

const AddStreet = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "sector", headerName: "Sector", width: 160 },
    { field: "name", headerName: " Name", width: 160 },
  ];

  const rows = [
    {
      sector: "1001",
      name: "Sector A",
      id: 1,
    },
    {
      sector: "2001",
      name: "Sector B",
      id: 2,
    },

    {
      sector: "3001",
      name: "Sector C",
      id: 3,
    },
    {
      sector: "4001",
      name: "Sector D",
      id: 4,
    },
  ];
  return (
    <Card>
      <h3>Add Street</h3>
      <div className="row">
        <div className="col-md-6">
          <Dropdown
            inputLabel="Sector/Block No"
            name="society.country_id"
          ></Dropdown>
        </div>

        <div className="col-md-6">
          <Input label="Street No" />
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
          Add Street
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
export default AddStreet;
