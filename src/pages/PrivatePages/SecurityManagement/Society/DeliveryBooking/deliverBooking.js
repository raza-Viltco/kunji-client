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
    { field: "id", headerName: "ID", width: 70,headerAlign:"center" },
    { headerAlign:"center",field: "resident", headerName: "Resident Name", width: 160,
    valueGetter: (params) => params?.row?.user?.name },
    {
      headerAlign:"center",
      field: "address",
      headerName: "Resident Address",
      width: 200,
      valueGetter: (params) =>
        params?.row?.address?.mapping_level_one_name +
        " " +
        params?.row?.address?.mapping_level_two_name +
        " " +
        params?.row?.address?.mapping_level_three_name,
      // getActions: (params) => [<div>{params?.row?.address}</div>],
    },
    {
      headerAlign:"center",
      field: "vendor",
      headerName: " Delivery Vendor",
      width: 200,
      valueGetter: (params) => params?.row?.vendor_id
      // getActions: (params) => [<div>{params?.row?.vendor}</div>],
    },
    { field: "order_no", headerName: " Order No", width: 160 ,headerAlign:"center"},
    { field: "arrival_date_from", headerName: "Arrival Date From", width: 160,headerAlign:"center" },
    { field: "arrival_date_to", headerName: "Valid Till Date", width: 160,headerAlign:"center" },
    { field: "arrival_time_to", headerName: "Arrival Time From", width: 160,headerAlign:"center" },
    { field: "arrival_time_form", headerName: "Arrival Time To", width: 160,headerAlign:"center" },

    {
      field: "notify",
      type: "actions",
      headerName: "Notify",
      width: 200,
      getActions: (params) => [
        <div>
          <button
            className="btn btn-success btn-sm mt-2 rounded-pill "
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
