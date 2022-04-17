import React from "react";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "../../../../components/Form/Dropdown";
import appartmentContainer from "../../../../container/SocietyConfigration/AppartmentContainer";

const AddApartment = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: " Building ", width: 160 },
    { field: "floors", headerName: " Foor No", width: 160 },
    { field: "apartment", headerName: " Appartment No", width: 160 },
    { field: "parking", headerName: " Allocated Parking", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      name: "Arfa Tower",
      floors: "6",
      apartment: "2-A",
      parking: "1",
    },
    {
      id: 2,
      name: "Ahad Tower",
      floors: "8",
      apartment: "2-B",
      parking: "3",
    },

    {
      id: 3,
      name: "Jeff Heights",
      floors: "4",
      apartment: "2-C",
      parking: "5",
    },
    {
      id: 4,
      name: "Kalma Heights",
      floors: "2",
      apartment: "5-A",
      parking: "3",
    },
  ];

  return (
    <Card>
      <h3> Apartment</h3>
      <div className="row">
        <div className="col-md-6">
          <Dropdown inputLabel="Building" name="society.country_id" className="bootstyle">
            <option>Building</option>
          </Dropdown>
        </div>
        <div className="col-md-6">
          <Dropdown inputLabel="Floor No" name="society.country_id" className="bootstyle">
            <option>Floor No</option>
          </Dropdown>
        </div>
        <div className="col-md-6">
          <Input placeholder="Apartment No" margin="normal" className="bootstyle" />
        </div>
        <div className="col-md-6">
          <Input
            placeholder="Allocated Parking"
            margin="normal"
            className="bootstyle"
          />
        </div>
      </div>

      <div className="society_btn__wrapper">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          size="small"
        >
          Add Apartment
        </Button>
      </div>

      <div
        style={{
          height: 420,
          width: "100%",
          background: "white",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
    </Card>
  );
};
export default appartmentContainer(AddApartment);
