import React from "react";

import Table from "../../../../components/Table";
import chargesListContainer from "../../../../container/SocietyAdministration/ChargesListContainer";

const ChargesList = ({ chargesListData, stateLoading }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "charges_code", headerName: "Charges Code", width: 360 },
    { field: "charges_title", headerName: "Charges Title", width: 360 },
    { field: "charges", headerName: " Charges", width: 160 },
  ];

  return (
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <Table rows={chargesListData} columns={columns} loading={stateLoading} />
    </div>
  );
};
export default chargesListContainer(ChargesList);
