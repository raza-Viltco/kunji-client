import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { terms, termsData } from "../../redux/actions/Terms.js/Terms";

const termsContainer = (TermsAndConditions) => () => {
  const dispatch = useDispatch();
  const termsListData = useSelector((state) => state.terms.termsData);
  const termsCondition = termsListData?.value;
  const createTerms = useSelector((state) => state.terms.createTerms);

  const initialValues = {
    terms_conditions: termsCondition,
  };

  const validationSchema = Yup.object().shape({
    terms_conditions: Yup.string().required("Field is required"),
  });

  const handleTerms = (values, formikActions) => {
    dispatch(terms({ values, formikActions }));
  };

  useEffect(() => {
    dispatch(termsData());
  }, [createTerms]);
  
  return (
    <TermsAndConditions
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleTerms={handleTerms}
    />
  );
};

export default termsContainer;
