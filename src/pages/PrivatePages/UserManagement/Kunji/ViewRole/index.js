import React from "react";
import { useHistory, Link } from "react-router-dom";

import Table from "../../../../../components/Table";
import viewRoleContainer from "../../../../../container/KunjiRole/ViewRoleContainer";
import Button from "../../../../../components/Button";
import Card from "../../../../../components/Card";

const ViewRole = ({ rolesDetail, stateLoading }) => {
  const history = useHistory();
  const columns = [
    { field: "id", headerName: "ID", width: 200,headerAlign:"center" },
    { field: "name", headerName: "Role", width: 360,headerAlign:"center" },
    {
      headerAlign:"center",
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 360,
      getActions: (params) => [
        <div className="view-button-outer" style={{ display: "flex" }}>
          <Link to={`/Role_Detail/${params?.id}`}>
            <Button
              fullWidth
              className="mt-2 btn-sm"
              variant="contained"
              sx={{
                
                borderRadius: 20,
                textTransform: "Capitalize",
              }}
              size="normal"
            >
              View Permissions
            </Button>
           
          </Link>
        </div>,
      ],
    },
  ];

  return (
    <Card>
      <h3>View Roles</h3>

      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table rows={rolesDetail} columns={columns} loading={stateLoading} />
      </div>
    </Card>
  );
};

export default viewRoleContainer(ViewRole);
