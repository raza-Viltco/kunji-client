import React from "react";

import Table from "../../../../../components/Table";
import Card from "../../../../../components/Card";
import Button from "../../../../../components/Button";
import "./deliveryBooking.css";
import deliveryBookingContainer from "../../../../../container/Security Management/Society/DeliveryBooking";

const DeliveryBookingList = ({ deliveryListData, stateLoading }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      type: "actions",
      headerName: "Resident Name",
      width: "200",
      getActions: (params) => [<div>{params?.row?.user?.name}</div>],
    },
    {
      field: "address",
      headerName: "Resident Address",
      width: 200,
      getActions: (params) => [<div>{params?.row?.user?.address}</div>],
    },
    { field: "visitor", headerName: " Delivery Vendor", width: 160 },
    { field: "order_no", headerName: " Order No", width: 160 },
    { field: "arrival_date_from", headerName: "Arrival Date From", width: 160 },
    { field: "arrival_date_to", headerName: "Valid Till Date", width: 160 },
    { field: "arrival_time_to", headerName: "Arrival Time From", width: 160 },
    { field: "arrival_time_form", headerName: "Arrival Time To", width: 160 },
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

  return (
    <Card>
      <h3>Resident Delivery Booking Information</h3>
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={deliveryListData}
          columns={columns}
          loading={stateLoading}
        />
      </div>
    </Card>
  );
};
export default deliveryBookingContainer(DeliveryBookingList);
