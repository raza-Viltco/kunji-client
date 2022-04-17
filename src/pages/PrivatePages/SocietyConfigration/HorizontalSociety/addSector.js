import React from "react";
import { Formik, Form } from "formik";
import { DataGrid } from "@mui/x-data-grid";

import InputError from "../../../../components/Form/InputError";
import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import sectorContainer from "../../../../container/SocietyConfigration/SectorContainer";
import "./addSector.css";

const AddSector = ({
  initialValues,
  validationSchema,
  stateLoading,
  handleHorizontalBuilding,
}) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "sector", headerName: "Sector", width: 160 },
    { field: "name", headerName: " Name", width: 160 },
  ];

  const rows = [
    {
      sector: "1001",
      name: "Sector A",
      id: 1,
    },
    {
      sector: "2001",
      name: "Sector B",
      id: 2,
    },

    {
      sector: "3001",
      name: "Sector C",
      id: 3,
    },
    {
      sector: "4001",
      name: "Sector D",
      id: 4,
    },
  ];
  return (
    <Card>
      <h3> Add Sector/Block No:</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleHorizontalBuilding}
      >
        {(props) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Input
                  placeholder="Sector/Block No"
                  name="building_code"
                  type="text"
                  value={props.values.building_code}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.building_code &&
                    props?.touched?.building_code
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.building_code &&
                  props?.errors?.building_code && (
                    <InputError>{props?.errors?.building_code}</InputError>
                  )}
              </div>
              <div className="col-md-6">
                <Input
                  placeholder="Sector Name"
                  name="building_name"
                  type="text"
                  value={props.values.building_name}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.building_name &&
                    props?.touched?.building_name
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.building_name &&
                  props?.errors?.building_name && (
                    <InputError>{props?.errors?.building_name}</InputError>
                  )}
              </div>
              <div className="col-md-6">
                <Input
                  placeholder="Number Of Streets"
                  name="floor_streets"
                  type="text"
                  value={props.values.floor_streets}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={
                    props?.errors?.floor_streets &&
                    props?.touched?.floor_streets
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.floor_streets &&
                  props?.errors?.floor_streets && (
                    <InputError>{props?.errors?.floor_streets}</InputError>
                  )}
              </div>
            </div>
            <div className="society_btn__wrapper">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                isLoading={stateLoading}
                size="small"
              >
                Add Sector
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      <div>
        <h3 className="sector-list-heading">Add Sector/ Block Listing</h3>
        <div
          style={{
            height: 420,
            width: "100%",
            background: "white",
            textAlign: "center",
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
      </div>
    </Card>
  );
};
export default sectorContainer(AddSector);
