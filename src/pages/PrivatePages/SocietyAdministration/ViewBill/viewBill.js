import React from "react";

import Card from "../../../../components/Card";
import Table from "../../../../components/Table";
import { dateFormat } from "../../../../utils/functions";
import viewBillContainer from "../../../../container/SocietyAdministration/ViewBillContainer";

const ViewBillData = ({ viewBillList, stateLoading }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70, headerAlign: "center" },
    {
      headerAlign: "center",
      field: "role",
      headerName: "Role",
      width: 160,
      valueGetter: (params) =>
        params?.row?.view_user_name_on_bill?.mobile_app_role === 1
          ? "Landloard"
          : params?.row?.view_user_name_on_bill?.mobile_app_role === 2
          ? "Tenant"
          : "pending",
    },
    {
      headerAlign: "center",
      field: "name",
      headerName: "Name",
      width: 160,
      valueGetter: (params) => params?.row?.view_user_name_on_bill?.name,
    },
    {
      headerAlign: "center",
      field: "cnic",
      headerName: "CNIC",
      width: 160,
      valueGetter: (params) => params?.row?.view_user_name_on_bill?.cnic,
    },
    {
      headerAlign: "center",
      field: "mobile",
      headerName: "Mobile No",
      width: 160,
      valueGetter: (params) => params?.row?.view_user_name_on_bill?.mobile,
    },
    {
      headerAlign: "center",
      field: "address",
      headerName: "Address",
      width: 160,
      valueGetter: (params) => params?.row?.view_user_name_on_bill?.address,
    },
    {
      headerAlign: "center",
      field: "dueDate",
      headerName: "Due Date",
      width: 160,
      valueGetter: (params) => dateFormat(params?.row?.due_date),
    },
  ];

  return (
    <Card>
      <h3>View Bill</h3>
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table rows={viewBillList} columns={columns} loading={stateLoading} />
      </div>
    </Card>
  );
};
export default viewBillContainer(ViewBillData);
