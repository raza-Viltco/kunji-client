import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const SocietyListing = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "Full Name", width: 180 },
    {
      field: "country",
      headerName: "Country",
      width: 180,
    },
    {
      field: "city",
      headerName: "City",
      width: 180,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      width: 180,
    },
    {
      field: "societyAdmin",
      headerName: "Admin",
      width: 180,
    },
  ];

  const rows = [
    {
      id: 1,
      fullName: "Aristotle",
      country: "Canada",
      city: "Lahore",
      zipCode: "348931",
      societyAdmin: "Buzz",
    },
    {
      id: 2,
      fullName: "Tom",
      country: "Japan",
      city: "BEIJING",
      zipCode: "348932",
      societyAdmin: "Brian",
    },
    {
      id: 3,
      fullName: "Thomas",
      country: "America",
      city: "BEIRUT",
      zipCode: "348933",
      societyAdmin: " Jessica",
    },
    {
      id: 4,
      fullName: "Laura",
      country: "Indonesia",
      city: "Belem",
      zipCode: "348934",
      societyAdmin: "Mitch",
    },
    {
      id: 5,
      fullName: "Maya",
      country: "Saudia",
      city: "	BELGRADE",
      zipCode: "348935",
      societyAdmin: "Alcuin",
    },
    {
      id: 6,
      fullName: " Aiven",
      country: "Pakistan",
      city: "Jakarta",
      zipCode: "348936",
      societyAdmin: " Beth",
    },
    {
      id: 7,
      fullName: "Sparky",
      country: "Japan",
      city: "Seoul",
      zipCode: "348937",
      societyAdmin: "Maya",
    },
    {
      id: 8,
      fullName: "Beth",
      country: "India",
      city: "Delhi",
      zipCode: "348938",
      societyAdmin: "John",
    },
    {
      id: 9,
      fullName: "Steve",
      country: "Canada",
      city: "Manila",
      zipCode: "348939",
      societyAdmin: " Yehuda",
    },
    {
      id: 10,
      fullName: "Smike",
      country: "Delhi",
      city: "Manila",
      zipCode: "348940",
      societyAdmin: " Yehuda",
    },
    {
      id: 11,
      fullName: "Henry",
      country: "Albania",
      city: "Basrah",
      zipCode: "348941",
      societyAdmin: "John Quincy",
    },
    {
      id: 12,
      fullName: "Beth",
      country: "Delhi",
      city: "Manila",
      zipCode: "348942",
      societyAdmin: " Theodor",
    },
    {
      id: 13,
      fullName: " Scott",
      country: "Algeria",
      city: "Belem",
      zipCode: "348943",
      societyAdmin: " Yehuda",
    },
    {
      id: 14,
      fullName: "Sparky",
      country: "Andorra",
      city: "Alexandria Bay",
      zipCode: "348944",
      societyAdmin: " Joseph",
    },
    {
      id: 15,
      fullName: "Smike",
      country: "Delhi",
      city: "Manila",
      zipCode: "348945",
      societyAdmin: " Yehuda",
    },
  ];
  return (
    <div style={{ height: 520, width: "100%", background: "white" }}>
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
