import React from "react";

import Table from "../../../../components/Table";
import chargesListContainer from "../../../../container/SocietyAdministration/ChargesListContainer";

const ChargesList = ({ chargesListData, stateLoading }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70, headerAlign:"center" },
    { field: "charges_code", headerName: "Charges Code", width: 360, headerAlign:"center" },
    { field: "charges_title", headerName: "Charges Title", width: 360, headerAlign:"center" },
    { field: "charges", headerName: " Charges", width: 160, headerAlign:"center" },
  ];

  return (
    <>
    <h3>Society Charges List</h3>
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <Table rows={chargesListData} columns={columns} 
      // loading={stateLoading} 
      />
    </div>
    </>
  );
};
export default chargesListContainer(ChargesList);
