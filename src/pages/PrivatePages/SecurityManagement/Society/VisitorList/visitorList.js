import React from "react";

import Table from "../../../../../components/Table";
import Card from "../../../../../components/Card";
import visitorListContainer from "../../../../../container/Security Management/Society/VisitoList";
import "./visitorList.css";

const VisitorsList = ({ visitorListData, stateLoading }) => {
  console.log(visitorListData, "visitorListData");
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "resident",
      headerName: " Resident Name",
      width: 160,
      valueGetter: (params) => params?.row?.resident?.name,
    },

    {
      field: "address",
      headerName: " Address",
      width: 160,
      valueGetter: (params) => params?.row?.resident?.address,
    },
    {
      field: "first_name",
      type: "actions",
      headerName: "Visitor  Name",
      width: 200,
      getActions: (params) => [
        <div>{params.row.first_name + " " + params.row.last_name}</div>,
      ],
    },
    { field: "mobile", headerName: "Mobile No", width: 160 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "arrival_date", headerName: "Arrival Date", width: 160 },
    { field: "time_in", headerName: "Arrival Time", width: 160 },
    { field: "leaving_date", headerName: "Leaving Date", width: 160 },
    { field: "time_out", headerName: "Leaving Time", width: 160 },
    { field: "code", headerName: "Entry Code", width: 160 },
  ];

  return (
    <Card>
      <h3>Visitor List</h3>

      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={visitorListData}
          columns={columns}
          loading={stateLoading}
        />
      </div>
    </Card>
  );
};
export default visitorListContainer(VisitorsList);
