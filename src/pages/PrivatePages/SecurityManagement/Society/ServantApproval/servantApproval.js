import { React, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";
import Card from "../../../../../components/Card";
import Button from "../../../../../components/Button";
import Modals from "../../../../../components/Modal";
import {Modal} from "react-bootstrap"
import "./servantApproval.css";

const ServantApprovalList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Resident Name", width: 160 },
    { field: "address", headerName: " Resident Address", width: 160 },
    { field: "visitor", headerName: " Servant Name", width: 160 },
    { field: "mobile", headerName: "Mobile No", width: 160 },
    { field: "cnic", headerName: "CNIC", width: 160 },
    { field: "adress", headerName: "Address", width: 160 },
    { field: "servantType", headerName: "Servant Type", width: 160 },
    {
      field: "attach",
      type: "actions",
      headerName: "Attachments",
      width: 200,
      getActions: (params) => [
        <div>
          <button className="btn btn-success btn-sm " onClick={handleShow}>
            View
          </button>
        </div>,
      ],
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 200,
      getActions: (params) => [
        <div>
          <button className="btn btn-success btn-sm ">Approve</button>
          &nbsp;
          <button className="btn btn-danger btn-sm ">Reject</button>
        </div>,
      ],
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Smith",
      address: "Johar Town",
      visitor: "Joe",
      mobile: "7283423423432",
      cnic: "62342-3242-2",
      adress: "Lahore",
      servantType: "Servant Type",
      approval: "Approve Reject",
    },
    {
      id: 2,
      name: "Amit",
      address: "Model Town",
      visitor: "Jack",
      mobile: "23423434343",
      cnic: "62342-3242-2",
      adress: "Lahore",
      servantType: "Servant Type",
      approval: "Approve Reject",
    },
    {
      id: 3,
      name: "Jae",
      address: "Burkey",
      visitor: "Smith",
      mobile: "7283423423432",
      cnic: "62342-3242-2",
      adress: "Lahore",
      servantType: "Servant Type",
      approval: "Approve Reject",
    },
    {
      id: 4,
      name: "Romi",
      address: "Lahore",
      visitor: "Humen",
      mobile: "7283423423432",
      cnic: "62342-3242-2",
      adress: "Lahore",
      servantType: "Servant Type",
      approval: "Approve Reject",
    },
    {
      id: 5,
      name: "Ashraf",
      address: "Model Town",
      visitor: "Sam",
      mobile: "7283423423432",
      cnic: "62342-3242-2",
      adress: "Lahore",
      servantType: "Servant Type",
      approval: "Approve Reject",
    },
  ];

  return (
    <Card>
      <h3>Servant Registration Approvals</h3>

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

      {/* -------------modal code----- */}
      <Modals open={show} close={handleClose}
      
      title="name"
      closeButton="close"
      >
      <div>
        <h3>modal bpdy</h3>
      </div>
      
      </Modals>
    </Card>
  );
};
export default ServantApprovalList;
