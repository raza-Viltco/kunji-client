import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import "./addSector.css";

const AddSector = () => {
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
      <h3> Add Sector/Block No:</h3>

      <div className="row">
        <div className="col-md-6">
          <Input label="Sector/Block No" />
        </div>
        <div className="col-md-6">
          <Input label="Sector Name" />
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
      <div>
        <h3 className="sector-list-heading">Add Sector/ Block Listing</h3>
        <div
          style={{
            height: 420,
            width: "100%",
            background: "white",
            textAlign: "center",
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
      </div>
    </Card>
  );
};
export default AddSector;
