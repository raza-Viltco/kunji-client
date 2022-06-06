import { React } from "react";

import Card from "../../../../../components/Card";
import Table from "../../../../../components/Table";
import Dialog from "../../../../../components/Modal";
import servantApprovalContainer from "../../../../../container/Security Management/Society/ServantApprovalContainer";
import "./servantApproval.css";

const ServantApprovalList = ({
  servantData,
  handleApproveServant,
  servantDataList,
  handleRejetServant,
  show,
  handleServantList,
  handleModalClose,
  stateLoading,
}) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70, headerAlign:"center" },
    {
      headerAlign:"center",
      field: "name",
      type: "actions",
      headerName: "Resident Name",
      width: 200,
      getActions: (params) => [<div>{params?.row?.resident?.name}</div>],
    },
    { field: "address", headerName: "Resident Address", width: 160,headerAlign:"center" },
    {
      headerAlign:"center",
      field: "first_name",
      type: "actions",
      headerName: "Servant  Name",
      width: 200,
      getActions: (params) => [
        <div>{params?.row?.first_name + " " + params?.row?.last_name}</div>,
      ],
    },
    {
      headerAlign:"center",
      field: "servent_name",
      headerName: "Servant Type",
      width: 160,
      valueGetter: (params) => params?.row?.servent_name?.name,
    },

    { field: "mobile", headerName: "Mobile No", width: 160,headerAlign:"center" },
    { field: "cnic", headerName: "CNIC", width: 160,headerAlign:"center" },
    { field: "address", headerName: "Servant  Address", width: 160 ,headerAlign:"center"},

    {
      headerAlign:"center",
      field: "attach",
      type: "actions",
      headerName: "Attachments",
      width: 200,
      getActions: (params) => [
        <div>
          <button
            className="btn btn-success btn-sm "
            onClick={() => {
              handleServantList(params?.row?.id);
            }}
          >
            View
          </button>
        </div>,
      ],
    },
    {
      headerAlign:"center",
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
      headerAlign:"center",
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 200,
      getActions: (params) => [
        <div>
          {(params.row?.status === 0 || params.row?.status === 2) && (
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

      <Dialog open={show} close={handleModalClose} className="modalstyle">
        {servantDataList?.cnic_images === null ||
        servantDataList?.cnic_images === "" ? (
          ""
        ) : (
          <div className="user">
            <h5>CNIC </h5>
            <div className="servant-modal-data mb-3">
              <div className="col-sm-2 ">
                {servantDataList?.cnic_images?.map((item) => {
                  return (
                    <>
                      <a href={item} target="_blank">
                        {item?.cnic_images?.split(".").pop() === "png" ||
                        "jpg" ||
                        "jpeg" ||
                        "svg" ? (
                          <img
                            src={item}
                            className="img-fluid"
                            style={{ borderRadius: "5px" }}
                            alt="pdf"
                          />
                        ) : (
                          <li>{item?.split("/").pop()}</li>
                        )}
                      </a>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {/* -------------driving Liscence--- */}
        {servantDataList?.driving_licence === null ||
        servantDataList?.driving_licence === "" ? (
          ""
        ) : (
          <div>
            <div className="user">
              <h5>Driving Liscence </h5>
              <div className="servant-modal-data mb-3">
                <div key={servantDataList?.id} className="col-sm-3">
                  <a href={servantDataList?.driving_licence} target="_blank">
                    {servantDataList?.driving_licence?.split(".").pop() ===
                      "png" ||
                    "jpg" ||
                    "jpeg" ||
                    "svg" ? (
                      <img
                        src={servantDataList?.driving_licence}
                        className="img-fluid"
                        style={{ borderRadius: "5px" }}
                      />
                    ) : (
                      <ul>
                        <li>
                          {servantDataList?.driving_licence?.split("/").pop()}
                        </li>
                      </ul>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* ----------------police report-------- */}
        {servantDataList?.police_report_image === null ||
        servantDataList?.police_report_image === "" ? (
          ""
        ) : (
          <div className="user">
            <h5>Police Report</h5>
            <div className="servant-modal-data mb-3">
              <div className="col-sm-3">
                <a href={servantDataList?.police_report_image} target="_blank">
                  {servantDataList?.police_report_image?.split(".").pop() ===
                    "png" ||
                  "jpg" ||
                  "jpeg" ||
                  "svg" ? (
                    <div className="col-sm-12">
                      <img
                        src={servantDataList?.police_report_image}
                        className="img-fluid img-set"
                      />
                    </div>
                  ) : (
                    <ul>
                      <li>
                        {servantDataList?.police_report_image
                          ?.split("/")
                          ?.pop()}
                      </li>
                    </ul>
                  )}
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="close-modal-button">
          <button
            className=" btn btn-danger btn-sm "
            onClick={handleModalClose}
          >
            Close
          </button>
        </div>
      </Dialog>
    </Card>
  );
};
export default servantApprovalContainer(ServantApprovalList);
