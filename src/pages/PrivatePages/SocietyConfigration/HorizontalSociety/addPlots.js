import React from "react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import Dropdown from "../../../../components/Form/Dropdown";
import InputError from "../../../../components/Form/InputError";
import plotContainer from "../../../../container/SocietyConfigration/PlotContainer";
import { setMappingId } from "../../../../redux/actions/SocietyConfiguration/SocietyConfiguration";
import AddPlotListing from "./addPlotList";
import { checkForPermission } from "../../../../utils/functions";
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

  return (
    <Card>
      {checkForPermission("Property Mgmt.", "level2") && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={areaMappingHandler}
        >
          {(props) => (
            <Form>
              {console.log(props)}
              <h3>Add Plots</h3>
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
                <div className="col-md-6 mt-3">
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
                    Add Plots
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}

      {checkForPermission("Property Mgmt.", "Full Map") && <AddPlotListing />}
    </Card>
  );
};
export default plotContainer(AddPlots);
