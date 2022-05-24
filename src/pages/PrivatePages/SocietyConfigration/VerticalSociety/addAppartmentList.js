import React from "react";

import Table from "../../../../components/Table";
import Card from "../../../../components/Card";
import appartmentListContainer from "../../../../container/SocietyConfigration/AppartmentListContainer";

const AddAppartmentList = ({ appartmentListing,stateLoading }) => {
  console.log(appartmentListing, "appartmentListing");
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "sector_block_building", headerName: "Building Name", width: 160 },
    { field: "street_floor", headerName: "Floor No", width: 160 },
    { field: "plot_home_apartment", headerName: " Apartment No", width: 160 },
    { field: "parkings", headerName: " Allocated Parking", width: 160 },
  ];

  return (
    <>
      <h3 className="text-center">Apartment Listing</h3>
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <Table
        rows={appartmentListing}
        columns={columns}
          loading={stateLoading}
      />
    </div>
    </>
  );
};
export default appartmentListContainer(AddAppartmentList);
