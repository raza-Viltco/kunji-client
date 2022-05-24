import { React, useState } from "react";
import { Formik, Form } from "formik";
import { AiFillEye } from "react-icons/ai";

import Input from "../../../components/Form/Input";
import InputError from "../../../components/Form/InputError";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import updatePasswordContainer from "../../../container/Auth/UpdatePasswordContainer";

const UpdatePassword = ({
  initialValues,
  validationSchema,
  stateLoading,
  updatePasswordHandler,
}) => {
  const [newPass, setNewPass] = useState("password");
  const [confPass, setConfPass] = useState("password");

  const handleNewPass = () => {
    if (newPass === "password") {
      setNewPass("text");
    } else setNewPass("password");
  };

  const handleConfPass = () => {
    if (confPass === "password") {
      setConfPass("text");
    } else {
      setConfPass("password");
    }
  };

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
                <label className="padding-profile">
                  <b>Old Password</b>
                </label>
                <Input
                  margin="normal"
                  fullWidth
                  id="old_password"
                  placeholder="Old Password"
                  name="old_password"
                  type="password"
                  className={
                    props?.errors?.old_password && props?.touched?.old_password
                      ? "input-outline"
                      : "bootstyle"
                  }
                  value={props.values.old_password}
                  onChange={props.handleChange}
                  error={props.errors.old_password}
                  onBlur={props.handleBlur}
                  helperText
                />
                {props?.touched?.old_password &&
                  props?.errors?.old_password && (
                    <InputError>{props?.errors?.old_password}</InputError>
                  )}
              </div>
              <div className="col-sm-12 mt-2">
                <label className="padding-profile">
                  <b>New Password</b>
                </label>
                <Input
                  margin="normal"
                  fullWidth
                  id="password"
                  placeholder="New Password"
                  name="password"
                  type={newPass}
                  className={
                    props?.errors?.password && props?.touched?.password
                      ? "input-outline"
                      : "bootstyle"
                  }
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.password}
                  helperText
                />
                {props?.touched?.password && props?.errors?.password && (
                  <InputError>{props?.errors?.password}</InputError>
                )}
                <div className="show-pass-icon-style ">
                  <div className="" type="button" onClick={handleNewPass}>
                    <AiFillEye size={30} />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 mt-2">
                <label className="padding-profile">
                  <b>Confirm Password</b>
                </label>
                <Input
                  margin="normal"
                  fullWidth
                  id="password_confirmation"
                  placeholder="Confirm Password"
                  name="password_confirmation"
                  type={confPass}
                  className={
                    props?.errors?.password_confirmation && props?.touched?.password_confirmation
                      ? "input-outline"
                      : "bootstyle"
                  }
                  value={props.values.password_confirmation}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  error={props.errors.password_confirmation}
                  helperText
                />
                   {props?.touched?.password_confirmation && props?.errors?.password_confirmation && (
                        <InputError>{props?.errors?.password_confirmation}</InputError>
                      )}
                <div className="show-pass-icon-style ">
                  <div className="" type="button" onClick={handleConfPass}>
                    <AiFillEye size={30} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-9"></div>
                <div className="col-sm-3 mt-3">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="small"
                    sx={{ borderRadius: 20 }}
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
