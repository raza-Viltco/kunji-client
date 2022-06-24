import React from "react";
import { Link } from "react-router-dom";

import Table from "../../../components/Table";
import propertyListContainer from "../../../container/PropertyOwnership/PropertyListingContainer";
import Button from "../../../components/Button";

const AssignOwnershipListing = ({ assignListData, stateLoading }) => {
  const showData = (params) => {
    console.log(params, "apats");
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70, headerAlign:"center" },
    // { field: "location", headerName: "Location", width: 300 },
    {
      headerAlign:"center",
      field: "mapping_level_one_name",
      headerName: " Location",
      valueGetter: (params) =>
        params?.row?.mapping_level_one_name +
        " " +
        params?.row?.mapping_level_three_name +
        " " +
        params?.row?.mapping_level_two_name,
      width: 160,
    },

    {
      headerAlign:"center",
      field: "first_name",
      headerName: " User Name",
      valueGetter: (params) =>
        params?.row?.landlord?.first_name + " " + params?.row?.landlord?.last_name,
      width: 160,
    },
    {
      headerAlign:"center",
      field: "cnic",
      headerName: "CNIC",
      valueGetter: (params) => params?.row?.landlord?.cnic,
      width: 160,
    },
    {
      headerAlign:"center",
      field: "mobile",
      headerName: "MOBILE",
      valueGetter: (params) => params?.row?.landlord?.mobile,
      width: 160,
    },

    {
      headerAlign:"center",
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className="col-sm-12 view-button-outer text-center " >
          <Link to={`/view_property/${params.id}`}>
            <Button
              type="submit"
              fullWidth
              className="rounded-pill mt-2"
              variant="contained"
              // sx={{ mt: 3, mb: 2 }}
              // isLoading={stateLoading}
              size="small"
            >
              View
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table rows={assignListData} columns={columns} loading={stateLoading} />
      </div>
    </>
  );
};
export default propertyListContainer(AssignOwnershipListing);
