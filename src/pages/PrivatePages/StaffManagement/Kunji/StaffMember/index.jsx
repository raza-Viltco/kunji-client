import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Card from "../../../../../components/Card";
import "./staffMember.css";

const StaffKunjiMember = () => {
    
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: " Name", width: 160 },
    { field: "role", headerName: "Role", width: 160 },
    { field: "username", headerName: "User Name", width: 160 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "cnic", headerName: " CNIC", width: 160 },
    { field: "mobile", headerName: "Mobile No", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      role: "Manager",
      name: "Ahmad",
      username: "ali_",
      email: "ahmed131@gmail.com",
      cnic: "3242342-23432-2",
      mobile: "030903246523432",
    },
    {
      id: 2,
      role: "Manager",
      name: "Ahmad",
      username: "ali_",
      email: "ahmed131@gmail.com",
      cnic: "3242342-23432-2",
      mobile: "030903246523432",
    },
    {
      id: 3,
      role: "Manager",
      name: "Ahmad",
      username: "ali_",
      email: "ahmed131@gmail.com",
      cnic: "3242342-23432-2",
      mobile: "030903246523432",
    },
    {
      id: 4,
      role: "Manager",
      name: "Ahmad",
      username: "ali_",
      email: "ahmed131@gmail.com",
      cnic: "3242342-23432-2",
      mobile: "030903246523432",
    },
    {
      id: 5,
      role: "Manager",
      name: "Ahmad",
      username: "ali_",
      email: "ahmed131@gmail.com",
      cnic: "3242342-23432-2",
      mobile: "030903246523432",
    },
  ];
  return (
    <Card>
      <h3>Staff Members</h3>

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
export default StaffKunjiMember;
