import React from "react";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import { DataGrid } from "@mui/x-data-grid";

const DefineBuilding = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "buildingcode", headerName: "Building Code", width: 160 },
    { field: "name", headerName: " Building Name", width: 160 },
    { field: "floors", headerName: " Number of Floors", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      buildingcode: "0001",
      name: "Arfa Tower",
      floors: "6",
    },
    {
      id: 2,
      buildingcode: "0002",
      name: "Ahad Tower",
      floors: "8",
    },

    {
      id: 3,
      buildingcode: "0003",
      name: "Jeff Heights",
      floors: "4",
    },
    {
      id: 4,
      buildingcode: "0004",
      name: "Kalma Heights",
      floors: "2",
    },
  ];
  return (
    <Card>
      <h3>Define Building</h3>
      <div className="row">
        <div className="col-md-6">
          <Input label="Building Code" margin="normal" />
        </div>
        <div className="col-md-6">
          <Input label="Building Name" margin="normal" />
        </div>
        <div className="col-md-6">
          <Input label="Number of Floors" margin="normal" />
        </div>
      </div>

      <div className="society_btn__wrapper">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="small"
        >
          Add Apartments
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
export default DefineBuilding;
