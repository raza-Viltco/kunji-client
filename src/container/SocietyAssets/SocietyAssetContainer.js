import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { addAsset } from "../../redux/actions/Asset/AddAsset";

const societyAssetContainer = (AssetsForm) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    code: "",
    name: "",
    location: "",
    quantity: "",
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string().required("Code is required."),
    name: Yup.string().required("Asset name is required."),
    location: Yup.string().required("Location is required."),
    quantity: Yup.number().required("Quantity is required."),
  });

  const addAssetHandler = (values, formikActions) => {
    dispatch(addAsset({ values, formikActions }));
  };

  return (
    <AssetsForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      stateLoading={stateLoading}
      addAssetHandler={addAssetHandler}
    />
  );
};

export default societyAssetContainer;
