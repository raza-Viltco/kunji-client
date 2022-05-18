import React from "react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import Dropdown from "../../../../components/Form/Dropdown";
import appartmentContainer from "../../../../container/SocietyConfigration/AppartmentContainer";
import InputError from "../../../../components/Form/InputError";
import { setMappingId } from "../../../../redux/actions/SocietyConfiguration/SocietyConfiguration";
import AddAppartmentList from "./addAppartmentList";

const AddApartment = ({
  initialValues,
  validationSchema,
  buildingArr,
  floorArr,
  verticalMappingHandler,
}) => {
  const dispatch = useDispatch();

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
            <h3>Add Appartment</h3>
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
              <div className="col-md-6 mt-3">
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
              <div className="col-md-6 mt-3">
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

            <div className="row">
              <div className="col-sm-9"></div>
              <div className="col-sm-3">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  size="small"
                >
                  Add Apartment
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <AddAppartmentList />
    </Card>
  );
};
export default appartmentContainer(AddApartment);
