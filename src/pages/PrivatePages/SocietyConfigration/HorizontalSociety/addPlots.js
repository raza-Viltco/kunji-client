import React from "react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "../../../../components/Form/Dropdown";
import InputError from "../../../../components/Form/InputError";
import plotContainer from "../../../../container/SocietyConfigration/PlotContainer";
import { setMappingId } from "../../../../redux/actions/SocietyConfiguration/SocietyConfiguration";
import "./addPlots.css";

const AddPlots = ({
  initialValues,
  buildingArr,
  floorArr,
  validationSchema,
  stateLoading,
  areaMappingHandler,
}) => {
  const dispatch = useDispatch();

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "sector", headerName: "Sector/Block", width: 160 },
    { field: "street", headerName: " Street", width: 160 },
    { field: "plot", headerName: " Plot/ House No", width: 160 },
  ];

  const rows = [
    {
      street: "1001",
      sector: "Sector A",
      id: 1,
      plot: 1,
    },
    {
      street: "2001",
      sector: "Sector B",
      id: 2,
      plot: 99,
    },

    {
      street: "3001",
      sector: "Sector C",
      id: 3,
      plot: 200,
    },
    {
      street: "4001",
      sector: "Sector D",
      id: 4,
      plot: 57,
    },
  ];
  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={areaMappingHandler}
      >
        {(props) => (
          <Form>
            {console.log(props)}
            <div className="row">
              <div className="col-md-6">
                <Dropdown
                  inputLabel="Select Sector/Block No"
                  name="building"
                  value={props.values.building}
                  onChange={(e) => {
                    props.handleChange(e);
                    dispatch(setMappingId(e.target.value));
                  }}
                  className={
                    props?.errors?.building && props?.touched?.building
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Sector/Block No</option>
                  {buildingArr.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.sector_block_building}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.touched?.building && props?.errors?.building && (
                  <InputError>{props?.errors?.building}</InputError>
                )}
              </div>
              <div className="col-md-6">
                <Dropdown
                  inputLabel="Street"
                  name="floor"
                  value={props.values.floor}
                  onChange={props.handleChange}
                  className={
                    props?.errors?.floor && props?.touched?.floor
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Street</option>
                  {floorArr.map((item, index) => {
                    return (
                      <option value={item.id} key={index}>
                        {item.street_floor}
                      </option>
                    );
                  })}
                </Dropdown>
                {props?.touched?.floor && props?.errors?.floor && (
                  <InputError>{props?.errors?.floor}</InputError>
                )}
              </div>
              <div className="col-md-6">
                <Input
                  placeholder="Plot/House No"
                  name="plot"
                  value={props.values.plot}
                  onChange={props.handleChange}
                  className={
                    props?.errors?.plot && props?.touched?.plot
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.plot && props?.errors?.plot && (
                  <InputError>{props?.errors?.plot}</InputError>
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
                Add Plots
              </Button>
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
export default plotContainer(AddPlots);
