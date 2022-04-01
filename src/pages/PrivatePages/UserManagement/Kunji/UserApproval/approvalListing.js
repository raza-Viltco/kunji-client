import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Button from "../../../../../components/Button";

const UserApprovalListing = () => {
  
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "role", headerName: "Role", width: 160 },
    { field: "name", headerName: " Name", width: 160 },
    { field: "birth", headerName: " Date of Birth", width: 160 },
    { field: "cnic", headerName: " CNIC", width: 160 },
    { field: "mobile", headerName: "Mobile No", width: 160 },
    { field: "society", headerName: "Society", width: 160 },
    { field: "building", headerName: "Building", width: 160 },
    { field: "flat", headerName: "Flat No", width: 160 },

    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => (
        <div style={{ display: "flex" }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // isLoading={stateLoading}
            size="small"
          >
            Active
          </Button>
          &nbsp;
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // isLoading={stateLoading}
            size="small"
          >
            In Active
          </Button>
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      role: "Manager",
      name: "Ahmad",
      birth: "05-10-2001",
      cnic: "3242342-23432-2",
      mobile: "030903246523432",
      society: "DHA",
      building: "Arfa",
      flat: "1",
      status: "Approve",
    },
    {
      id: 2,
      role: "Resident",
      name: "Ahmad",
      birth: "05-10-2001",
      cnic: "3242342-23432-2",
      mobile: "030903246523432",
      society: "DHA",
      building: "Arfa",
      flat: "1",
      status: "Reject",
    },
    {
      id: 3,
      role: "Manager",
      name: "Ahmad",
      birth: "05-10-2001",
      cnic: "3242342-23432-2",
      mobile: "030903246523432",
      society: "DHA",
      building: "Arfa",
      flat: "1",
      status: "Approve",
    },
    {
      id: 4,
      role: "Tenant",
      name: "Ahmad",
      birth: "05-10-2001",
      cnic: "3242342-23432-2",
      mobile: "030903246523432",
      society: "DHA",
      building: "Arfa",
      flat: "1",
      status: "Reject",
    },
    {
      id: 5,
      role: "Landlord",
      name: "Ahmad",
      birth: "05-10-2001",
      cnic: "3242342-23432-2",
      mobile: "030903246523432",
      society: "DHA",
      building: "Arfa",
      flat: "1",
      status: "Approve",
    },
  ];

  return (
    <>
      <h3>User Approvals</h3>

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
    </>
  );
};
export default UserApprovalListing;
