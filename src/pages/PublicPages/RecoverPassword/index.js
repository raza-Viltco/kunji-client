import React from "react";
import { Formik, Form } from "formik";

import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import AuthView from "../../../components/AuthView/AuthView";
import InputError from "../../../components/Form/InputError";
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
            <div className="col-sm-12">
              <Input
                margin="normal"
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errors.password && props.touched.password
                    ? "input-outline"
                    : "bootstyle"
                }
              />
              {props.touched.password && Boolean(props.errors.password) && (
                <InputError>{props.errors.password}</InputError>
              )}
            </div>
            <div className="col-sm-12 mt-3">
              <Input
                margin="normal"
                fullWidth
                name="password_confirmation"
                placeholder="Confirm Password"
                type="password"
                id="password_confirmation"
                value={props.values.password_confirmation}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errors.password_confirmation &&
                  props.touched.password_confirmation
                    ? "input-outline"
                    : "bootstyle"
                }
              />
              {props.touched.password_confirmation &&
                Boolean(props.errors.password_confirmation) && (
                  <InputError>{props.errors.password_confirmation}</InputError>
                )}
            </div>
            <div className="col-sm-12">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, borderRadius: 20 }}
                isLoading={stateLoading}
                size="small"
              >
                Send
              </Button>
            </div>
            <div className="form_bottom__line"></div>
          </Form>
        )}
      </Formik>
    </AuthView>
  );
};

export default recoverPasswordContainer(RecoverPassword);
