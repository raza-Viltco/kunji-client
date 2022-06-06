import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { terms } from "../../redux/actions/Terms.js/Terms";

const termsContainer = (TermsAndConditions) => () => {
  const dispatch = useDispatch();

  const initialValues = {
    terms_conditions: "",
  };

  const validationSchema = Yup.object().shape({
    terms_conditions: Yup.string().required("Field is required"),
  });

  const handleTerms = (values, formikActions) => {
    console.log(values);
    dispatch(terms({ values, formikActions }));
  };
  return (
    <TermsAndConditions
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleTerms={handleTerms}
    />
  );
};

export default termsContainer;
