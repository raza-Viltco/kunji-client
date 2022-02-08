import React, { useState } from "react";
// import { Field, reduxForm, Form } from 'redux-form';
import { connect } from "react-redux";
import EyeIcon from "mdi-react/EyeIcon";
import KeyVariantIcon from "mdi-react/KeyVariantIcon";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Alert, Button } from "reactstrap";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import renderCheckBoxField from "../form/CheckBox";
import draftToHtml from "draftjs-to-html";

const LogInForm = ({
  handleSubmit,
  errorMessage,
  errorMsg,
  fieldUser,
  typeFieldUser,
  form,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    password: Yup.string().required("Password is required."),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(props) => (
        <Form className="form login-form">
          <Alert color="danger" isOpen={!!errorMessage || !!errorMsg}>
            {errorMessage}
            {errorMsg}
          </Alert>
          <div className="form__form-group">
            <span className="form__form-group-label">{fieldUser}</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <AccountOutlineIcon />
              </div>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              {/* <Field
            name="username"
            component="input"
            type={typeFieldUser}
            placeholder={fieldUser}
            className="input-without-border-radius"
          /> */}
            </div>
            {props.errors.email && props.touched.email && (
              <div className="text-center">
                <p className="badge badge-danger text-white font-weight-bold m-0 p-1">
                  {props.errors.email}
                </p>
              </div>
            )}
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Password</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <KeyVariantIcon />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              {/* <Field
            name="password"
            component="input"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="input-without-border-radius"
          /> */}
              <button
                type="button"
                className={`form__form-group-button${
                  showPassword ? " active" : ""
                }`}
                onClick={showPasswordToggle}
              >
                <EyeIcon />
              </button>
              <div className="account__forgot-password">
                <NavLink to="/reset_password">Forgot a password?</NavLink>
              </div>
            </div>
            {props.errors.password && props.touched.password && (
              <div className="text-center">
                <p className="badge badge-danger text-white font-weight-bold m-0 p-1">
                  {props.errors.password}
                </p>
              </div>
            )}
          </div>
          <div className="form__form-group">
            <div className="form__form-group form__form-group-field">
              {/* <Field
            name={`remember_me-${form}`}
            component={renderCheckBoxField}
            label="Remember me"
          /> */}
            </div>
          </div>
          <div className="account__btns">
            {form === "modal_login" ? (
              <Button className="account__btn" type="submit" color="primary">
                Sign In
              </Button>
            ) : (
              <NavLink
                className="account__btn btn btn-primary"
                to="/online_marketing_dashboard"
              >
                Sign In
              </NavLink>
            )}

            <NavLink
              className="btn btn-outline-primary account__btn"
              to="/register"
            >
              Create Account
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
};

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  errorMsg: PropTypes.string,
  fieldUser: PropTypes.string,
  typeFieldUser: PropTypes.string,
  form: PropTypes.string.isRequired,
};

LogInForm.defaultProps = {
  errorMessage: "",
  errorMsg: "",
  fieldUser: "Username",
  typeFieldUser: "text",
};

// export default connect(state => ({
//   errorMsg: state.user.error,
// }))(reduxForm()(LogInForm));
export default LogInForm;
