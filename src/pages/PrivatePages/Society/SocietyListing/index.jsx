import React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector
} from "@mui/x-data-grid";

import societyListingContainer from "../../../../container/Society/SocietyListingContainer";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

const SocietyListing = ({ societiesList }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Society Name", width: 180 },
    {
      field: "country_id",
      headerName: "Country",
      width: 180,
    },
    {
      field: "city_id",
      headerName: "City",
      width: 180,
    },
    {
      field: "zip_code",
      headerName: "Zipcode",
      width: 180,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      valueGetter: ({ value }) => (value === 1 ? "Active" : "Inactive"),
    },
  ];

  return (
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <DataGrid
        rows={societiesList}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // checkboxSelection
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default societyListingContainer(SocietyListing);
