import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const SocietyListing = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "Full Name", width: 180 },
    {
      field: "country",
      headerName: "Country",
      width: 180
    },
    {
      field: "city",
      headerName: "City",
      width: 180
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      width: 180
    },
    {
      field: "societyAdmin",
      headerName: "Admin",
      width: 180
    },
  ];

  const rows = [
    { id: 1, fullName: "Snow", country: "Jon", city: "Lahore", zipCode: "348938", societyAdmin: "Faisal" },
    { id: 2, fullName: "Snow", country: "Jon", city: 35, zipCode: "348938", societyAdmin: "Faisal" },
    { id: 3, fullName: "Snow", country: "Jon", city: 35, zipCode: "348938", societyAdmin: "Faisal" },
    { id: 4, fullName: "Snow", country: "Jon", city: 35, zipCode: "348938", societyAdmin: "Faisal" },
    { id: 5, fullName: "Snow", country: "Jon", city: 35, zipCode: "348938", societyAdmin: "Faisal" },
    { id: 6, fullName: "Snow", country: "Jon", city: 35, zipCode: "348938", societyAdmin: "Faisal" },
  ];
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
};

export default SocietyListing;
