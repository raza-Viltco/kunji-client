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

  // function getFullData(params) {
  //   return `${ params?.row?.lat + " " + params?.row?.long !== 0 || undefined
  //   ? handleMap( params?.row?.lat + " " + params?.row?.long)
  //   : params?.row?.selected_location?.mapping_level_one_name +
  //       " " +
  //       params?.row?.selected_location?.mapping_level_two_name +
  //       " " +
  //       params?.row?.selected_location?.mapping_level_three_name !==
  //       null || ""
  //   ? params?.row?.selected_location?.mapping_level_one_name +
  //     " " +
  //     params?.row?.selected_location?.mapping_level_two_name +
  //     " " +
  //     params?.row?.selected_location?.mapping_level_three_name
  //   : params?.row?.other_field}`;
  // }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Resident Name",
      width: 160,
      valueGetter: (params) => params?.row?.user_list_record?.name,
    },
    {
      field: "location",
      headerName: "Location",
      width: 220,
      valueGetter: (params) =>
        params?.row?.lat + " " + params?.row?.long !== 0 || undefined
          ? params?.row?.lat + " " + params?.row?.long
          : params?.row?.selected_location?.mapping_level_one_name +
              " " +
              params?.row?.selected_location?.mapping_level_two_name +
              " " +
              params?.row?.selected_location?.mapping_level_three_name !==
              null || ""
          ? params?.row?.selected_location?.mapping_level_one_name +
            " " +
            params?.row?.selected_location?.mapping_level_two_name +
            " " +
            params?.row?.selected_location?.mapping_level_three_name
          : params?.row?.other_field,
    },
    { field: "alarm_type", headerName: " Alert Type", width: 160 },
    {
      field: "contactNo",
      headerName: " Contact No",
      width: 160,
      valueGetter: (params) => params?.row?.user_list_record?.mobile,
    },
    {
      field: "emergencyNo",
      headerName: " Emergency  No",
      width: 160,
      valueGetter: (params) => params?.row?.user_list_record?.emergency_contact,
    },

    {
      field: "status",
      headerName: "Status",
      width: 160,
      valueGetter: (params) =>
        params?.row?.status === 1 ? "Active" : "Inactive",
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Smith",
      address: "DHA",
      alertType: "Fire",
      contactNo: "032424323324",
      emergencyNo: "234344444545",
      location: "Lahore",
    },
    {
      id: 2,
      name: "Akram",
      address: "Model Town",
      alertType: "Medical",
      contactNo: "033333344455",
      emergencyNo: "000004545",
      location: "Lahore",
    },
    {
      id: 3,
      name: "Jeff",
      address: "Garisson",
      alertType: "Emergency",
      contactNo: "0456324324324",
      emergencyNo: "23434445",
      location: "Lahore",
    },
    {
      id: 4,
      name: "Jack",
      address: "Urban Vilas",
      alertType: "Medical",
      contactNo: "0211232332432",
      emergencyNo: "233334344545",
      location: "Lahore",
    },
    {
      id: 5,
      name: "Mark",
      address: "DHA",
      alertType: "Fire",
      contactNo: "032424323324",
      emergencyNo: "2222234344444",
      location: "Lahore",
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
