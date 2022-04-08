import React from "react";

import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Table from "../../../components/Table";

const AssignOwnership = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "building", headerName: "Building", width: 160 },
    { field: "floor", headerName: "Floor No", width: 70 },
    { field: "apartment", headerName: "Apartment No", width: 70 },
    { field: "ownerName", headerName: "Owner Name", width: 160 },
    { field: "cnic", headerName: "CNIC", width:200 },
    { field: "address", headerName: "Address", width: 260 },
    { field: "attachment", headerName: "Attachment", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      building: "Arfa Tower",
      floor: "5 ",
      apartment: "4",
      ownerName: "Ahmed",
      cnic: "21313-243-2",
      address: "252-A Defence Housing Authority",
      attachment: "icons",
    },
    {
      id: 2,
      building: "Mehtab Tower",
      floor: "8 ",
      apartment: "1",
      ownerName: "Akram",
      cnic: "56123-4554-2",
      address: "Model Town",
      attachment: "icons",
    },
    {
      id: 3,
      building: "Ali Tower",
      floor: "9 ",
      apartment: "3",
      ownerName: "Aslam",
      cnic: "21313-243-2",
      address: "Garison Homes ",
      attachment: "icons",
    },
    {
      id: 4,
      building: "Arfa Tower",
      floor: "12 ",
      apartment: "4",
      ownerName: "Arslan",
      cnic: "345435433-243-2",
      address: "Muslim Town",
      attachment: "icons",
    },
  ];

  return (
    <Card>
      <h3>Assign Ownership</h3>
      <div className="row">
        <div className="col-md-6">
          Fields here
        </div>
        <div className="col-md-6">
        Fields here
        </div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
      </div>
      <div className="society_btn__wrapper">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          // isLoading={stateLoading}
          size="small"
        >
          Assign
        </Button>
      </div>

      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={rows}
          columns={columns}
          //   loading={!societiesList.length}
        />
      </div>
    </Card>
  );
};
export default AssignOwnership;
