import React from "react";

import Card from "../../../../../components/Card";
import Input from "../../../../../components/Form/Input";
import { DataGrid } from "@mui/x-data-grid";
import Button from "../../../../../components/Button";

import RadioButtons from "../../../../../components/Form/RadioButton";

import "./role.css";

const KunjiRole = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "society", headerName: "Society Name", width: 160 },
    { field: "module", headerName: " Module Name", width: 160 },
    { field: "activity", headerName: " Activity", width: 160 },
    { field: "action", headerName: " Action", width: 160 },
    { field: "permission", headerName: "Permissions", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      module: "Manager",
      society: "DHA",
      activity: "User Management",
      action: "Add",
      permission: "",
    },
  ];

  return (
    <Card>
      <h3>Roles Defining</h3>

      <div className="row">
        <div className="col-md-6">
          <Input label="Role Name" margin="normal" />
        </div>

        <div className="col-md-6 role-radio-outer">
          <h5>Role Status</h5>
          <div className="role-radio-inner">
            <p>Active</p>
            <RadioButtons />
          </div>
          <div className="society-radio-inner">
            <p>Inactive</p>
            <RadioButtons />
          </div>
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
          Create Role
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
      <div className="society_btn__wrapper">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          // isLoading={stateLoading}
          size="small"
        >
          Save
        </Button>
      </div>
    </Card>
  );
};
export default KunjiRole;
