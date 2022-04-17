import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { DataGrid } from "@mui/x-data-grid";

import Button from "../../../../components/Button";
import departmentListingContainer from "../../../../container/Department/Kunji/DepartmentListingContainer";
import "./department.css";

const DepartmentList = ({ departmentList, handleDepartmentStatus }) => {
  // const[checked,setChecked]=useState()

  // const handleDepartmentStatusHere = (e,dptId,status) => {
  //   console.log(e.target.checked);
  //   // console.log("status",status,dptId)
  //   // dispatch(departmentStatus(dptId,status));
  // };

  const dataSet = (status) => {
    console.log(status, "params");
  };

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
 
    // {
    //   field: "actions",
    //   headerName: "Status",
    //   width: 200,
    //   getActions: (params) => [
    //     <button

    //     >
    //       View
    //     </button>,
    // <GridActionsCellItem
    //   icon={<AiFillDelete size={20} />}
    //   label="Delete"
    // />,
    // <GridActionsCellItem
    //   icon={<AiFillEdit size={20} />}
    //   label="Edit"
    //   onClick={() => handleClickOpen(params.id)}
    // />,
    // ],
    // renderCell: (params) => (
    //   <div style={{ display: "flex" }}>
    //     {/* <Switch

    //     /> */}
    //     <button
    //     onClick={dataSet(params)}
    //     >Test</button>

    //     {/* <Button
    //       type="submit"
    //       fullWidth
    //       variant="contained"
    //       sx={{ mt: 3, mb: 2 }}
    //       // isLoading={stateLoading}
    //       size="small"
    //     >
    //       Active
    //     </Button>
    //     &nbsp;
    //     <Button
    //       type="submit"
    //       fullWidth
    //       variant="contained"
    //       sx={{ mt: 3, mb: 2 }}
    //       // isLoading={stateLoading}
    //       size="small"
    //     >
    //       In Active
    //     </Button> */}
    //   </div>
    // ),
    // },

    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 200,
      getActions: (params) => [
        <div>
          {params.row.status === 1 ? (
            <button
              onClick={() =>
                handleDepartmentStatus(params.id, params.row.status)
              }
            >
              Inactive
            </button>
          ) : (
            <button
              onClick={() =>
                handleDepartmentStatus(params.id, params.row.status)
              }
            >
              Active
            </button>
          )}
        </div>,

        // <button
        //   fullWidth
        //   variant="contained"
        //   sx={{ mt: 3, mb: 2, borderRadius: 20, textTransform: "Capitalize" }}
        //   size="normal"
        //   onClick={() => dataSet(params.id)}
        // >
        //   View
        // </button>,
        // <GridActionsCellItem
        //   icon={<AiFillDelete size={20} />}
        //   label="Delete"
        // />,
        // <GridActionsCellItem
        //   icon={<AiFillEdit size={20} />}
        //   label="Edit"
        //   onClick={() => handleClickOpen(params.id)}
        // />,
      ],
    },
  ];

  return (
    <div
      style={{
        height: 420,
        width: "100%",
        background: "white",
        textAlign: "center",
      }}
    >
      <DataGrid
        rows={departmentList}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
};
export default departmentListingContainer(DepartmentList);
