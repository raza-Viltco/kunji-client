import React from "react";

import Table from "../../../../components/Table";
import Button from "../../../../components/Button";
import billListContainer from "../../../../container/SocietyAdministration/BillListContainer";

const BillListing = ({ billListData }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "charges_code",
      headerName: "Charges Code",
      valueGetter: (params) => params?.row?.charges_type_list?.charges_code,
      width: 200,
    },
    {
      field: "charges_title",
      headerName: "Charges Title",
      valueGetter: (params) => params?.row?.charges_type_list?.charges_title,
      width: 200,
    },
    {
      field: "charges",
      headerName: " Charges",
      valueGetter: (params) => params?.row?.charges_type_list?.charges,
    },
    { field: "due_date", headerName: " Due Date", width: 200 },
  ];

  return (
    <>
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={billListData}
          columns={columns}
          // loading={stateLoading}
        />
      </div>

      {/* <div className="row">
        <div className="col-sm-9"></div>
        <div className="col-sm-3">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 20 }}
            // isLoading={stateLoading}
            size="small"
          >
            Generate Bill
          </Button>
        </div>
      </div> */}
    </>
  );
};
export default billListContainer(BillListing);
