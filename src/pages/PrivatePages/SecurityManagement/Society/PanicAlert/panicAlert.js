import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Card from "../../../../../components/Card";
import "./panicAlert.css";

const PanicAlertList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Resident Name", width: 160 },
    { field: "address", headerName: " Resident Address", width: 160 },
    { field: "alertType", headerName: " Alert Type", width: 160 },
    { field: "contactNo", headerName: " Contact No", width: 160 },
    { field: "emergencyNo", headerName: " Emergency  No", width: 160 },
    { field: "location", headerName: "Location", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      name: "Smith",
      address: "DHA",
      alertType: "Fire",
      contactNo: "032424323324",
      emergencyNo: "234344444545",
      location: "Lahore",
    },
    {
      id: 2,
      name: "Akram",
      address: "Model Town",
      alertType: "Medical",
      contactNo: "033333344455",
      emergencyNo: "000004545",
      location: "Lahore",
    },
    {
      id: 3,
      name: "Jeff",
      address: "Garisson",
      alertType: "Emergency",
      contactNo: "0456324324324",
      emergencyNo: "23434445",
      location: "Lahore",
    },
    {
      id: 4,
      name: "Jack",
      address: "Urban Vilas",
      alertType: "Medical",
      contactNo: "0211232332432",
      emergencyNo: "233334344545",
      location: "Lahore",
    },
    {
      id: 5,
      name: "Mark",
      address: "DHA",
      alertType: "Fire",
      contactNo: "032424323324",
      emergencyNo: "2222234344444",
      location: "Lahore",
    },
  ];
  return (
    <Card>
      <h3>Panic Alerts</h3>

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
export default PanicAlertList;
