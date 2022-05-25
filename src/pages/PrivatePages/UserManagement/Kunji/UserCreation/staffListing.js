import { React } from "react";

import Table from "../../../../../components/Table";
import Card from "../../../../../components/Card";
import staffListingContainer from "../../../../../container/KunjiRole/StaffListingContainer";

const StaffMemberListing = ({ staffListData, stateLoading }) => {
  console.log(staffListData, "staffListData");
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },

    {
      field: "first_name",
      headerName: "First Name",
      width: 160,
    },
    {
      field: "last_name",
      headerName: "Last Name",

      width: 160,
    },
    {
      field: "email",
      headerName: " Email",

      width: 160,
    },
    {
      field: "cnic",
      headerName: " CNIC",

      width: 160,
    },
    {
      field: "mobile",
      headerName: "Mobile No",
      width: 160,
    },
  ];

  return (
    <Card>
      <h3>View Staff Member</h3>

      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table rows={staffListData} columns={columns} loading={stateLoading} />
      </div>
    </Card>
  );
};
export default staffListingContainer(StaffMemberListing);
