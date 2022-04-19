import React from "react";

import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import Table from "../../../../components/Table";
import { Link } from "react-router-dom";
// import "./propertyListing.css";

const PropertyListHor = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "location", headerName: "Location", width: 300 },
    { field: "size", headerName: " Size", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className="view-button-outer" style={{ display: "flex" }}>
          <Link to="/view_property_hor">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // isLoading={stateLoading}
              size="small"
            >
              View
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      location: "252-A Defence Housing Authority",
      size: "5 marla",
    },
    {
      id: 2,
      location: "2-A Paragon Housing Authority",
      size: "5 marla",
    },
    {
      id: 3,
      location: "34-B Bahria Housing Authority",
      size: "5 marla",
    },
    {
      id: 4,
      location: "252-A Defence Housing Authority",
      size: "5 marla",
    },
  ];

  return (
    <Card>
      <div className="property-outer-flex">
        <div>
          <h3>Property Ownership B</h3>
        </div>

        <div className="society_btn__wrapper">
          <Link to="/assign_owner_hor">
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: 20 }}
              // isLoading={stateLoading}
              size="small"
            >
              Assign OwnerShip
            </Button>
          </Link>
        </div>
      </div>

      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={rows}
          columns={columns}
          //   loading={!societiesList.length}
        />
      </div>
    </Card>
  );
};

export default PropertyListHor;
