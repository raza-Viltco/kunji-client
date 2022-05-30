import React from "react";

import Card from "../../../../components/Card";
import Table from "../../../../components/Table";
import viewBillContainer from "../../../../container/SocietyAdministration/ViewBillContainer";

const ViewBillData = ({ viewBillList, stateLoading }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
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
      field: "name",
      headerName: "Name",
      width: 160,
      valueGetter: (params) => params?.row?.view_user_name_on_bill?.name,
    },
    {
      field: "cnic",
      headerName: "CNIC",
      width: 160,
      valueGetter: (params) => params?.row?.view_user_name_on_bill?.cnic,
    },
    {
      field: "mobile",
      headerName: "Mobile No",
      width: 160,
      valueGetter: (params) => params?.row?.view_user_name_on_bill?.mobile,
    },
    {
      field: "address",
      headerName: "Address",
      width: 160,
      valueGetter: (params) => params?.row?.view_user_name_on_bill?.address,
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      width: 160,
      valueGetter: (params) => params?.row?.due_date,
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
