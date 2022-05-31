import React from "react";

import Card from "../../../../../components/Card";
import Table from "../../../../../components/Table";
import vehicleListContainer from "../../../../../container/Security Management/Society/VehicleListContainer";
import { Profile_Img } from "../../../../../constants/AssetsConstants";
import "./vehicleList.css";

const VehicleList = ({ stateLoading, vehicleListData }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },

    {
      field: "name",
      headerName: "Resident Name",
      width: 160,
      valueGetter: (params) =>
        params?.row?.user?.first_name + " " + params?.row?.user?.last_name,
    },
    {
      field: "email",
      headerName: "Email",
      width: 160,
      valueGetter: (params) => params?.row?.user?.email,
    },
    {
      field: "mobile",
      headerName: "Mobile No",
      width: 160,
      valueGetter: (params) => params?.row?.user?.mobile,
    },
    {
      field: "cnic",
      headerName: "CNIC",
      width: 160,
      valueGetter: (params) => params?.row?.user?.cnic,
    },
    { field: "model", headerName: "Vehicle  Model", width: 160 },
    { field: "color", headerName: " Color", width: 160 },
    { field: "year", headerName: "  Year", width: 160 },
    { field: "make", headerName: "  Company", width: 160 },
    {
      field: "image",
      type: "actions",
      headerName: "Images",
      width: 200,
      getActions: (params) => [
        <div className="vehicle-list-style">
          <img
            src={params?.row?.image ? params?.row?.image : Profile_Img}
            height="50px"
            width="50px"
            style={{ borderRadius: "100px" }}
          />
        </div>,
      ],
    },
  ];

  return (
    <Card>
      <h3>Registered Vehicles Listing</h3>
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={vehicleListData}
          columns={columns}
          loading={stateLoading}
        />
      </div>
    </Card>
  );
};
export default vehicleListContainer(VehicleList);
