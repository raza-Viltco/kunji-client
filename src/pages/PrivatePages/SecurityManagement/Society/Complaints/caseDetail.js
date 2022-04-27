import React from "react";
import Input from "../../../../../components/Form/Input";
import TextArea from "../../../../../components/Form/textArea";
import Dropdown from "../../../../../components/Form/Dropdown";

function CaseDetail() {
  return (
    <div className="col-sm-12 pt-2 pb-2 px-2 backgroundcover">
      <h3 className="pt-3"><b>Open Case</b></h3>
      <div className="row mt-4">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 text-left m-auto px-4">
              <label>
                <b>Resident Name</b>
              </label>
            </div>
            <div className="col-sm-8">
              <Input placeholder="Ali" className="bootstyle" />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6 mt-2">
              <h6>
                <b>Case No. 5478</b>
              </h6>
            </div>
            <div className="col-sm-6 m-auto">
              <span>
                <h6>
                  <b>Time </b>08:06<b> &nbsp;&nbsp;&nbsp; Date</b> 08:06
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
              <Input placeholder="Parking not available"  className="bootstyle" />
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
              <Input placeholder="03134361309" className="bootstyle" />
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
              <TextArea placeholder="Parking not available Parking not available Parking not available Parking not available" className="bootstyle" />
            </div>
          </div>
        </div>
     
      </div>


      <div className="row mt-3">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-2 text-left m-auto px-4">
              <label>
                <b>Reply</b>
              </label>
            </div>
            <div className="col-sm-10">
              <TextArea placeholder="Maintainance Work" className="bootstyle" />
            </div>
          </div>
        </div>
     
      </div>

      <div className="row mt-3 pb-3">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-8 text-left m-auto px-4">
            
            </div>
            <div className="col-sm-4">
             <button className="btn btn-success" style={{width:"100%", borderRadius:"20px"}}>REPLY</button>
            </div>
          </div>
        </div>
     
      </div>

      <div className="row mt-4">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 text-left m-auto px-4">
              <label>
                <b>Department</b>
              </label>
            </div>
            <div className="col-sm-8">
              <Dropdown className="bootstyle" />
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
              <Dropdown className="bootstyle" />
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
              <Dropdown className="bootstyle" />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-4 text-left m-auto px-4">
             
            </div>
            <div className="col-sm-8">
            <button className="btn btn-success" style={{width:"100%", borderRadius:"20px"}}>ASSIG CASE</button>
            </div>
          </div>
        </div>
     
      </div>


    </div>
    
  );
}

export default CaseDetail;
