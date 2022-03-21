import { React } from "react";
import { Formik, Form } from "formik";

import Input from "../../../components/Form/Input";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import updatePasswordContainer from "../../../container/Auth/UpdatePasswordContainer";

const UpdatePassword = ({
  initialValues,
  validationSchema,
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
              <Input
                margin="normal"
                fullWidth
                id="old_password"
                label="Old Password"
                name="old_password"
                type="password"
                value={props.values.old_password}
                onChange={props.handleChange}
                error={props.errors.old_password}
                onBlur={props.handleBlur}
                helperText
              />
              <Input
                margin="normal"
                fullWidth
                id="password"
                label="New Password"
                name="password"
                type="password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.errors.password}
                helperText
              />
              <Input
                margin="normal"
                fullWidth
                id="password_confirmation"
                label="Confirm Password"
                name="password_confirmation"
                type="password"
                value={props.values.password_confirmation}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.errors.password_confirmation}
                helperText
              />
              <div className="society_btn__wrapper pt-4">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="small"
                >
                  Update Password
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default updatePasswordContainer(UpdatePassword);
