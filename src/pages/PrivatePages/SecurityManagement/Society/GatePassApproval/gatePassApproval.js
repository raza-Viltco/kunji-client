import React from "react";

import Table from "../../../../../components/Table";
import Card from "../../../../../components/Card";
import gatePassContainer from "../../../../../container/Security Management/Society/GatePassContainer";
import "./gatePassApproval.css";

const GatePassApprovalList = ({
  stateLoading,
  gatePassData,
  handleApprovalRejection,
  handleApprovalAcceptance,
}) => {
  console.log(gatePassData);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "servant",
      headerName: "Resident Name",
      width: 160,
      valueGetter: (params) =>
        params?.row?.servant?.map_address?.resedent?.name,
    },
    {
      field: "servant.map_address",
      headerName: "Resident Address",
      width: 160,
      valueGetter: (params) =>
        params?.row?.servant?.map_address?.mapping_level_one_name +
        " " +
        params?.row?.servant?.map_address?.mapping_level_two_name +
        " " +
        params?.row?.servant?.map_address?.mapping_level_three_name,
    },
    {
      field: "servant.name",
      headerName: " Servant Name",
      width: 160,
      valueGetter: (params) =>
        params?.row?.servant?.first_name +
        " " +
        params?.row?.servant?.last_name,
    },
    { field: "entry_code", headerName: "Entry Code", width: 160 },
    {
      field: "start_date",
      headerName: "Valid From Date",
      width: 160,
      valueGetter: (params) => params?.row?.start_date?.split(" ")[0],
    },
    {
      field: "end_date",
      headerName: "Valid Till Date",
      width: 160,
      valueGetter: (params) => params?.row?.end_date?.split(" ")[0],
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      valueGetter: (params) =>
        params?.row?.status === 1
          ? "Approved"
          : params?.row?.status === 0
          ? "Pending"
          : "Rejected",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 200,
      getActions: (params) => [
        <div>
          {(params?.row?.status === 0 || params?.row?.status === 2) && (
            <button
              className="btn btn-success btn-sm"
              onClick={() => {
                handleApprovalAcceptance(params.row.id, params.row.status);
              }}
            >
              Approve
            </button>
          )}
          &nbsp;
          {(params?.row?.status === 0 || params?.row?.status === 1) && (
            <button
              className="btn btn-danger btn-sm "
              onClick={() => {
                handleApprovalRejection(params.row.id, params.row.status);
              }}
            >
              Reject
            </button>
          )}
        </div>,
      ],
    },
  ];

  return (
    <Card>
      <h3>Gate Pass Approvals</h3>
      <div
        style={{
          height: 420,
          width: "100%",
          background: "white",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <Table rows={gatePassData} columns={columns} loading={stateLoading} />
      </div>
    </Card>
  );
};
export default gatePassContainer(GatePassApprovalList);
