import React, { useEffect } from "react";
import { Button, Grid} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Input from "../../components/Form/Input";
import { login } from "../../redux/actions/user";
import AuthView from "../../components/AuthView/AuthView";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user.data);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required."),
    password: Yup.string().required("Password is required."),
  });

  const loginHandler = (values) => {
    console.log(values);
    dispatch(login(values));
  };

  useEffect(() => {
    if (state?.data?.token) {
      navigate("/");
    }
  }, [state]);

  return (
    <AuthView>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={loginHandler}
      >
        {(props) => (
          <Form noValidate>
            {console.log(props)}
            <Input
              margin="normal"
              //   required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            {/* {props.errors.email && props.touched.email && (
              <div className="text-start">
                <p className="badge bg-danger">{props.errors.email}</p>
              </div>
            )} */}
            <Input
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              //   autoComplete="current-password"
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              //   error={props.errors.password}
              //   helperText
            />
            {/* {props.errors.password && props.touched.password && (
              <div className="text-start">
                <p className="badge bg-danger">{props.errors.password}</p>
              </div>
            )} */}
            {/* <FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
      <Grid container>
        <Grid item xs>
          <Link to="/forgot_password">Forgot password?</Link>
        </Grid>
        <Grid item>
          <Link to="/register">{"Don't have an account? Sign Up"}</Link>
        </Grid>
      </Grid>
    </AuthView>
  );
};

export default Auth;
