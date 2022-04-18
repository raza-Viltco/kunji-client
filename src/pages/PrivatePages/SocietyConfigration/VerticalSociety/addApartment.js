import React from "react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "../../../../components/Form/Dropdown";
import appartmentContainer from "../../../../container/SocietyConfigration/AppartmentContainer";
import InputError from "../../../../components/Form/InputError";
import { setMappingId } from "../../../../redux/actions/SocietyConfiguration/SocietyConfiguration";

const AddApartment = ({
  initialValues,
  validationSchema,
  buildingArr,
  floorArr,
  verticalMappingHandler,
}) => {
  const dispatch = useDispatch();
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
      {/* <h3> Apartment</h3> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={verticalMappingHandler}
      >
        {(props) => (
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Dropdown
                  inputLabel="Building"
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
                  <option>Select Building</option>
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
                  inputLabel="Floor No"
                  name="floor"
                  value={props.values.floor}
                  onChange={props.handleChange}
                  className={
                    props?.errors?.floor && props?.touched?.floor
                      ? "input-outline"
                      : "bootstyle"
                  }
                >
                  <option>Select Floor No</option>
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
                  placeholder="Apartment No"
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
              <div className="col-md-6">
                <Input
                  placeholder="Allocated Parking"
                  name="parking"
                  value={props.values.parking}
                  onChange={props.handleChange}
                  className={
                    props?.errors?.plot && props?.touched?.parking
                      ? "input-outline"
                      : "bootstyle"
                  }
                />
                {props?.touched?.parking && props?.errors?.parking && (
                  <InputError>{props?.errors?.parking}</InputError>
                )}
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
export default appartmentContainer(AddApartment);
