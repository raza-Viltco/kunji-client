import React from "react";

import Table from "../../../../components/Table";
const AddPlotListing = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "sector", headerName: "Sector/Block", width: 160 },
    { field: "street", headerName: " Street", width: 160 },
    { field: "plot", headerName: " Plot/ House No", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      name: "Arfa Tower",
      floors: "6",
      apartment: "2-A",
      parking: "1",
    },
    {
      id: 2,
      name: "Ahad Tower",
      floors: "8",
      apartment: "2-B",
      parking: "3",
    },

    {
      id: 3,
      name: "Jeff Heights",
      floors: "4",
      apartment: "2-C",
      parking: "5",
    },
    {
      id: 4,
      name: "Kalma Heights",
      floors: "2",
      apartment: "5-A",
      parking: "3",
    },
  ];

  return (
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <Table
        rows={rows}
        columns={columns}
        //   loading={stateLoading}
      />
    </div>
  );
};
export default AddPlotListing;
