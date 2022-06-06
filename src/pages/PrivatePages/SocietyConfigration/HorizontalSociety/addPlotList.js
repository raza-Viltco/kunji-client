import React from "react";
import plotListContainer from "../../../../container/SocietyConfigration/PlotListContainer";
import Table from "../../../../components/Table";

const AddPlotListing = ({ appartmentListing, stateLoading }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 170, headerAlign:"center" },
    { field: "sector_block_building", headerName: "Sector/Block", width: 280, headerAlign:"center" },
    { field: "street_floor", headerName: " Street", width: 280, headerAlign:"center" },
    { field: "plot_home_apartment", headerName: " Plot/ House No", width: 280, headerAlign:"center" },
  ];

  return (
    <>
    <h3 className="text-center">Plots Listing</h3>
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <Table
        rows={appartmentListing}
        columns={columns}
        loading={stateLoading}
      />
    </div></>
  );
};
export default plotListContainer(AddPlotListing);
