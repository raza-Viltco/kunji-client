import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { addCharges } from "../../redux/actions/SocietyAdministration/AddCharges";

const addChargesContainer = (ChargesTypeForm) => () => {
  const dispatch = useDispatch();

  const initialValues = {
    charges_code: "",
    charges_title: "",
    charges: "",
  };

  const validationSchema = Yup.object().shape({
    charges_code: Yup.string().required("Charges code is required"),
    charges_title: Yup.string().required("Charges title is required"),
    charges: Yup.string().required("Charges are required"),
  });

  const handleAddCharges = (values, formikActions) => {
    dispatch(addCharges({ values, formikActions }));
  };
  return (
    <ChargesTypeForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleAddCharges={handleAddCharges}
    />
  );
};
export default addChargesContainer;
