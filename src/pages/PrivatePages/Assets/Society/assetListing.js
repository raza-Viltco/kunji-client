import React from "react";

import Table from "../../../../components/Table";

const AssetListing = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "code", headerName: "Code", width: 160 },
    { field: "name", headerName: "Name", width: 70 },
    { field: "status", headerName: "Status", width: 70 },
    { field: "location", headerName: "Location", width: 160 },
    { field: "action", headerName: "Action", width: 200 },
  ];

  const rows = [
    {
      id: 1,
      code: "0001",
      name: "Ahmed ",
      status: "Active",
      location: "Model Town",
    },
    {
      id: 1,
      code: "0002",
      name: "Mark ",
      status: "Inactive",
      location: "Johar Town",
    },
    {
      id: 1,
      code: "0003",
      name: "Smith ",
      status: "Active",
      location: "DHA",
    },
    {
      id: 1,
      code: "0004",
      name: "Akram ",
      status: "Active",
      location: "Bahria Town",
    },
  ];
  return (
    <>
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={rows}
          columns={columns}
          //   loading={!societiesList.length}
        />
      </div>
    </>
  );
};
export default AssetListing;
