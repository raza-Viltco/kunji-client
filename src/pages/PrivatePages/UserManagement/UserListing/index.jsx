import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const UserListing = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "User Name", width: 180 },
    {
      field: "role",
      headerName: "Role",
      width: 180,
    },
    {
      field: "email",
      headerName: "Emai;",
      width: 180,
    },
    {
      field: "cnic",
      headerName: "CNIC",
      width: 180,
    },
    {
      field: "mobile",
      headerName: "Mobile No",
      width: 180,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
    },

    // {
    //   field: "edit",
    //   headerName: "Actions",
    //   width: 120,
    //   renderCell: (params) => (
    //     <div>
    //       <AiFillEdit size={20} /> &nbsp; <AiFillDelete size={20} /> &nbsp;
    //       <MdClose size={20} />
    //     </div>
    //   ),
    // },
  ];

  const rows = [
    {
      id: 1,
      fullName: "Arham",
      role: "Admin",
      email: "user@12gmail.com",
      cnic: "374724234-324632432-1",
      mobile: "0308454735453",
      status: "Active",
    },
    {
      id: 2,
      fullName: "ahkam",
      role: "Tenant",
      email: "user@12gmail.com",
      cnic: "374724234-324632432-1",
      mobile: "0308454735453",
      status: " In Active",
    },

    {
      id: 3,
      fullName: "Joe",
      role: "Admin",
      email: "user@12gmail.com",
      cnic: "374724234-324632432-1",
      mobile: "0308454735453",
      status: "Active",
    },
    {
      id: 4,
      fullName: "Jack",
      role: "Admin",
      email: "user@12gmail.com",
      cnic: "374724234-324632432-1",
      mobile: "0308454735453",
      status: "Active",
    },
    {
      id: 5,
      fullName: "Smith",
      role: "Admin",
      email: "user@12gmail.com",
      cnic: "374724234-324632432-1",
      mobile: "0308454735453",
      status: "Active",
    },
  ];
  return (
    <>
      <div style={{ height: 520, width: "100%", background: "white" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
    </>
  );
};
export default UserListing;
