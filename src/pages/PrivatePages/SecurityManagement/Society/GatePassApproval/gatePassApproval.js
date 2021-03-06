import React from "react";

import Table from "../../../../../components/Table";
import Card from "../../../../../components/Card";
import { dateFormat } from "../../../../../utils/functions";
import gatePassContainer from "../../../../../container/Security Management/Society/GatePassContainer";
import "./gatePassApproval.css";

const GatePassApprovalList = ({
  stateLoading,
  gatePassData,
  handleApprovalRejection,
  handleApprovalAcceptance,
}) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70, headerAlign: "center" },
    {
      headerAlign: "center",
      field: "servant",
      headerName: "Resident Name",
      width: 160,
      valueGetter: (params) =>
        params?.row?.servant?.map_address?.resedent?.name,
    },
    {
      headerAlign: "center",
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
      headerAlign: "center",
      field: "servant.name",
      headerName: " Servant Name",
      width: 160,
      valueGetter: (params) =>
        params?.row?.servant?.first_name +
        " " +
        params?.row?.servant?.last_name,
    },
    {
      field: "entry_code",
      headerName: "Entry Code",
      width: 160,
      headerAlign: "center",
    },
    {
      headerAlign: "center",
      field: "start_date",
      headerName: "Valid From Date",
      width: 160,
      valueGetter: (params) => dateFormat(params?.row?.start_date),
    },
    {
      headerAlign: "center",
      field: "end_date",
      headerName: "Valid Till Date",
      width: 160,
      valueGetter: (params) => dateFormat(params?.row?.end_date),
    },
    {
      headerAlign: "center",
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
      headerAlign: "center",
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 200,
      getActions: (params) => [
        <div>
          {(params?.row?.status === 0 || params?.row?.status === 2) && (
            <button
              className="btn btn-success btn-sm mt-2 rounded-pill"
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
              className="btn btn-danger btn-sm mt-2 rounded-pill"
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
          height: "100vh",
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
