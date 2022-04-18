import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import Table from "../../../../components/Table";
import Button from "../../../../components/Button";
import departmentListingContainer from "../../../../container/Department/Kunji/DepartmentListingContainer";
import "./department.css";

const DepartmentList = ({ departmentList, handleDepartmentStatus }) => {
  console.log("departmentList",departmentList)
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "code", headerName: "Code", width: 200 },
    { field: "name", headerName: "Department Name", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      valueGetter: ({ value }) => (value === 1 ? "Active" : "Inactive"),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 200,
      getActions: (params) => [
        <div>
          {params.row.status === 1 ? (
            <Button
              className={
                params.row.status === 0 ? "active-Button" : "inactive-button"
              }
              click={() => handleDepartmentStatus(params.id, params.row.status)}
            >
              Inactive
            </Button>
          ) : (
            <Button
              className={
                params.row.status === 0 ? "active-Button" : "inactive-button"
              }
              click={() => handleDepartmentStatus(params.id, params.row.status)}
            >
              Active
            </Button>
          )}
        </div>,
      ],
    },
  ];

  return (
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
    <Table
      rows={departmentList}
      columns={columns}
   
    />
  </div>
    // <div
    //   style={{
    //     height: 420,
    //     width: "100%",
    //     background: "white",
    //     textAlign: "center",
    //   }}
    // >
    //   <DataGrid
    //     rows={departmentList}
    //     columns={columns}
    //     pageSize={10}
    //     rowsPerPageOptions={[5]}
    //   />
    // </div>
  );
};
export default departmentListingContainer(DepartmentList);
