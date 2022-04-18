import { React, useEffect } from "react";

import Table from "../../../../../components/Table";
import Button from "../../../../../components/Button";
import userApprovalContainer from "../../../../../container/KunjiRole/UserApprovalContainer";
import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";

const UserApprovalListing = ({ approval }) => {
  // console.log(approval, "approval Data");

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    // { field: "role", headerName: "Role", width: 160 },
    {
      field: "first_name",
      headerName: "First Name",
      width: 160,
      valueGetter: (params) => params.row.user.first_name,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      valueGetter: (params) => params.row.user.last_name,
      width: 160,
    },
    {
      field: "dob",
      headerName: " Date of Birth",
      valueGetter: (params) => params.row.user.dob,
      width: 160,
    },
    {
      field: "cnic",
      headerName: " CNIC",
      valueGetter: (params) => params.row.user.cnic,
      width: 160,
    },
    {
      field: "mobile",
      headerName: "Mobile No",
      width: 160,
      valueGetter: (params) => params.row.user.mobile,
    },
    { field: "mapping_level_one_name", headerName: "Building ", width: 200 },
    { field: "mapping_level_two_name", headerName: "Floor", width: 160 },
    { field: "mapping_level_three_name", headerName: "Appartment", width: 160 },

    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 200,
    //   renderCell: (params) => (
    //     <div style={{ display: "flex" }}>
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         sx={{ mt: 3, mb: 2 }}
    //         // isLoading={stateLoading}
    //         size="small"
    //       >
    //         Active
    //       </Button>
    //       &nbsp;
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         sx={{ mt: 3, mb: 2 }}
    //         // isLoading={stateLoading}
    //         size="small"
    //       >
    //         In Active
    //       </Button>
    //     </div>
    //   ),
    // },
  ];

  return (
    <>
      <h3>User Approvals</h3>

      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table rows={approval} columns={columns} loading={!approval.length} />
      </div>
    </>
  );
};
export default userApprovalContainer(UserApprovalListing);
