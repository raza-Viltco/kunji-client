import React from "react";

import Table from "../../../../../components/Table";
import Button from "../../../../../components/Button";
import roleListingContainer from "../../../../../container/KunjiRole/RoleListingContainer";

const RoleListing = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "society", headerName: "Society Name", width: 160 },
    { field: "module", headerName: " Module Name", width: 160 },
    { field: "activity", headerName: " Activity", width: 160 },
    { field: "action", headerName: " Action", width: 160 },
    { field: "permission", headerName: "Permissions", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      module: "Manager",
      society: "DHA",
      activity: "User Management",
      action: "Add",
      permission: "",
    },
  ];

  return (
    <>
      <div
        style={{
          height: 420,
          width: "100%",
          background: "white",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <Table
          rows={rows}
          columns={columns}
        />
      </div>
      <div className="society_btn__wrapper">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, borderRadius:20 }}
          // isLoading={stateLoading}
          size="small"
        >
          Save
        </Button>
      </div>
    </>
  );
};
export default roleListingContainer(RoleListing);
