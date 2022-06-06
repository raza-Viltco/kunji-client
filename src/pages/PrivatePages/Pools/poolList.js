import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Card from "../../../components/Card";
import Table from "../../../components/Table";
import Button from "../../../components/Button";
import pollListContainer from "../../../container/Poll/PollListContainer";
import "./poolList.css";

const PoolList = ({ pollListData, stateLoading }) => {
  const history = useHistory();
  const handleData = (params) => {
    console.log(params, "params");
    history.push("/view_poll", { params });
  };

  const columns = [
    { field: "id", headerName: "Sr", width: 70, headerAlign:"center" },
    { field: "question", headerName: "Questions", width: 300, headerAlign:"center" },
    { field: "valid_days", headerName: " Validity", width: 160, headerAlign:"center" },
    { field: "total_vote", headerName: " Total Votes", width: 160, headerAlign:"center" },
    {
      field: "first_name",
      headerName: "Person",
      width: 160,
      valueGetter: (params) => params.row.user?.name,
    },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className="view-button-outer" style={{ display: "flex" }}>
          <Link to={`/view_poll/${params.id}`}>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              className="rounded-pill"
              
              size="small"
              // click={() => handleData(params.id)}
            >
              View
            </Button>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <Card>
      <div className="pool-outer-flex">
        <div>
          <h4>Polls</h4>
        </div>

        <div className="society_btn__wrapper">
          <Link to="/create_poll">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: 20 }}
              // isLoading={stateLoading}
              size="small"
            >
              Create Poll
            </Button>
          </Link>
        </div>
      </div>

      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table rows={pollListData} columns={columns} loading={stateLoading} />
      </div>
    </Card>
  );
};
export default pollListContainer(PoolList);
