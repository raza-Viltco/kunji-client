import React from "react";

import Table from "../../../../components/Table";
import departmentListingContainer from "../../../../container/Department/Kunji/DepartmentListingContainer";
import "./department.css";

const DepartmentList = ({
  alldepartmentList,
  handleDepartmentStatus,
  stateLoading,
}) => {
  const columns = [
    { field: "id", headerName: "ID", width: 180 ,headerAlign:"center"},
    { field: "code", headerName: "Code", width: 300,headerAlign:"center" },
    { field: "name", headerName: "Department Name", width: 300 ,headerAlign:"center"},
    {
      field: "status",
      headerName: "Status",
      width: 200,
      headerAlign:"center",
      valueGetter: ({ value }) => (value === 1 ? "Active" : "Inactive"),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 200,
      getActions: (params) => [
        <div className="col-sm-12 m-0 p-0 text-center">
          {params.row.status === 1 ? (
            <button
              className="btn btn-danger btn-sm rounded-pill"
              onClick={() =>
                handleDepartmentStatus(params.id, params.row.status)
              }
            >
              Activate
            </button>
          ) : (
            <button
              className="btn btn-success btn-sm rounded-pill"
              onClick={() =>
                handleDepartmentStatus(params.id, params.row.status)
              }
            >
              Deactivate
            </button>
          )}
        </div>,
      ],
    },
  ];

  return (
    <div style={{ height: "50vh", width: "100%", background: "white", textAlign:"center",align:"right" }}>
      <Table
       sx={{ Width: 650, textAlign:"center" }}
        rows={alldepartmentList}
        columns={columns}
        loading={stateLoading}
      />
    </div>
  );
};
export default departmentListingContainer(DepartmentList);
