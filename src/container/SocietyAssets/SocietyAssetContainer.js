import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { addAsset } from "../../redux/actions/Asset/AddAsset";

const societyAssetContainer = (RegisterAsset) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);

  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Asset name is required."),
  });

  const addAssetHandler = (values, formikActions) => {
    dispatch(addAsset({ values, formikActions }));
  };

  return (
    <RegisterAsset
      initialValues={initialValues}
      validationSchema={validationSchema}
      stateLoading={stateLoading}
      addAssetHandler={addAssetHandler}
    />
  );
};

export default societyAssetContainer;
