import React from "react";
import { Formik, Form } from "formik";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import InputError from "../../../../components/Form/InputError";
import { DataGrid } from "@mui/x-data-grid";

import buildingContainer from "../../../../container/SocietyConfigration/BuildingContainer";

const DefineBuilding = ({
  initialValues,
  stateLoading,
  validationSchema,
  handleAddBuilding,
}) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "buildingcode", headerName: "Building Code", width: 160 },
    { field: "name", headerName: " Building Name", width: 160 },
    { field: "floors", headerName: " Number of Floors", width: 160 },
  ];

  const rows = [
    {
      id: 1,
      buildingcode: "0001",
      name: "Arfa Tower",
      floors: "6",
    },
    {
      id: 2,
      buildingcode: "0002",
      name: "Ahad Tower",
      floors: "8",
    },

    {
      id: 3,
      buildingcode: "0003",
      name: "Jeff Heights",
      floors: "4",
    },
    {
      id: 4,
      buildingcode: "0004",
      name: "Kalma Heights",
      floors: "2",
    },
  ];
  return (
    <Card>
      <h3>Define Building</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddBuilding}
      >
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            <div className="row">
              <div className="col-md-6">
                <Input
                  placeholder="Building Code"
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
                  placeholder="Building Name"
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
              <div className="col-md-6 mt-3">
                <Input
                  placeholder="Number of Floors"
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

            <div className="row">
              <div className="col-sm-9"></div>
              <div className="col-sm-3">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                isLoading={stateLoading}
                size="small"
              >
                Add Building
              </Button>
              </div>
            </div>

          </Form>
        )}
      </Formik>

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
export default buildingContainer(DefineBuilding);
