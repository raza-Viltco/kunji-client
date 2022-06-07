import React from "react";
import { Formik, Form } from "formik";

import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import TextArea from "../../../../components/Form/textArea";
import termsContainer from "../../../../container/Terms/TermsContainer";
import InputError from "../../../../components/Form/InputError";
import "./termsAndConditions.css";

const TermsAndConditions = ({
  initialValues,
  validationSchema,
  handleTerms,
}) => {
  return (
    <Card>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleTerms}
        enableReinitialize
      >
        {(props) => (
          <Form>
            <h3>Terms and Condition</h3>
            <TextArea
              rows="8"
              placeholder="Terms and Conditions"
              id="terms_conditions"
              name="terms_conditions"
              value={props.values.terms_conditions}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              className={
                props?.errors?.terms_conditions &&
                props?.touched?.terms_conditions
                  ? "input-outline"
                  : ""
              }
            ></TextArea>
            {props?.touched?.terms_conditions &&
              props?.errors?.terms_conditions && (
                <InputError>{props?.errors?.terms_conditions}</InputError>
              )}
            <div className="row">
              <div className="col-sm-9"></div>
              <div className="col-sm-3">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  // isLoading={stateLoading}
                  size="small"
                >
                  Update
                </Button>
              </div>
            </div>
            <div className="society_btn__wrapper"></div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
export default termsContainer(TermsAndConditions);
