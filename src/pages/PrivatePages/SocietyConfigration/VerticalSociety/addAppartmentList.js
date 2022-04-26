import React from "react";

import Table from "../../../../components/Table";
import appartmentListContainer from "../../../../container/SocietyConfigration/AppartmentListContainer";

const AddAppartmentList = ({appartmentListing}) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "sector", headerName: "Sector/Block", width: 160 },
    { field: "street", headerName: " Street", width: 160 },
    { field: "plot", headerName: " Plot/ House No", width: 160 },
  ];

 

  return (
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <Table
        rows={appartmentListing}
        columns={columns}
        //   loading={stateLoading}
      />
    </div>
  );
};
export default appartmentListContainer(AddAppartmentList);
