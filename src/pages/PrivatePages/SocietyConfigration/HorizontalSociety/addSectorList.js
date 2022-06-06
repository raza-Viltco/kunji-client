import React from "react";

import Table from "../../../../components/Table";
import sectorListingContainer from "../../../../container/SocietyConfigration/SectorListContainer";

const AddSectorList = ({ buildingArr, stateLoading }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 170 , headerAlign:"center"},
    { field: "building_code", headerName: "Sector Code", width: 280, headerAlign:"center" },
    { field: "sector_block_building", headerName: "Sector Name", width: 280, headerAlign:"center" },
    { field: "floor_streets", headerName: "No of Streets", width: 280, headerAlign:"center" },
  ];

  return (
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <Table rows={buildingArr} columns={columns} loading={stateLoading} />
    </div>
  );
};
export default sectorListingContainer(AddSectorList);
