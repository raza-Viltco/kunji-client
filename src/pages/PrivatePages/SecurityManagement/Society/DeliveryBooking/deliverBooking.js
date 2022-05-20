import React from "react";

import Table from "../../../../../components/Table";
import Card from "../../../../../components/Card";
import "./deliveryBooking.css";
import deliveryBookingContainer from "../../../../../container/Security Management/Society/DeliveryBooking";

const DeliveryBookingList = ({
  deliveryListData,
  stateLoading,
  handleNotify,
}) => {


  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "resident", headerName: "Resident Name", width: 160 },
    {
      field: "address",
      headerName: "Resident Address",
      width: 200,
      getActions: (params) => [<div>{params?.row?.address}</div>],
    },
    {
      field: "name",
      headerName: " Delivery Vendor",
      width: 200,
      getActions: (params) => [<div>{params?.row?.vendor?.name}</div>],
    },
    { field: "order_no", headerName: " Order No", width: 160 },
    { field: "arrival_date_from", headerName: "Arrival Date From", width: 160 },
    { field: "arrival_date_to", headerName: "Valid Till Date", width: 160 },
    { field: "arrival_time_to", headerName: "Arrival Time From", width: 160 },
    { field: "arrival_time_form", headerName: "Arrival Time To", width: 160 },

    {
      field: "notify",
      type: "actions",
      headerName: "Notify",
      width: 200,
      getActions: (params) => [
        <div>
          <button
            className="btn btn-success btn-sm "
            // onClick={handleData(params)}

            onClick={() => {
              handleNotify(params?.row?.id);
            }}
          >
            Notify
          </button>
        </div>,
      ],
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
