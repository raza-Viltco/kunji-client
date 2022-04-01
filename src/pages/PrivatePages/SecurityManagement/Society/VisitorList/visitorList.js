import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Card from "../../../../../components/Card";
import "./visitorList.css";

const VisitorsList = () => {
  
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Resident Name", width: 160 },
    { field: "address", headerName: "Address", width: 160 },
    { field: "visitor", headerName: " Visitor Name", width: 160 },
    { field: "mobile", headerName: "Mobile No", width: 160 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "arrivalDate", headerName: "Arrival Date", width: 160 },
    { field: "arrivalTime", headerName: "Arrival Time", width: 160 },
    { field: "leavingDate", headerName: "Leaving Date", width: 160 },
    { field: "leavingTime", headerName: "Leaving Time", width: 160 },
    { field: "entryCode", headerName: "Entry Code", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      name: "Smith",
      address: "Lahore",
      visitor: "Joe",
      mobile: "7283423423432",
      email: "Joe131@gmail.com",
      arrivalDate: "12-3-2001",
      arrivalTime: "67:0:12",
      leavingDate: "5-2-1996",
      leavingTime: "45:0:0",
      entryCode: "23423",
    },
    {
      id: 2,
      name: "Jae",
      address: "Islamabad",
      visitor: "Jack",
      mobile: "7283423423432",
      email: "J131@gmail.com",
      arrivalDate: "12-3-2001",
      arrivalTime: "67:0:12",
      leavingDate: "5-2-1996",
      leavingTime: "45:0:0",
      entryCode: "23423",
    },
    {
      id: 3,
      name: "Amit",
      address: "Peshawar",
      visitor: "Joe",
      mobile: "7283423423432",
      email: "Joe131@gmail.com",
      arrivalDate: "12-3-2001",
      arrivalTime: "67:0:12",
      leavingDate: "5-2-1996",
      leavingTime: "45:0:0",
      entryCode: "23423",
    },
    {
      id: 4,
      name: "Rehman",
      address: "Model Town",
      visitor: "Aslam",
      mobile: "7283423423432",
      email: "Aslam131@gmail.com",
      arrivalDate: "12-3-2001",
      arrivalTime: "67:0:12",
      leavingDate: "5-2-1996",
      leavingTime: "45:0:0",
      entryCode: "23423",
    },
    {
      id: 5,
      name: "Akram",
      address: "DHA",
      visitor: "Akram",
      mobile: "7283423423432",
      email: "akram131@gmail.com",
      arrivalDate: "12-3-2001",
      arrivalTime: "67:0:12",
      leavingDate: "5-2-1996",
      leavingTime: "45:0:0",
      entryCode: "23423",
    },
  ];

  return (
    <Card>
      <h3>Visitor List</h3>

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
export default VisitorsList;
