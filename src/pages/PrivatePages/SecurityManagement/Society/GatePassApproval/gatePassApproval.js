import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import Card from "../../../../../components/Card";
import Button from "../../../../../components/Button";
import "./gatePassApproval.css";

const GatePassApprovalList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Resident Name", width: 160 },
    { field: "address", headerName: " Resident Address", width: 160 },
    { field: "visitor", headerName: " Servant Name", width: 160 },
    { field: "mobile", headerName: "Mobile No", width: 160 },
    { field: "validFrom", headerName: "Valid From Date", width: 160 },
    { field: "validTill", headerName: "Valid Till Date", width: 160 },
    {
      field: "approval",
      headerName: "Approval",
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
            Approve
          </Button>
          &nbsp;
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // isLoading={stateLoading}
            size="small"
          >
            Reject
          </Button>
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Smith",
      address: "Model Town",
      visitor: "Joe",
      mobile: "7283423423432",
      validFrom: "12-03-2022",
      validTill: "30-03-2022",
      approval: "Approve Reject",
    },
    {
      id: 2,
      name: "Jack",
      address: "Model Town",
      visitor: "Jack",
      mobile: "7283423423432",
      validFrom: "12-03-2022",
      validTill: "30-03-2022",
      approval: "Approve Reject",
    },
    {
      id: 3,
      name: "Ahkam",
      address: "Town",
      visitor: "smith",
      mobile: "7283423423432",
      validFrom: "12-03-2022",
      validTill: "30-03-2022",
      approval: "Approve Reject",
    },
    {
      id: 4,
      name: "Ahmed",
      address: "DHA",
      visitor: "Joe",
      mobile: "7283423423432",
      validFrom: "12-03-2022",
      validTill: "30-03-2022",
      approval: "Approve Reject",
    },
    {
      id: 5,
      name: "Aslam",
      address: "Lahore",
      visitor: "Ken",
      mobile: "7283423423432",
      validFrom: "12-03-2022",
      validTill: "30-03-2022",
      approval: "Approve Reject",
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
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
    </Card>
  );
};
export default GatePassApprovalList;
