import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "../../../../../components/Table";
import userApprovalContainer from "../../../../../container/KunjiRole/UserApprovalContainer";

const UserApprovalListing = ({
  approval,
  stateLoading,
  userApprovalHandler,
  userRejectionHandler,
}) => {
  const userData = useSelector((state) => state.user.data);
  const societyType = userData?.data?.society?.society_type;

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },

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
      valueGetter: (params) => params.row.user?.dob?.split(" ")[0],
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
    {
      field: "mapping_level_one_name",

      headerName: societyType === 0 ? "Building " : "Sector/Block",
      width: 200,
    },
    {
      field: "mapping_level_two_name",
      headerName: societyType === 0 ? "Floor" : "Street",
      width: 160,
    },
    {
      field: "mapping_level_three_name",
      headerName: societyType === 0 ? "Appartment" : "Plot/House No",
      width: 160,
    },

    {
      field: "status",
      headerName: "Status",
      width: 160,
      valueGetter: (params) =>
        params.row?.approved_status === 1
          ? "Accepted"
          : params.row?.approved_status === 0
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
          {(params.row.approved_status === 0 ||
            params.row.approved_status === 2) && (
            <button
              className="btn btn-success btn-sm "
              onClick={() =>
                userApprovalHandler(params.row.id, params.row.approved_status)
              }
            >
              Accept
            </button>
          )}
          &nbsp;
          {(params.row?.approved_status === 0 ||
            params.row?.approved_status === 1) && (
            <button
              className="btn btn-danger btn-sm "
              onClick={() =>
                userRejectionHandler(params.row.id, params.row.approved_status)
              }
            >
              Reject
            </button>
          )}
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
        <Table rows={approval} columns={columns} loading={stateLoading} />
      </div>
    </>
  );
};
export default userApprovalContainer(UserApprovalListing);
