import React from "react";
import {useHistory} from "react-router-dom";

import Table from "../../../../../components/Table";
import viewRoleContainer from "../../../../../container/KunjiRole/ViewRoleContainer";
import Button from "../../../../../components/Button";

const ViewRole = ({ rolesDetail }) => {
  const history = useHistory();
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Role", width: 160 },
    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 160,
      getActions: () => [
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, borderRadius: 20, textTransform: "Capitalize" }}
          size="normal"
        //   click={history.push("/Role_Detail")}
        >
          View Permissions
        </Button>,
      ],
    },
  ];

  return (
    <div style={{ height: "100vh", width: "100%", background: "white" }}>
      <Table rows={rolesDetail} columns={columns} />
    </div>
  );
};

export default viewRoleContainer(ViewRole);
