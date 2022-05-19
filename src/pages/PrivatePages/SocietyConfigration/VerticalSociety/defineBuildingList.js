import React from "react";

import Table from "../../../../components/Table";
import buildingListContainer from "../../../../container/SocietyConfigration/BuildingListContainer";

const BuildingList = ({ buildingArrData, stateLoading }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "building_code", headerName: "Building Code", width: 160 },
    {
      field: "sector_block_building",
      headerName: " Building Name",
      width: 160,
    },
    { field: "floor_streets", headerName: " Number of Floors", width: 160 },
  ];

  return (
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <Table rows={buildingArrData} columns={columns} loading={stateLoading} />
    </div>
  );
};

export default buildingListContainer(BuildingList);
