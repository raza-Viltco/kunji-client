import React from "react";
import { Form, Formik } from "formik";

import Input from "../../../../../components/Form/Input";
import TextArea from "../../../../../components/Form/textArea";
import Dropdown from "../../../../../components/Form/Dropdown";
import Button from "../../../../../components/Button";
import InputError from "../../../../../components/Form/InputError";
import { timeFormat, dateFormat } from "../../../../../utils/functions";
import caseDetailContainer from "../../../../../container/Security Management/Society/CaseDetailContainer";

const CaseDetail = ({
  caseDetail,
  departmentsDetail,
  initialValues,
  validationSchema,
  stateLoading,
  handleComplaintReply,
}) => {
  return (
    <div className="col-sm-12 pt-2 pb-2 px-2 backgroundcover">
      <h3 className="pt-3">
        <b>{caseDetail?.status === "Open" ? "Open Case" : "Close Case"}</b>
      </h3>
      <div className="row mt-4">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 text-left m-auto px-4">
              <label>
                <b>Resident Name</b>
              </label>
            </div>
            <div className="col-sm-8">
              <Input
                placeholder="Resident Name"
                className="bootstyle"
                value={caseDetail?.user?.name}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6 mt-2">
              <h6>
                <b>Case No. {caseDetail?.id}</b>
              </h6>
            </div>
            <div className="col-sm-6 m-auto">
              <span>
                <h6>
                  <b>Time </b>
                  {timeFormat(caseDetail?.created_at)}
                  <b> &nbsp;&nbsp;&nbsp; Date</b> &nbsp;
                  {dateFormat(caseDetail?.created_at)}
                </h6>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 text-left m-auto px-4">
              <label>
                <b>Case Title</b>
              </label>
            </div>
            <div className="col-sm-8">
              <Input
                placeholder="Parking not available"
                className="bootstyle"
                value={caseDetail?.title}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 text-left m-auto">
              <label>
                <b>Mobile Number</b>
              </label>
            </div>
            <div className="col-sm-8">
              <Input
                placeholder="Contact Number"
                className="bootstyle"
                value={caseDetail?.user?.mobile}
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-2 text-left m-auto px-4">
              <label>
                <b>Description</b>
              </label>
            </div>
            <div className="col-sm-10">
              <TextArea
                placeholder="Description"
                className="bootstyle"
                value={caseDetail?.description}
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleComplaintReply}
      >
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-2 text-left m-auto px-4">
                    <label>
                      <b>Reply</b>
                    </label>
                  </div>
                  <div className="col-sm-10">
                    <TextArea
                      placeholder="Reply"
                      name="comment"
                      value={props.values.comment}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      className={
                        props.errors.comment && props.touched.comment
                          ? "input-outline"
                          : "bootstyle"
                      }
                    />
                    {props.touched.comment && Boolean(props.errors.comment) && (
                      <InputError>{props.errors.comment}</InputError>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3 pb-3">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-8 text-left m-auto px-4"></div>
                  <div className="col-sm-4">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                      isLoading={stateLoading}
                      size="normal"
                    >
                      REPLY
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="row mt-4">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 text-left m-auto px-4">
              <label>
                <b>Department</b>
              </label>
            </div>
            <div className="col-sm-8">
              <Dropdown className="bootstyle">
                <option>Select Department</option>
                {departmentsDetail?.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 text-left m-auto px-4">
              <label>
                <b>Staff Member</b>
              </label>
            </div>
            <div className="col-sm-8">
              <Dropdown className="bootstyle">
                <option>Select Staff Member</option>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4 pb-4">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 text-left m-auto px-4">
              <label>
                <b>Status</b>
              </label>
            </div>
            <div className="col-sm-8">
              <Dropdown className="bootstyle">
                <option>Select Status</option>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 text-left m-auto px-4"></div>
            <div className="col-sm-8">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                // isLoading={stateLoading}
                size="normal"
              >
                ASSIG CASE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default caseDetailContainer(CaseDetail);
