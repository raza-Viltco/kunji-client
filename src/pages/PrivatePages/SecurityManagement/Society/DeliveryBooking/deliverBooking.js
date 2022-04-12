import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Card from "../../../../../components/Card";
import Button from "../../../../../components/Button";
import "./deliveryBooking.css";

const DeliveryBookingList = () => {
  
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Resident Name", width: 160 },
    { field: "address", headerName: " Resident Address", width: 160 },
    { field: "visitor", headerName: " Delivery Vendor", width: 160 },
    { field: "validFrom", headerName: "Arrival Date From", width: 160 },
    { field: "validTill", headerName: "Valid Till Date", width: 160 },
    { field: "arrivalTime", headerName: "Arrival Time From", width: 160 },
    {
      field: "notify",
      headerName: "Notify",
      width: 160,
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
            Notify
          </Button>
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Smith",
      address: "DHA",
      visitor: "Jack",
      validFrom: "12-2-2022",
      validTill: "16-2-2022",
      arrivalTime: "11:30 pm",
      notify: "Notify",
    },
    {
      id: 2,
      name: "Joe",
      address: "DHA",
      visitor: "ken",
      validFrom: "12-2-2022",
      validTill: "16-2-2022",
      arrivalTime: "11:30 pm",
      notify: "Notify",
    },
    {
      id: 3,
      name: "Ken",
      address: "DHA",
      visitor: "Jey",
      validFrom: "12-2-2022",
      validTill: "16-2-2022",
      arrivalTime: "11:30 pm",
      notify: "Notify",
    },
    {
      id: 4,
      name: "Smith",
      address: "Model Town",
      visitor: "Jeff",
      validFrom: "12-2-2022",
      validTill: "16-2-2022",
      arrivalTime: "11:30 pm",
      notify: "Notify",
    },
    {
      id: 5,
      name: "Jack",
      address: "Johar Town",
      visitor: "mark",
      validFrom: "12-2-2022",
      validTill: "16-2-2022",
      arrivalTime: "11:30 pm",
      notify: "Notify",
    },
  ];
  return (
    <Card>
      <h3>Resident Delivery Booking Information</h3>
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
export default DeliveryBookingList;
