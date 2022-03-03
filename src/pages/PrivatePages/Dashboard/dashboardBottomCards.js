import React from "react";
import "./dashboardBottomCards.css";

const DashboardBottomCards = () => {
  return (
    <>
      <div className="col-sm-12  " style={{ paddingTop: "3%" }}>
        <div className="col-sm-12  ">
          <div className="row " style={{ marginBottom: "3%" }}>
            <div className="col-sm-6 ">
              <div className="col-sm-12" id="background-color-cards">
                <div className="row p-3">
                  <div className="col-sm-6">
                    <h3 style={{ color: "#274C77" }}>
                      <b>Unresolved tickets</b>
                    </h3>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="col-sm-12" id="align-card-s">
                      <p style={{ color: "#E85DC3" }}>view details</p>
                    </div>
                  </div>
                </div>
                <div className="row p-3 ">
                  <span style={{ color: "#274C77" }}>
                    <h4>
                      Groups<b>: Support</b>
                    </h4>
                  </span>
                </div>

                <div className="col-sm-12 ">
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="ps-3">Waiting on Feature Request</p>
                    </div>
                    <div className="col-sm-6  " id="align-card-s">
                      <p style={{ color: "lightgrey", paddingRight: "3%" }}>
                        <b>4238</b>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-sm-12 ">
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="ps-3">Awaiting Customer Response</p>
                    </div>
                    <div className="col-sm-6  " id="align-card-s">
                      <p style={{ color: "lightgrey", paddingRight: "3%" }}>
                        <b>4238</b>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-sm-12 ">
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="ps-3">Awating Developer Fix</p>
                    </div>
                    <div className="col-sm-6  " id="align-card-s">
                      <p style={{ color: "lightgrey", paddingRight: "3%" }}>
                        <b>4238</b>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-sm-12 ">
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="ps-3">Pending</p>
                    </div>
                    <div className="col-sm-6  " id="align-card-s">
                      <p style={{ color: "lightgrey", paddingRight: "3%" }}>
                        <b>4238</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 ">
              <div className="col-sm-12" id="background-color-cards">
                <div className="row p-3">
                  <div className="col-sm-6">
                    <h3 style={{ color: "#274C77" }}>
                      <b>Tasks</b>
                    </h3>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="col-sm-12" id="align-card-s">
                      <p style={{ color: "#E85DC3" }}>view all</p>
                    </div>
                  </div>
                </div>
                <div className="row p-3 ">
                  <span style={{ color: "#274C77" }}>
                    <h4>Today</h4>
                  </span>
                </div>

                <div className="col-sm-12 ">
                  <div className="row">
                    <div className="col-sm-6">
                      <div
                        className="form-check"
                        style={{ marginLeft: "20px" }}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Awaiting Customer Response
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6  " id="align-card-s">
                      <button className="btn btn-dark btn-sm btn-style">
                        {" "}
                        URGENT{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-sm-12 ">
                  <div className="row">
                    <div className="col-sm-6">
                      <div
                        className="form-check"
                        style={{ marginLeft: "20px" }}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Awaiting Developer Fix
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6  " id="align-card-s">
                      <button className="btn btn-dark btn-sm btn-style1">
                        {" "}
                        URGENT{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-sm-12 ">
                  <div className="row">
                    <div className="col-sm-6">
                      <div
                        className="form-check"
                        style={{ marginLeft: "20px" }}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Pending
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6  " id="align-card-s">
                      <button className="btn btn-dark btn-sm btn-style3">
                        {" "}
                        URGENT{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="col-sm-12 ">
                  <div className="row">
                    <div className="col-sm-6">
                      <div
                        className="form-check"
                        style={{ marginLeft: "20px", paddingBottom: "20px" }}
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Awaiting Customer Response
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6  " id="align-card-s">
                      <button className="btn btn-dark btn-sm btn-style">
                        URGENT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardBottomCards;
