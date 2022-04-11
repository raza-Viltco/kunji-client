import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Button from "../../../components/Button";
import Input from "../../../components/Form/Input";
import AuthView from "../../../components/AuthView/AuthView";
import loginContainer from "../../../container/Auth/LoginContainer";
import "./Auth.css";
import Dropdown from "../../../components/Form/Dropdown";
import MenuItem from "@mui/material/MenuItem";

const Auth = ({
  initialValues,
  validationSchema,
  loginHandler,
  stateLoading,
}) => (
  <AuthView heading="Sign In" subject="Enter your email & password">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={loginHandler}
    >
      {(props) => (
        <Form>
          {/* <div className="col-md-12  mt-3">
            <Dropdown
              label="City"
              name="society.city_id"
            >
            </Dropdown>
          </div> */}


          <div className="col-sm-12 mt-3 p-0">
            <Input
              placeholder="Enter Username"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </div>

          <div className="col-sm-12 mt-3 p-0">
            <Input
              placeholder="Enter Password"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              error={props.touched.password && Boolean(props.errors.password)}
              helperText={props.touched.password && props.errors.password}
            />
          </div>
          <div className="col-sm-12 forgot_text__link ">
            <Link to="/forgot_password">
              <p className="text-end m-0 ">Forgot Password</p>
            </Link>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, borderRadius: 20 }}
            isLoading={stateLoading}
            size="small"
          >
            Sign In
          </Button>
          <div className="form_bottom__line"></div>
          <div className="form_signup__link">
            <Link to="/register">
              <p className="text-center m-0 ">
                Do you have account? <b> Sign up </b>
              </p>
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  </AuthView>
);

export default loginContainer(Auth);
