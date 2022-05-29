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
        <div className="col-sm-12 text-center">
          {params.row.status === 1 ? (
            <button
              className="btn btn-danger"
              onClick={() =>
                handleDepartmentStatus(params.id, params.row.status)
              }
            >
              Activate
            </button>
          ) : (
            <button
              className="btn btn-success"
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
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <Table
        rows={alldepartmentList}
        columns={columns}
        loading={stateLoading}
      />
    </div>
  );
};
export default departmentListingContainer(DepartmentList);
