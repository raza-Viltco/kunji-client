import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";

import "./registerUser.css";

const BuilderRegisterUser = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "Full Name", width: 180 },
    {
      field: "email",
      headerName: "Email",
      width: 180,
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 180,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
    },
    {
      field: "date",
      headerName: "Request",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Approve
        </Button>
      ),
    },

    {
      field: "close",
      headerName: "Cancel",
      width: 80,
      renderCell: (params) => (
        <div>
          <MdClose size={20} />
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      contact: "+92 345678910",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      contact: "+92 345678910",
      status: "In Active",
    },
    {
      id: 3,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      contact: "+92 345678910",
      status: "Active",
    },
    {
      id: 4,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      contact: "+92 345678910",
      status: "In Active",
    },
    {
      id: 5,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      contact: "+92 345678910",
      status: "Active",
    },
    {
      id: 6,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      contact: "+92 345678910",
      status: "Active",
    },
    {
      id: 7,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      contact: "+92 345678910",
      status: "Active",
    },
    {
      id: 8,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      contact: "+92 345678910",
      status: "Active",
    },
    {
      id: 9,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      contact: "+92 345678910",
      status: "Active",
    },
    {
      id: 10,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      contact: "+92 345678910",
      status: "Active",
    },
  ];
  return (
    <>
      <div style={{ height: 520, width: "100%", background: "white" }}>
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
export default BuilderRegisterUser;
