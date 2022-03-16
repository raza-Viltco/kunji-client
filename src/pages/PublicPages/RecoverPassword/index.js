import React from "react";
import { Formik, Form } from "formik";

import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import AuthView from "../../../components/AuthView/AuthView";
import recoverPasswordContainer from "../../../container/Auth/RecoverPasswordContainer";

const RecoverPassword = ({
  initialValues,
  validationSchema,
  recoverPasswordHandler,
  stateLoading,
}) => {
  return (
    <AuthView heading="Recover Password" subject="Enter your new password">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={recoverPasswordHandler}
      >
        {(props) => (
          <Form>
            <Input
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              error={props.errors.password}
              helperText
            />
            <Input
              margin="normal"
              fullWidth
              name="password_confirmation"
              label="Confirm Password"
              type="password"
              id="password_confirmation"
              value={props.values.password_confirmation}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              error={props.errors.password_confirmation}
              helperText
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
              isLoading={stateLoading}
              size="small"
            >
              Sign Up
            </Button>
            <div className="form_bottom__line"></div>
          </Form>
        )}
      </Formik>
    </AuthView>
  );
};

export default recoverPasswordContainer(RecoverPassword);
