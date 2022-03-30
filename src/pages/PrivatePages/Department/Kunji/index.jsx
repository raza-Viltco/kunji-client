import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import "./department.css";

const AddKunjiDepartment = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "code", headerName: "Code", width: 160 },
    { field: "name", headerName: "Department Name", width: 160 },
    { field: "status", headerName: "Status", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      code: "0001",
      name: "Finance",
      status: "Active ",
    },
    {
      id: 2,
      code: "0002",
      name: "Store",
      status: "Inactive ",
    },
    {
      id: 3,
      code: "0003",
      name: "Human Resources",
      status: "Active ",
    },
    {
      id: 4,
      code: "0004",
      name: "Security",
      status: "Active ",
    },
  ];

  return (
    <Card>
      <h3> Department</h3>

      <div className="row">
        <div className="col-md-6">
          <Input label="Code" margin="normal" />
        </div>
        <div className="col-md-6">
          <Input label="Department Name" margin="normal" />
        </div>
        <div className="col-md-6">
          <Input label="Status" margin="normal" />
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
          Add Department
        </Button>
      </div>
      <div>
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
export default AddKunjiDepartment;
