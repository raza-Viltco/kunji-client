import React from "react";
import { Formik, Form } from "formik";
import { DataGrid } from "@mui/x-data-grid";

import InputError from "../../../../components/Form/InputError";
import Card from "../../../../components/Card";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import sectorContainer from "../../../../container/SocietyConfigration/SectorContainer";
import "./addSector.css";
import AddSectorList from "./addSectorList";
import { checkForPermission } from "../../../../utils/functions";

const AddSector = ({
  initialValues,
  validationSchema,
  stateLoading,
  handleHorizontalBuilding,
}) => {
  return (
    <Card>
      {checkForPermission("Property Mgmt.", "Mapping Level1") && (
        <>
          <h3> Add Sector/Block </h3>
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
                  <div className="col-md-6 ">
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
                  <div className="col-md-6 mt-3">
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
                      Add Sector
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}

      {checkForPermission("Property Mgmt.", "View Buildings/Sector") && (
        <div>
          <h4 className="sector-list-heading">Add Sector/ Block Listing</h4>
          <AddSectorList />
        </div>
      )}
    </Card>
  );
};
export default sectorContainer(AddSector);
