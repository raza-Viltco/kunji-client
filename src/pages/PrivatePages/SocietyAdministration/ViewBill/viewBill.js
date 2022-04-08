import React from "react";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Table from "../../../../components/Table";
import Button from "../../../../components/Button";

const ViewBillData = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "role", headerName: "Role", width: 160 },
    { field: "name", headerName: "Name", width: 160 },
    { field: "cnic", headerName: "CNIC", width: 160 },
    { field: "mobile", headerName: "Mobile No", width: 160 },
    { field: "address", headerName: "Address", width: 160 },
    { field: "dueDate", headerName: "Due Date", width: 160 },
    { field: "status", headerName: "Status", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div style={{ display: "flex" }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // isLoading={stateLoading}
            size="small"
          >
            View
          </Button>
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      role: "LandLoard",
      name: "Ahmed",
      cnic: "423423-32432-2",
      mobile: "0324234233",
      address: "Muslim Town",
      dueDate: "12-2-2022",
      status: "Paid",
    },
    {
      id: 2,
      role: "Tenanat",
      name: "Jack",
      cnic: "423423-32432-2",
      mobile: "0343454532",
      address: "Wapda Town",
      dueDate: "25-2-2022",
      status: "UnPaid",
    },
    {
      id: 3,
      role: "LandLoard",
      name: "Smith",
      cnic: "789423-32432-2",
      mobile: "0277634324",
      address: "Model Town",
      dueDate: "1-12-2022",
      status: "Paid",
    },
    {
      id: 4,
      role: "LandLoard",
      name: "Ahmed",
      cnic: "423423-32432-2",
      mobile: "0324234233",
      address: "Muslim Town",
      dueDate: "12-2-2022",
      status: "Paid",
    },
  ];

  return (
    <Card>
      <h3>View Bill</h3>
      <Input placeholder="search" />
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={rows}
          columns={columns}
          //   loading={!societiesList.length}
        />
      </div>
    </Card>
  );
};
export default ViewBillData;
