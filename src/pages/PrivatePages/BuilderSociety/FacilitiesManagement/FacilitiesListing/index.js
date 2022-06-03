import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { MdClose } from "react-icons/md";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import facilitiesListingContainer from "../../../../../container/SocietyFacilities/FacilitiesListingContainer";

const FacilitiesListing = ({ facilityList }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Facility Name", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      valueGetter: ({ value }) => (value === 1 ? "Actived" : "Deactived"),
    },
    {
      field: "edit",
      headerName: "Actions",
      width: 120,
      renderCell: (params) => (
        <div>
          <AiFillEdit size={20} /> &nbsp; <AiFillDelete size={20} /> &nbsp;{" "}
          <MdClose size={20} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div style={{ height: 520, width: "100%", background: "white" }}>
        <DataGrid
          rows={facilityList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
    </>
  );
};

export default facilitiesListingContainer(FacilitiesListing);
