import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../components/Card";
import Table from "../../../components/Table";
import Button from "../../../components/Button";
import "./pollList.css";

const PoolList = () => {
  const columns = [
    { field: "id", headerName: "Sr", width: 70 },
    { field: "question", headerName: "Questions", width: 300 },
    { field: "validity", headerName: " Validity", width: 160 },
    { field: "totalVotes", headerName: " Total Votes", width: 160 },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <div className="view-button-outer" style={{ display: "flex" }}>
          <Link to="/view_poll">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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

  const rows = [
    {
      id: 1,
      question: "What new services do you want to see?",
      validity: "2 Days",
      totalVotes: "658",
    },
    {
      id: 2,
      question: "What new services do you want to see?",
      validity: "5 Days",
      totalVotes: "858",
    },
    {
      id: 3,
      question: "What new services do you want to see?",
      validity: "7 Days",
      totalVotes: "958",
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
        <Table
          rows={rows}
          columns={columns}
          //   loading={!societiesList.length}
        />
      </div>
    </Card>
  );
};
export default PoolList;
