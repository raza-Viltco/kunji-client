import { React, useEffect, useState } from "react";

import Card from "../../../../../components/Card";
import Table from "../../../../../components/Table";
import Button from "../../../../../components/Button";
import Modals from "../../../../../components/Modal";
import Doc from "../../../../../assets/Doc.jpg";
import servantApprovalContainer from "../../../../../container/Security Management/Society/ServantApprovalContainer";
import "./servantApproval.css";

const ServantApprovalList = ({
  servantData,
  handleApproveServant,
  handleRejetServant,
  stateLoading,
}) => {
  console.log(servantData, "servant Data");

  const [show, setShow] = useState(false);
  const [datas, setData] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOpen = (params) => {
    console.log(params, "params");
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      type: "actions",
      headerName: "Resident Name",
      width: 200,
      getActions: (params) => [<div>{params.row.resident.name}</div>],
    },
    { field: "resaddress", headerName: "Resident Address", width: 160 },
    {
      field: "first_name",
      type: "actions",
      headerName: "Servant  Name",
      width: 200,
      getActions: (params) => [
        <div>{params.row.first_name + " " + params.row.last_name}</div>,
      ],
    },
    { field: "mobile", headerName: "Mobile No", width: 160 },
    { field: "cnic", headerName: "CNIC", width: 160 },
    { field: "address", headerName: "Servant  Address", width: 160 },
    { field: "servantType", headerName: "Servant Type", width: 160 },

    {
      field: "attach",
      type: "actions",
      headerName: "Attachments",
      width: 200,
      getActions: (params) => [
        <div>
          <button
            className="btn btn-success btn-sm "
            // key={params.rows.id}
            onClick={() => {
              handleShow(params.row.id);
            }}
            // onClick={()=>{
            //   handleOpen(params.row.id)
            // }}
          >
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
          ? "Approved"
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
          {(params.row.status === 0 || params.row.status === 2) && (
            <button
              className="btn btn-success btn-sm"
              onClick={() => {
                handleApproveServant(params.row.id, params.row.status);
              }}
            >
              Approve
            </button>
          )}
          &nbsp;
          {(params.row?.status === 0 || params.row?.status === 1) && (
            <button
              className="btn btn-danger btn-sm "
              onClick={() => {
                handleRejetServant(params.row.id, params.row.status);
              }}
            >
              Reject
            </button>
          )}
        </div>,
      ],
    },
  ];

  return (
    <Card>
      <h3>Servant Registration Approvals</h3>
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table rows={servantData} columns={columns} loading={stateLoading} />
      </div>
      {/* -------------modal code----- */}
      const data=
      <Modals
        open={show}
        close={handleClose}
        className="modalstyle"

        // title="name"
        // closeButton="close"
      >
        {/* -------cnic image---- */}
        {/* const imageType = file.type === 'image/jpeg' || file.type === 'image/png'; */}

        {/* {servantData?.cnic_images === "" ? (
          ""
        ) : ( */}
        <div className="user">
          <h5>CNIC </h5>
          <div className="servant-modal-data mb-3">
            {servantData?.map((user) => (
              <div className="col-sm-2 ">
                <a href={user?.cnic_images} target="_blank">
                  {/* {user?.cnic_images?.split(".").pop() === "png" ? ( */}
                  <img
                    src={user?.cnic_images}
                    className="img-fluid"
                    style={{ borderRadius: "5px" }}
                    alt="pdf"
                  />
                  {/* ) : ( */}
                  <ul>
                    {/* <li>{user?.cnic_images?.split("/").pop()}</li> */}
                  </ul>
                  {/* )} */}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* // )} */}
        {/* -------------driving Liscence--- */}

        <div>
          <div className="user">
            <h5>Driving Liscence </h5>
            <div className="servant-modal-data mb-3">
              {servantData?.map((user) => (
                <div key={user?.id} className="col-sm-3">
                  <a href={user?.driving_licence} target="_blank">
                    {user?.driving_licence?.split(".").pop() === "png" ? (
                      <img
                        src={user?.driving_licence}
                        className="img-fluid"
                        style={{ borderRadius: "5px" }}
                      />
                    ) : (
                      <ul>
                        <li> {user?.driving_licence?.split("/").pop()}</li>
                      </ul>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ----------------police report-------- */}

        <div className="user">
          <h5>Police Report</h5>
          <div className="servant-modal-data mb-3">
            {servantData?.map((user) => (
              <div className="col-sm-3">
                <a href={user?.police_report_image} target="_blank">
                  {user?.police_report_image?.split(".").pop() === "png" ? (
                    <div className="col-sm-12">
                      <img
                        src={user?.police_report_image}
                        className="img-fluid img-set"
                      />
                    </div>
                  ) : (
                    <ul>
                      <li> {user?.police_report_image.split("/").pop()} </li>
                    </ul>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Modals>
    </Card>
  );
};
export default servantApprovalContainer(ServantApprovalList);
