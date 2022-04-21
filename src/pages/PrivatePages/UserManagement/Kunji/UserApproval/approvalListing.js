import { React, useEffect } from "react";

import Table from "../../../../../components/Table";
import Button from "../../../../../components/Button";
import userApprovalContainer from "../../../../../container/KunjiRole/UserApprovalContainer";
import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";

const UserApprovalListing = ({
  approval,
  userApprovalHandler,
  userRejectionHandler,
}) => {
  console.log(approval, "approval Data");

  const userData = (params) => {
    console.log(params);
  };

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
      valueGetter: (params) => params.row.user?.first_name,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      valueGetter: (params) => params.row.user?.last_name,
      width: 160,
    },
    {
      field: "dob",
      headerName: " Date of Birth",
      valueGetter: (params) => params.row.user?.dob,
      // const date = new Date(resp.shipment.receivingDate);
      // resp.shipment.receivingDate = date;
      width: 160,
    },
    {
      field: "cnic",
      headerName: " CNIC",
      valueGetter: (params) => params.row.user?.cnic,
      width: 160,
    },
    {
      field: "mobile",
      headerName: "Mobile No",
      width: 160,
      valueGetter: (params) => params.row.user?.mobile,
    },
    { field: "mapping_level_one_name", headerName: "Building ", width: 200 },
    { field: "mapping_level_two_name", headerName: "Floor", width: 160 },
    { field: "mapping_level_three_name", headerName: "Appartment", width: 160 },

    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 200,
      getActions: (params) => [
        <div>
          {params.row.approved_status === 0 && (
            <button
              onClick={() =>
                userApprovalHandler(params.row.id, params.row.approved_status)
              }

              // onClick={()=> userData(params)}
            >
              Accept
            </button>
          )}
          &nbsp;
          {/* {params.row?.approved_status === 0 && ( */}
          <button
            onClick={() =>
              userRejectionHandler(params.row.id, params.row.approved_status)
            }
          >
            Reject
          </button>
           {/* )} */}
        </div>,
      ],
    },

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
    //         sx={{ mt: 3, mb: 2, borderRadius: 20 }}
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
    //         sx={{ mt: 3, mb: 2, borderRadius: 20  }}
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
