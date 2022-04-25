import { React, useState } from "react";

import Card from "../../../../../components/Card";
import Table from "../../../../../components/Table";
import Button from "../../../../../components/Button";
import Modals from "../../../../../components/Modal";
import Doc from "../../../../../assets/Doc.jpg";
import servantApprovalContainer from "../../../../../container/Security Management/Society/ServantApprovalContainer";
import "./servantApproval.css";

const ServantApprovalList = ({ servantData }) => {
  console.log(servantData, "servant Data");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const handleOpen=(params)=>{
     console.log(params,"params")
   }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "Resident  Name", width: 160 },
    { field: "servant_name", headerName: "Servant  Name", width: 160 },

    // { field: "last_name", headerName: "Name", width: 160 },
    { field: "mobile", headerName: "Mobile No", width: 160 },
    { field: "cnic", headerName: "CNIC", width: 160 },
    { field: "address", headerName: "  Address", width: 160 },
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
      field: "status",
      headerName: "Status",
      width: 160,
      valueGetter: (params) =>
        params.row?.status === 1
          ? "Accepted"
          : params.row?.status === 0
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
          <button className="btn btn-success btn-sm" onClick={handleOpen(params)}>Approve</button>
          &nbsp;
          <button className="btn btn-danger btn-sm ">Reject</button>
        </div>,
      ],
    },
  ];

  return (
    <Card>
      <h3>Servant Registration Approvals</h3>

      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={servantData}
          columns={columns}
          //   loading={!societiesList.length}
        />
      </div>

      {/* -------------modal code----- */}
      <Modals
        open={show}
        close={handleClose}

        // title="name"
        // closeButton="close"
      >
        {/* -------cnic image---- */}

        <div className="user">
          <h5>CNIC </h5>
          {servantData?.map((user) => (
            <div className="d-flex">
              <a href={user.cnic_images} target="_blank">
                <img
                  src={user.cnic_images}
                  className="img-fluid"
                  height="100px"
                  width="100px"
                  alt="pdf"
                />
              </a>
            </div>
          ))}
        </div>
        {/* -------------driving Liscence--- */}
        <div>
          <div className="user">
            <h5>Driving Liscence </h5>
            {servantData?.map((user) => (
              <div className="d-flex">
                <a href={user.driving_licence} target="_blank">
                  <img
                    src={user.driving_licence}
                    className="img-fluid image-style"
                    height="100px"
                    width="100px"
                    alt="pdf"
                    style={{
                      border: "2px solid red",
                      backgroundColor: "green",
                    }}
                  />
                </a>
              </div>
            ))}
          </div>

          {/* <button onClick={handleClose}>Close</button> */}
        </div>

        {/* ----------------police report-------- */}

        <div className="user">
          <h5>Police Report</h5>
          {servantData?.map((user) => (
            <div className="d-flex">
              <a href={user.police_report_image} target="_blank">
                <img
                  src={user.police_report_image}
                  className="img-fluid"
                  height="100px"
                  width="100px"
                />
              </a>
            </div>
          ))}
        </div>

        {/* <div>
          {servantData?.map((user) => (
            <div className="user">
              <a href={user.police_report_image} target="_blank">
                <img
                  src={user.police_report_image}
                  className="img-fluid"
                  height="100px"
                  width="100px"
                />
              </a>
  
            </div>
          ))}
          <h5>CNIC</h5>
          <div className="view-servant-doc ">
            <img src={Doc} alt="" height="50px" width="50px" />
            &nbsp; &nbsp;
            <img src={Doc} alt="" height="50px" width="50px" />
          </div>

          <h5>Driving Liscence </h5>
          <div className="d-flex">
            <img src={Doc} alt="" height="50px" width="50px" />
          </div>

          <div className="row">
            <div className="col-sm-10"></div>
            <div className="col-sm-2">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                size="normal"
                click={handleClose}
              >
                Close
              </Button>
            </div>
          </div>
        </div> */}

        <div>
          <div className="user">
            <h5>Police Report </h5>
            {servantData?.map((user) => (
              <div className="d-flex">
                <a href={user.driving_licence} target="_blank">
                  <img
                    src={user.driving_licence}
                    className="img-fluid image-style"
                    height="100px"
                    width="100px"
                    alt="pdf"
                    style={{
                      border: "2px solid red",
                      backgroundColor: "green",
                    }}
                  />
                </a>
              </div>
            ))}
          </div>

          {/* <button onClick={handleClose}>Close</button> */}
        </div>
      </Modals>
    </Card>
  );
};
export default servantApprovalContainer(ServantApprovalList);
