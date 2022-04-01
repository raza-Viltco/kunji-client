import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Button from "../../../../components/Button";

const BillListing = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "chargesCode", headerName: "Charges Code", width: 160 },
    { field: "chargesTitle", headerName: "Charges Title", width: 160 },
    { field: "charges", headerName: " Charges", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      chargesCode: "001",
      chargesTitle: "Property Tax",
      charges: "5000",
    },
    {
      id: 2,
      chargesCode: "002",
      chargesTitle: "Water Charges",
      charges: "2000",
    },
    {
      id: 3,
      chargesCode: "003",
      chargesTitle: "Electricity Charges",
      charges: "5000",
    },
    {
      id: 4,
      chargesCode: "004",
      chargesTitle: "Repair and Maintainance Charges",
      charges: "5000",
    },
  ];
  return (
    <>
      <div
        style={{
          height: 420,
          width: "100%",
          background: "white",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
      <div className="society_btn__wrapper">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          // isLoading={stateLoading}
          size="small"
        >
          Generate Bill
        </Button>
      </div>
    </>
  );
};
export default BillListing;
