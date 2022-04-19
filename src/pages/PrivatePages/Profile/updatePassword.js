import { React } from "react";
import { Formik, Form } from "formik";

import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import updatePasswordContainer from "../../../container/Auth/UpdatePasswordContainer";

const UpdatePassword = ({
  initialValues,
  validationSchema,
  stateLoading,
  updatePasswordHandler,
}) => {
  return (
    <>
      <Card>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={updatePasswordHandler}
        >
          {(props) => (
            <Form>
              <div className="col-sm-12 mt-2">
              <label className="padding-profile"><b>Old Password</b></label>
                <Input
                  margin="normal"
                  fullWidth
                  id="old_password"
                  placeholder="Old Password"
                  name="old_password"
                  type="password"
                  className="bootstyle"
                  value={props.values.old_password}
                  onChange={props.handleChange}
                  error={props.errors.old_password}
                  onBlur={props.handleBlur}
                  helperText
                />
              </div>
              <div className="col-sm-12 mt-2">
              <label className="padding-profile"><b>New Password</b></label>
                <Input
                  margin="normal"
                  fullWidth
                  id="password"
                  placeholder="New Password"
                  name="password"
                  type="password"
                  className="bootstyle"
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.password}
                  helperText
                />
              </div>

              <div className="col-sm-12 mt-2">
              <label className="padding-profile"><b>Confirm Password</b></label>
                <Input
                  margin="normal"
                  fullWidth
                  id="password_confirmation"
                  placeholder="Confirm Password"
                  name="password_confirmation"
                  type="password"
                  className="bootstyle"
                  value={props.values.password_confirmation}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.password_confirmation}
                  helperText
                />
              </div>

              <div className="row">
                <div className="col-sm-9"></div>
                <div className="col-sm-3 mt-3">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="small"
                  sx={{borderRadius:20}}
                  isLoading={stateLoading}
                >
                  Update Password
                </Button>
                </div>

              </div>

              
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default updatePasswordContainer(UpdatePassword);
