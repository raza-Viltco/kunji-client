import React from "react";
import { Formik, Form } from "formik";

import Card from "../../../components/Card";
import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";
import emergencyContactContainer from "../../../container/EmergencyContact/EmergencyContactContainer";

const EmergencyContact = ({ initialValues, handleCreateContacts }) => {
  return (
    <Card>
      <h4>Emergency Contacts</h4>
      <Formik initialValues={initialValues} onSubmit={handleCreateContacts}>
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            <div className="row">
              <div className="col-md-12">
                <label className="px-2">
                  <b>Emergency Contact 1</b>
                </label>
                <Input
                  className="bootstyle"
                  placeholder="Emergency Contact 1"
                  name="emergency_contact[0]"
                  value={props.values.emergency_contact[0]}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              <div className="col-md-12 mt-3">
                <label className="px-2">
                  <b>Emergency Contact 2</b>
                </label>
                <Input
                  className="bootstyle"
                  placeholder="Emergency Contact 2"
                  name="emergency_contact[1]"
                  value={props.values.emergency_contact[1]}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
              <div className="col-md-12 mt-3">
                <label className="px-2">
                  <b>Emergency Contact 3</b>
                </label>
                <Input
                  className="bootstyle"
                  placeholder="Emergency Contact 3"
                  name="emergency_contact[2]"
                  value={props.values.emergency_contact[2]}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9"></div>
              <div className="col-sm-3">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  // isLoading={stateLoading}
                  size="small"
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default emergencyContactContainer(EmergencyContact);
