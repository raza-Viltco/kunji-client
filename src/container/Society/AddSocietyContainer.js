import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  countriesData,
  citiesData,
  addSociety,
} from "../../redux/actions/Society/AddSociety";

const addSocietyContainer = (AddSociety) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);
  const countryData = useSelector((state) => state.addSociety.countryData);
  const cityData = useSelector((state) => state.addSociety.cityData);
  const cityId = useSelector((state) => state.addSociety.cityId);

  const initialValues = {
    society: {
      name: "",
      country_id: "",
      city_id: "",
      zip_code: "",
      society_type: "",
    },
    society_admin_user: {
      full_name: "",
      address: "",
      email: "",
      mobile: "",
    },
    documents: [],
  };

  const validationSchema = Yup.object().shape({
    society: Yup.object().shape({
      name: Yup.string()
        .required("Society name is required!")
        .matches(
          /^[aA-zZ\s]+$/,
          "Only alphabets are allowed for society name "
        ),
      country_id: Yup.string().required("Country is required!"),
      city_id: Yup.string().required("City is required!"),
      zip_code: Yup.string().required("Zipcode is required!"),
    }),
    society_admin_user: Yup.object().shape({
      full_name: Yup.string()
        .required("Full name is required!")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for  name "),
      address: Yup.string().required("Address is required!"),
      email: Yup.string()
        .email("Invalid email address!")
        .required("Email is required!"),
      mobile: Yup.string()
        .required("Contact is required!")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Contact number is not valid"
        ),
    }),
  });

  const addSocietyHandler = (values, formikActions) => {
    console.log(values);
    dispatch(addSociety({ values, formikActions }));
  };

  useEffect(() => {
    dispatch(countriesData());
  }, []);

  useEffect(() => {
    dispatch(citiesData(cityId));
  }, [cityId]);

  return (
    <AddSociety
      initialValues={initialValues}
      validationSchema={validationSchema}
      countryData={countryData}
      cityData={cityData}
      stateLoading={stateLoading}
      addSocietyHandler={addSocietyHandler}
    />
  );
};

export default addSocietyContainer;
