import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./staffListing.css";
const StaffListing = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "Name", width: 180 },
    {
      field: "designation",
      headerName: "Designation",
      width: 180,
    },
    {
      field: "number",
      headerName: "Number",
      width: 180,
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
    },

    {
      field: "edit",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <div>
          <AiFillEdit size={20} />    &nbsp;   <AiFillDelete size={20} /> &nbsp; <MdClose size={20} />
        </div>
      ),
    },
  
  ];

  const rows = [
    {
      id: 1,
      fullName: "Aristotle",
      designation: "Owner",
      number: "+92 3453875435",
      email: "user3221@gmail.com",
    },
    {
      id: 2,
      fullName: "Aristotle",
      designation: "Maid",
      number: "+92 3453875435",
      email: "user3221@gmail.com",
    },
    {
      id: 3,
      fullName: "Aristotle",
      email: "user3221@gmail.com",
      designation: "Owner",
      number: "+92 3453875435",
    },
    {
      id: 4,

      fullName: "Aristotle",
      email: "user3221@gmail.com",
      designation: "Owner",
      number: "+92 3453875435",
    },
    {
      id: 5,
      fullName: "Aristotle",
      designation: "Owner",
      number: "+92 3453875435",
      email: "user3221@gmail.com",
    },
    {
      id: 6,
      fullName: "Aristotle",
      designation: "Owner",
      number: "+92 3453875435",
      email: "user3221@gmail.com",
    },
    {
      id: 7,
      fullName: "Aristotle",
      designation: "Owner",
      number: "+92 3453875435",
      email: "user3221@gmail.com",
    },
    {
      id: 8,
      fullName: "Aristotle",
      designation: "Owner",
      number: "+92 3453875435",
      email: "user3221@gmail.com",
    },
    {
      id: 9,
      fullName: "Aristotle",
      designation: "Owner",
      number: "+92 3453875435",
      email: "user3221@gmail.com",
    },
    {
      id: 10,
      fullName: "Aristotle",
      designation: "Owner",
      number: "+92 3453875435",
      email: "user3221@gmail.com",
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
        />
      </div>
    </>
  );
};
export default StaffListing;
