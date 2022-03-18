import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const FlatListing = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "Building Name", width: 180 },
    {
      field: "adress",
      headerName: "Adress",
      width: 180,
    },
    {
      field: "flatname",
      headerName: "Flat Name",
      width: 180,
    },
    {
      field: "floornumber",
      headerName: "Floor Number",
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
      fullName: "Shangrila",
      adress: "Lahore",
      flatname: "DHA",
      floornumber: "3",
    },
    {
      id: 2,
      fullName: "Garrison",
      adress: "Lahore",
      flatname: "DHA",
      floornumber: "3",
    },
    {
      id: 3,
      fullName: "Urban Vila",
      adress: "Lahore",
      flatname: "DHA",
      floornumber: "3",
    },
    {
      id: 4,
      fullName: "Housing Authority",
      adress: "Lahore",
      flatname: "DHA",
      floornumber: "3",
    },
    {
      id: 5,
      fullName: "Suzhou IFS",
      adress: "Lahore",
      flatname: "DHA",
      floornumber: "3",
    },
    {
      id: 6,
      fullName: "Guangxi",
      adress: "Lahore",
      flatname: "DHA",
      floornumber: "3",
    },
    {
      id: 7,
      fullName: "Suzhou IFS",
      adress: "Lahore",
      flatname: "DHA",
      floornumber: "3",
    },
    {
      id: 8,
      fullName: "Housing Authority",
      adress: "Lahore",
      flatname: "DHA",
      floornumber: "3",
    },
    {
      id: 9,
      fullName: "Garrison",
      adress: "Lahore",
      flatname: "DHA",
      floornumber: "3",
    },
    {
      id: 10,
      fullName: "Urban Vila",
      adress: "Lahore",
      flatname: "DHA",
      floornumber: "3",
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
export default FlatListing;
