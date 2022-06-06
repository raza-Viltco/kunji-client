import React from "react";

import Table from "../../../../../components/Table";
import Card from "../../../../../components/Card";
import panicAlertContainer from "../../../../../container/Security Management/Society/PanicAlertContainer";
import "./panicAlert.css";

const PanicAlertList = ({ stateLoading, alertValue }) => {
  const handleMap = (params) => {
    window.open(
      "https://maps.google.com?q=" + params?.row?.lat + "," + params?.row?.long
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70, headerAlign:"center" },
    {
      headerAlign:"center",
      field: "name",
      headerName: "Resident Name",
      width: 160,
      valueGetter: (params) => params?.row?.user_list_record?.name,
    },
    {
      headerAlign:"center",
      field: "location",
      headerName: "Location",
      type: "actions",
      width: 220,
      getActions: (params) => [
        <div>
          {Number(params?.row?.lat) !== 0 || undefined ? (
            <button
              onClick={() => handleMap(params)}
              className="btn btn-success"
            >
              View
            </button>
          ) : params?.row?.selected_location !== null ? (
            params?.row?.selected_location?.mapping_level_one_name +
            " " +
            params?.row?.selected_location.mapping_level_two_name +
            " " +
            params?.row?.selected_location.mapping_level_three_name
          ) : (
            params?.row?.other_field
          )}
        </div>,
      ],
    },
    { field: "alarm_type", headerName: " Alert Type", width: 160, headerAlign:"center" },
    {
      headerAlign:"center",
      field: "contactNo",
      headerName: " Contact No",
      width: 160,
      valueGetter: (params) => params?.row?.user_list_record?.mobile,
    },
    {
      headerAlign:"center",
      field: "emergencyNo",
      headerName: " Emergency  No",
      width: 160,
      valueGetter: (params) => params?.row?.user_list_record?.emergency_contact,
    },

    {
      headerAlign:"center",
      field: "status",
      headerName: "Status",
      width: 160,
      valueGetter: (params) =>
        params?.row?.status === 1 ? "Activated" : "Deactived",
    },
  ];

  return (
    <Card>
      <h3>Panic Alerts</h3>

      <div
        style={{
          height: "100vh",
          width: "100%",
          background: "white",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <Table rows={alertValue} columns={columns} loading={stateLoading} />
      </div>
    </Card>
  );
};
export default panicAlertContainer(PanicAlertList);
