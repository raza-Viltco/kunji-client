import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./assetListing.css";

const AssetListing = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "Name", width: 180 },
    {
      field: "adress",
      headerName: "Adress",
      width: 180,
    },

    {
      field: "edit",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <div>
          <AiFillEdit size={20} /> &nbsp; <AiFillDelete size={20} /> &nbsp;{" "}
          <MdClose size={20} />
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      fullName: "Aristotle",
      adress: "Lahore",
    },
    {
      id: 2,
      fullName: "Aristotle",
      adress: "Lahore",
    },
    {
      id: 3,
      fullName: "Aristotle",
      adress: "Lahore",
    },
    {
      id: 4,
      fullName: "Aristotle",
      adress: "Lahore",
    },
    {
      id: 5,
      fullName: "Aristotle",
      adress: "Lahore",
    },
    {
      id: 6,
      fullName: "Aristotle",
      adress: "Lahore",
    },
    {
      id: 7,
      fullName: "Aristotle",
      adress: "Lahore",
    },
    {
      id: 8,
      fullName: "Aristotle",
      adress: "Lahore",
    },
    {
      id: 9,
      fullName: "Aristotle",
      adress: "Lahore",
    },
    {
      id: 10,
      fullName: "Aristotle",
      adress: "Lahore",
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
export default AssetListing;
